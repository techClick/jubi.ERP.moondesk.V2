import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import * as S from './SearchBox.styled';

const SearchBox = function SearchBox() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];

  return (
    <S.Container>
      <S.SearchDiv>
        <S.Search placeholder={`Search ${sheet.name}`} />
        <S.SearchIconCont>
          <S.SearchIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </S.SearchIcon>
        </S.SearchIconCont>
        <S.ClearIconCont>
          <S.ClearIcon>
            <FontAwesomeIcon icon={faXmark} />
          </S.ClearIcon>
        </S.ClearIconCont>
      </S.SearchDiv>
    </S.Container>
  );
};

export default SearchBox;
