import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectImportedSheets } from 'views/App/ImportTypes/redux';
import * as S from './TableBody.styled';

const TableBody = function TableBody({ previewedSheet }:{ previewedSheet: number }) {
  const selectedTableTmp = useAppSelector(selectImportedSheets)[previewedSheet];
  const selectedTable = selectedTableTmp.filter((table, i) => i < 20);

  return (
    <tbody>
      { selectedTable.map((entry, i) => (
        <S.TR key={`tmptablebody${i}`}>
          { Object.entries(entry).map(([key, value]) => (
            <S.TD key={`tmpsheettd${key}${i}`}>
              <S.TDText>
                {value}
              </S.TDText>
            </S.TD>
          ))}
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
