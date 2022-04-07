import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Search, Sheet } from 'types/types';
import { useDispatch } from 'react-redux';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { selectSelectedSheet, selectSheets, setSearch, setShowSearch } from 'views/App/DataSheet/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import * as S from './SearchBox.styled';

const SearchBox = function SearchBox() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const { text: searchText }: Search = sheet.edits?.search?.plainSearch || {};
  const dispatch = useDispatch();

  return (
    <S.Container
      id="searchDiv"
      onMouseEnter={() => {
        dispatch(setShowSearch(true));
      }}
    >
      <S.Search
        isActive={searchText || false}
        type="text"
        placeholder={`Search ${sheet.name}`}
        value={searchText || ''}
        onChange={(e: any) => {
          dispatch(setSearch(['plainSearch', {
            text: e.target.value,
          }]));
        }}
      />
      <S.SearchIconCont>
        <S.SearchIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchIcon>
      </S.SearchIconCont>
      <S.ClearIconCont onClick={() => dispatch(setSearch(['plainSearch', {}]))}>
        <S.ClearIcon>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </S.ClearIcon>
      </S.ClearIconCont>
      <S.AbsoluteDiv>
        <S.IconContainer>
          <S.Icon>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" />
          </S.Icon>
        </S.IconContainer>
      </S.AbsoluteDiv>
    </S.Container>
  );
};

export default SearchBox;
