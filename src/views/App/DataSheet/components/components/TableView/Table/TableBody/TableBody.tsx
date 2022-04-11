import React, { useEffect } from 'react';
import { Search, DisplaySheet, Sheet } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { setDisplaySheetFromEdits } from 'views/App/DataSheet/utils/utils';
import {
  selectDisplaySheets, selectRowToHighlight, selectSelectedSheet, selectSheets, selectShowSearch,
} from 'views/App/DataSheet/redux';
import * as S from './TableBody.styled';
import TDEntryText from './TDEntryText/TDEntryText';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const headerEdit = useAppSelector(selectSheets)[selectedSheet].edits.headers || {};
  const displaySheet: DisplaySheet = useAppSelector(selectDisplaySheets)[selectedSheet];
  const { text: searchText }: Search = sheet.edits?.search?.plainSearch || {};
  const rowSearch = sheet.edits?.search?.rowSearch;
  const rowToHighlight: string = useAppSelector(selectRowToHighlight);
  const showSearch: boolean = useAppSelector(selectShowSearch);
  const dispatch = useDispatch();

  const headersType1 = displaySheet[0] ? Object.keys(displaySheet[0]) : [];
  let headers = (displaySheet[0] && sheet.isSortRow) ? Object.keys(displaySheet[0]).sort()
    : headersType1;
  headers = headers.filter((key: any) => key !== 'md_id_4y4');

  const editedHeaderkeys: any = {};
  // eslint-disable-next-line consistent-return
  Object.entries(displaySheet[0] || {}).map(([key]) => {
    if (headerEdit[key]) {
      editedHeaderkeys[key] = headerEdit[key];
    } else {
      editedHeaderkeys[key] = key;
    }
  });

  useEffect(() => {
    dispatch(setDisplaySheetFromEdits());
  }, [searchText, selectedSheet, rowSearch, sheet]);

  return (
    <tbody>
      { displaySheet?.map((entry, i) => (
        <S.TR key={`tablebody${i}`}>
          { headers.map((header) => (
            <S.TD key={`sheettd${header}${i}`}>
              <S.TDText>
                <TDEntryText value={entry[header]} />
              </S.TDText>
              {((searchText && searchText !== '' && entry[header]?.toString().includes(searchText || '') && showSearch)
                || rowToHighlight === editedHeaderkeys[header])
                && <S.Highlight2 />}
            </S.TD>
          ))}
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
