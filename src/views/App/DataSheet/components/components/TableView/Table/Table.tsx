import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { Sheet, ShowPopup } from 'types/types';
import {
  selectIsSelectingCell, selectRowToHighlight, selectSelectedSheet,
  selectSheets, selectShowPopup, setRowToHighlight, setSelectedRow, setShowPopup, setShowSearch,
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
  const dispatch = useDispatch();

  const getKeys = () => {
    const keys = Object.entries(sheet?.data[0] || {}).map(([key]) => {
      if (headerEdit[key]) return headerEdit[key];
      return key;
    });
    return keys;
  };

  const headerKeys = getKeys();
  const headersType1 = sheet?.data[0] ? headerKeys : [];
  const headers = (sheet && sheet.isSortRow) ? headerKeys.sort() : headersType1;

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
              { headers.map((key, i) => (
                <S.TH key={`tableheader_${key}`}>
                  {rowToHighlight === key && <S.Highlight />}
                  <S.THText>{key}</S.THText>
                  <S.TouchSensor
                    id={`tableHead${i}`}
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
                </S.TH>
              ))}
            </tr>
          </thead>
          <TableBody />
        </S.Table>
      </S.TableDiv>
    </S.Container>
  );
};

export default Table;
