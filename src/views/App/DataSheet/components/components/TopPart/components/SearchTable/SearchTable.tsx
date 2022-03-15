import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import * as S from './SearchTable.styled';
import SearchBox from './components/SearchBox';

const SearchTable = function SearchTable() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];

  if (!sheet) return null;

  return (
    <S.Container id="toppart">
      <SearchBox />
    </S.Container>
  );
};

export default SearchTable;
