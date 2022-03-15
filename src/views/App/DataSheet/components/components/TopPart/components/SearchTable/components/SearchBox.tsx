import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Search, Sheet } from 'types/types';
import { useDispatch } from 'react-redux';
import { selectSearch, selectSelectedSheet, selectSheets, setSearch } from 'views/App/DataSheet/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import * as S from './SearchBox.styled';

const SearchBox = function SearchBox() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const { text: searchText }: Search = useAppSelector(selectSearch);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.SearchDiv id="searchDiv">
        <S.Search
          isActive={searchText || false}
          type="text"
          placeholder={`Search ${sheet.name}`}
          value={searchText || ''}
          onChange={(e: any) => {
            dispatch(setSearch({ text: e.target.value, showResult: true }));
          }}
        />
        <S.SearchIconCont>
          <S.SearchIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </S.SearchIcon>
        </S.SearchIconCont>
        <S.ClearIconCont onClick={() => dispatch(setSearch({}))}>
          <S.ClearIcon>
            <FontAwesomeIcon icon={faXmark} />
          </S.ClearIcon>
        </S.ClearIconCont>
      </S.SearchDiv>
    </S.Container>
  );
};

export default SearchBox;
