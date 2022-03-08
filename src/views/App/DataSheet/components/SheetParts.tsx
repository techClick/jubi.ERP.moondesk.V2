import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectSheets } from 'views/App/DataSheet/redux';
import { Sheet } from 'types/types';
import * as S from './SheetParts.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';

const SheetParts = function SheetParts() {
  // const selectedSheet: number = useAppSelector(selectSelectedSheet)?.[getCurrentTab()] || 0;
  const sheet: Sheet = useAppSelector(selectSheets)[0];

  return (
    <S.Container>
      <S.ScrollDiv>
        <S.FlexDiv>
          <S.WhiteCard hasTable>
            <TopPart />
            { sheet && <BottomPart /> }
          </S.WhiteCard>
        </S.FlexDiv>
      </S.ScrollDiv>
    </S.Container>
  );
};

export default SheetParts;
