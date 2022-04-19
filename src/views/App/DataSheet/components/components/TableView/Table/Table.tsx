import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { Sheet, ShowPopup } from 'types/types';
import {
  selectIsSelectingCell, selectRowToHighlight, selectSelectedSheet,
  selectSheets, selectShowPopup, setRowToHighlight, setSearch, setSelectedRow, setShowPopup,
  setShowSearch,
} from 'views/App/DataSheet/redux';
import FormatRow from './FormatRow/FormatRow';
import * as S from './Table.styled';
import TableBody from './TableBody/TableBody';

const Table = function Table() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const headerEdit = useAppSelector(selectSheets)[selectedSheet].edits.headers || {};
  const rowToHighlight: string = useAppSelector(selectRowToHighlight);
  const showPopup: ShowPopup = useAppSelector(selectShowPopup);
  const isSelectingCell: boolean = useAppSelector(selectIsSelectingCell);
  const currentEditStep = sheet.editStep;
  const dispatch = useDispatch();

  const getKeys = () => {
    // eslint-disable-next-line consistent-return
    let keys = Object.entries(sheet?.data[0] || {}).map(([key]) => {
      if (headerEdit[key]) return headerEdit[key];
      return key;
    });
    keys = keys.filter((key) => key !== 'md_id_4y4');
    return keys;
  };

  const getIsSaveClear = (editStepName: string) => {
    let isSaveClear = false;
    for (let i = currentEditStep - 1; i > -1; i -= 1) {
      if (sheet.editSteps[i].name === editStepName) {
        isSaveClear = true;
        break;
      }
    }
    return isSaveClear;
  };

  const headerKeys = getKeys();
  const headersType1 = sheet?.data[0] ? headerKeys : [];
  const headers = (sheet && sheet.isSortRow) ? headerKeys.sort() : headersType1;

  const getRowNameForSaveSearch = (selectedRow: string) => {
    let rowNameForSaveSearch = selectedRow;
    for (const [key, value] of Object.entries(sheet.edits.headers || {})) {
      if (value === selectedRow) {
        rowNameForSaveSearch = key;
        break;
      }
    }
    return rowNameForSaveSearch;
  };

  return (
    <S.Container id="tableCont">
      <S.TableDiv>
        <S.Table
          onMouseEnter={() => {
            if (isSelectingCell) dispatch(setShowSearch(false));
          }}
          onMouseLeave={() => {
            if (isSelectingCell) dispatch(setShowSearch(true));
          }}
        >
          <thead>
            <tr>
              { headers.map((key) => {
                const rowNameForSaveSearch = getRowNameForSaveSearch(key);
                return (
                  <S.TH key={`tableheader_${key}`}>
                    {rowToHighlight === key && <S.Highlight />}
                    <S.THText>
                      {key}
                      {
                        sheet.edits.search?.rowSearch?.[rowNameForSaveSearch]?.text && (
                        <S.IconContainer
                          onClick={() => {
                            dispatch(setSearch([
                              'rowSearch',
                              {
                                ...sheet.edits?.search?.rowSearch,
                                [rowNameForSaveSearch]: {
                                  text: '',
                                  isInvertSearch: false,
                                },
                              },
                              {
                                name: `Search on row (${key})`,
                                description: 'Clear search',
                                edits: {},
                                saveThis: getIsSaveClear(`Search on row (${key})`),
                                isSearch: true,
                              },
                            ]));
                          }}
                        >
                          <S.SearchIcon>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </S.SearchIcon>
                        </S.IconContainer>
                        )
                      }
                      <S.TouchSensor
                        isSelectingCell={isSelectingCell}
                        onMouseOver={() => {
                          if (isSelectingCell) dispatch(setRowToHighlight(key));
                        }}
                        onMouseLeave={() => {
                          if (isSelectingCell && !showPopup.component) dispatch(setRowToHighlight(''));
                        }}
                        onClick={() => {
                          if (isSelectingCell) {
                            dispatch(setShowPopup({
                              component: <FormatRow />,
                              exitOnBgClick: true,
                              action: () => dispatch(setRowToHighlight('')),
                            }));
                            dispatch(setSelectedRow(key));
                          }
                        }}
                      />
                    </S.THText>
                  </S.TH>
                );
              })}
            </tr>
          </thead>
          <TableBody />
        </S.Table>
      </S.TableDiv>
    </S.Container>
  );
};

export default Table;
