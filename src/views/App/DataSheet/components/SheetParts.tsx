import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { Sheet } from 'types/types';
import * as S from './SheetParts.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';

const SheetParts = function SheetParts() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];

  return (
    <S.Container>
      <S.DarkBG>
        <TopPart />
        { sheet && <BottomPart /> }
      </S.DarkBG>
      <S.FilterBoxContainer>
        {' '}
      </S.FilterBoxContainer>
    </S.Container>
  );
};

export default SheetParts;
