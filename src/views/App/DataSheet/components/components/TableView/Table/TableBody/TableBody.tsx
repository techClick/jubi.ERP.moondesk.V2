import React, { useEffect } from 'react';
import { Search, DisplaySheet, Sheet } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { setDisplaySheetFromSearch } from 'views/App/DataSheet/utils/utils';
import {
  selectDisplaySheets, selectSelectedSheet, selectSheets,
} from 'views/App/DataSheet/redux';
import * as S from './TableBody.styled';
import TDEntryText from './TDEntryText';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const displaySheet: DisplaySheet = useAppSelector(selectDisplaySheets)[selectedSheet];
  const { text: searchText }: Search = sheet.search?.plainSearch || {};
  const dispatch = useDispatch();

  const headersType1 = displaySheet[0] ? Object.keys(displaySheet[0]) : [];
  const headers = (displaySheet[0] && sheet.isSortRow) ? Object.keys(displaySheet[0]).sort()
    : headersType1;

  useEffect(() => {
    dispatch(setDisplaySheetFromSearch());
  }, [searchText, selectedSheet]);

  return (
    <tbody>
      { displaySheet?.map((entry, i) => (
        <S.TR key={`tablebody${i}`}>
          { headers.map((key) => (
            <S.TD key={`sheettd${key}${i}`}>
              <S.TDText>
                <TDEntryText value={entry[key]} />
              </S.TDText>
              {searchText && searchText !== '' && entry[key]?.includes(searchText || '') && <S.Highlight />}
            </S.TD>
          ))}
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
