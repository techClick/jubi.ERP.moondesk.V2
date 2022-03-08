import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectSheet } from 'views/App/DataSheet/redux';
import { Sheet } from 'types/types';
import * as S from './SheetParts.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';

const SheetParts = function SheetParts() {
  const sheet: Sheet = useAppSelector(selectSheet);

  return (
    <S.Container>
      <S.ScrollDiv>
        <S.FlexDiv>
          <S.WhiteCard hasTable={sheet}>
            <TopPart />
            { sheet && <BottomPart /> }
          </S.WhiteCard>
        </S.FlexDiv>
      </S.ScrollDiv>
    </S.Container>
  );
};

export default SheetParts;
