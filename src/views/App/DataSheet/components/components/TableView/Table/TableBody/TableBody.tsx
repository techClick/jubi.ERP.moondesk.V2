import React, { useEffect, useState } from 'react';
import { Search, Sheet } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { setDisplaySheetFromEdits } from 'views/App/DataSheet/utils/utils';
import {
  selectIsSelectingCell, selectRowToHighlight, selectSelectedSheet,
  selectSheets, selectShowPopup, selectShowSearch, setRowToHighlight,
  setShowPopup, setToChangeIds,
} from 'views/App/DataSheet/redux';
import * as S from './TableBody.styled';
import TDEntryText from './TDEntryText/TDEntryText';
import FormatColumn from './FormatColumn/FormatColumn';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const headerEdit = useAppSelector(selectSheets)[selectedSheet].edits.headers || {};
  const { displaySheet, allDisplaySheet } = sheet;
  const { text: searchText }: Search = sheet.edits?.search?.globalSearch || {};
  const rowSearch = sheet.edits?.search?.rowSearch;
  const rowToHighlight: string = useAppSelector(selectRowToHighlight);
  const showSearch: boolean = useAppSelector(selectShowSearch);
  const isSelectingCell: boolean = useAppSelector(selectIsSelectingCell);
  const showPopup = useAppSelector(selectShowPopup);
  const { isSelectAllColumns } = useAppSelector(selectSheets)[selectedSheet].edits;
  const [valueToHighlight, setValueToHighlight] = useState<string>();
  const [selectedColumn, setSelectedColumn] = useState<number | null>();
  const [currentRow, setCurrentRow] = useState<string>();
  const dispatch = useDispatch();

  const headersType1 = displaySheet[0] ? Object.keys(displaySheet[0]) : [];
  let headers = (displaySheet[0] && sheet.isSortRow) ? Object.keys(displaySheet[0]).sort()
    : headersType1;
  headers = headers.filter((key: any) => key !== 'md_id_4y4');

  const editedHeaderkeys: any = {};
  Object.entries(displaySheet[0] || {}).map(([key]) => {
    if (headerEdit[key]) {
      editedHeaderkeys[key] = headerEdit[key];
    } else {
      editedHeaderkeys[key] = key;
    }
  });

  useEffect(() => {
    const toChangeIdsTmp: number[] = [];
    allDisplaySheet.map((entry) => {
      if (entry[currentRow || ''] && ((entry[currentRow || ''] === valueToHighlight && isSelectAllColumns)
        || Number(entry.md_id_4y4) === selectedColumn)) {
        toChangeIdsTmp.push(Number(entry.md_id_4y4));
      }
    });
    dispatch(setToChangeIds(toChangeIdsTmp));
  }, [isSelectAllColumns, currentRow]);

  useEffect(() => {
    dispatch(setDisplaySheetFromEdits());
  }, [searchText, selectedSheet, rowSearch, sheet.edits]);
  return (
    <tbody>
      { displaySheet?.map((entry, i) => {
        return (
          <S.TR key={`tablebody${i}`}>
            { headers.map((header) => {
              return (
                <S.TD key={`sheettd${header}${i}`}>
                  <S.TDText>
                    <TDEntryText value={entry[header]} />
                  </S.TDText>
                  {((searchText && searchText !== '' && entry[header]?.toString().includes(searchText || '') && showSearch)
                    || rowToHighlight === editedHeaderkeys[header])
                    && <S.Highlight />}
                  {((valueToHighlight === entry[header]
                      && header === currentRow && isSelectAllColumns)
                      || (header === currentRow && selectedColumn === Number(entry.md_id_4y4)))
                    && <S.Highlight2 />}
                  <S.TouchSensor
                    isSelectingCell={isSelectingCell}
                    onMouseOver={() => {
                      if (isSelectingCell) {
                        dispatch(setRowToHighlight(''));
                        setSelectedColumn(Number(entry.md_id_4y4));
                        setCurrentRow(header);
                        setValueToHighlight(entry[header] || '');
                      }
                    }}
                    onMouseLeave={() => {
                      if (isSelectingCell && !showPopup.component) {
                        setSelectedColumn(null);
                        setCurrentRow('');
                        setValueToHighlight('');
                      }
                    }}
                    onClick={() => {
                      if (isSelectingCell) {
                        dispatch(setShowPopup({
                          component: <FormatColumn
                            currentRow={currentRow || ''}
                            value={valueToHighlight || ''}
                          />,
                          exitOnBgClick: true,
                        }));
                      }
                    }}
                  />
                </S.TD>
              );
            })}
          </S.TR>
        );
      })}
    </tbody>
  );
};

export default TableBody;
