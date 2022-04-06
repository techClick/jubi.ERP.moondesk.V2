import React from 'react';
import * as S from './FormatRow.styled';
import SearchBox from './components/SearchBox';

const FormatRow = function FormatRow() {
  return (
    <S.Container id="formatrowcontainer">
      <S.Header>
        SEARCH BY ROW
      </S.Header>
      <SearchBox />
    </S.Container>
  );
};

export default FormatRow;
