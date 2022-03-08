import React from 'react';
import { Sheet } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { getStorageItem } from 'views/App/utils/utils';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { getProject } from 'views/App/utils/GlobalUtils';
import { FormattedNumber } from 'react-intl';
import * as S from './TableBody.styled';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const currency = getStorageItem(`${getProject()}_currency`) || '$';

  return (
    <tbody>
      { [sheet].map((entry: any, index: number) => (
        <S.TR key={`Tablebody${index}`}>
          <S.TD isIndex>{index + 1}</S.TD>
          <S.TD>{entry.group}</S.TD>
          <S.TD>{entry.source}</S.TD>
          <S.TD isAmount id="amountTd">
            {currency}
            <FormattedNumber value={entry.amount} />
          </S.TD>
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
