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
  const rowToHighlight: string = useAppSelector(selectRowToHighlight);
  const showPopup: ShowPopup = useAppSelector(selectShowPopup);
  const isSelectingCell: boolean = useAppSelector(selectIsSelectingCell);
  const dispatch = useDispatch();

  const headers = sheet.isSortRow ? Object.keys(sheet.data[0]).sort()
    : Object.keys(sheet.data[0]);

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
