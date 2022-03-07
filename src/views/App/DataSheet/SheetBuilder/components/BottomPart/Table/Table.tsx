import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSheet } from 'views/App/DataSheet/redux';
import * as S from './Table.styled';
import TableBody from './TableBody/TableBody';

const Table = function Table() {
  const sheet: Sheet = useAppSelector(selectSheet);

  return (
    <S.Container innerWidth={window.innerWidth} innerHeight={window.innerHeight} id="tableCont">
      <S.TableDiv>
        <S.Table>
          <thead>
            <tr>
              <S.TH isIndex>#</S.TH>
              <S.TH>GROUP</S.TH>
              <S.TH>ITEM</S.TH>
            </tr>
          </thead>
          <TableBody />
        </S.Table>
      </S.TableDiv>
    </S.Container>
  );
};

export default Table;
