import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectSheet } from 'views/App/DataSheet/redux';
import { Sheet } from 'types/types';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';

const SheetBuilder = function SheetBuilder() {
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

export default SheetBuilder;
