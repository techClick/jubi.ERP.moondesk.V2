import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import * as S from './Table.styled';
import TableBody from './TableBody/TableBody';

const Table = function Table() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  return (
    <S.Container id="tableCont">
      <S.TableDiv>
        <S.Table>
          <thead>
            <tr>
              { Object.entries(sheet.data[0]).map(([key]) => (
                <S.TH key={`tableheader_${key}`}>{key}</S.TH>
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
