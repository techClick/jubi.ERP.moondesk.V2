import React, { useEffect } from 'react';
import { SearchInterface, Sheet, SheetInterface } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { getIsANumber } from 'views/App/utils/utils';
import { useDispatch } from 'react-redux';
import { setSheetDataFromSearch } from 'views/App/DataSheet/utils/utils';
import { selectSearch, selectSelectedSheet, selectSheets, setSheet } from 'views/App/DataSheet/redux';
import { FormattedNumber } from 'react-intl';
import * as S from './TableBody.styled';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const { displayData: sheetData }: SheetInterface = sheet;
  const { text: searchText }: SearchInterface = useAppSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sheetData) {
      const sheetTmp: Sheet = { ...sheet };
      sheetTmp.displayData = sheet.data;
      sheetTmp.displayDataOrig = sheet.data;
      dispatch(setSheet(sheetTmp));
    }
  }, []);

  useEffect(() => {
    dispatch(setSheetDataFromSearch());
  }, [searchText]);

  return (
    <tbody>
      { sheetData?.map((entry, i) => (
        <S.TR key={`tablebody${i}`}>
          { Object.entries(entry).map(([key, value]) => (
            <S.TD key={`sheettd${key}${i}`}>
              {getIsANumber(String(value))
                ? (
                  <>
                    <FormattedNumber value={Number(value)} />
                  </>
                ) : <>{value}</>}
            </S.TD>
          ))}
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
