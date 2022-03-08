import React from 'react';
import * as S from './TopPart.styled';

const TopPart = function TopPart() {
  return (
    <S.Container>
      <S.TopInfo>
        <S.TILeftPart>
          <S.TILPTopPart>
            New data sheet
          </S.TILPTopPart>
        </S.TILeftPart>
        <S.TIRightPart />
      </S.TopInfo>
      <S.InfoBottom />
    </S.Container>
  );
};

export default TopPart;
