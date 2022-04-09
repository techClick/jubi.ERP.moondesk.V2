import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { DisplaySheet, Sheet, ShowPopup } from 'types/types';
import {
  selectDisplaySheets,
  selectIsSelectingCell, selectRowToHighlight, selectSelectedSheet,
  selectSheets, selectShowPopup, setRowToHighlight, setSelectedRow, setShowPopup, setShowSearch,
} from 'views/App/DataSheet/redux';
import FormatRow from './FormatRow/FormatRow';
import * as S from './Table.styled';
import TableBody from './TableBody/TableBody';

const Table = function Table() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const displaySheet: DisplaySheet = useAppSelector(selectDisplaySheets)[selectedSheet];
  const rowToHighlight: string = useAppSelector(selectRowToHighlight);
  const showPopup: ShowPopup = useAppSelector(selectShowPopup);
  const isSelectingCell: boolean = useAppSelector(selectIsSelectingCell);
  const dispatch = useDispatch();

  const headersType1 = displaySheet[0] ? Object.keys(displaySheet[0]) : [];
  const headers = (displaySheet[0] && sheet.isSortRow) ? Object.keys(displaySheet[0]).sort()
    : headersType1;

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
