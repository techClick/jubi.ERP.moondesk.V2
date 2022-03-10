import React from 'react';
import { Sheet } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { getIsANumber } from 'views/App/utils/utils';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { FormattedNumber } from 'react-intl';
import * as S from './TableBody.styled';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];

  return (
    <tbody>
      { sheet.data.map((entry, i) => (
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
