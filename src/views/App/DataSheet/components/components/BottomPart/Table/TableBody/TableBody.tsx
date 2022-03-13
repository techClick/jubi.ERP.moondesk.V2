import React, { useEffect } from 'react';
import { Search, DisplaySheet } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { getIsANumber } from 'views/App/utils/utils';
import { useDispatch } from 'react-redux';
import { setDisplaySheetFromSearch } from 'views/App/DataSheet/utils/utils';
import { selectDisplaySheets, selectSearch, selectSelectedSheet } from 'views/App/DataSheet/redux';
import { FormattedNumber } from 'react-intl';
import * as S from './TableBody.styled';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const displaySheet: DisplaySheet = useAppSelector(selectDisplaySheets)[selectedSheet];
  const { text: searchText }: Search = useAppSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDisplaySheetFromSearch());
  }, [searchText, selectedSheet]);

  return (
    <tbody>
      { displaySheet?.map((entry, i) => (
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
