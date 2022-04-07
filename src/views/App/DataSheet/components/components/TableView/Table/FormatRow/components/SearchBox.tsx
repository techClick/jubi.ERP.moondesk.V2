import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { useDispatch } from 'react-redux';
import { selectSelectedRow, selectSelectedSheet, selectSheets, setSearch } from 'views/App/DataSheet/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import * as S from './SearchBox.styled';

const SearchBox = function SearchBox() {
  const selectedRow = useAppSelector(selectSelectedRow);
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const searchText = sheet.edits?.search?.rowSearch?.[selectedRow]?.text || '';
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Search
        isActive={searchText || false}
        type="text"
        placeholder={`Search ${selectedRow}`}
        value={searchText || ''}
        onChange={(e: any) => {
          dispatch(setSearch(['rowSearch', {
            ...sheet.edits?.search?.rowSearch,
            [selectedRow]: {
              text: e.target.value,
              isInvertSearch: sheet.edits?.search?.rowSearch?.[selectedRow]?.isInvertSearch,
            },
          }]));
        }}
      />
      <S.SearchIconCont>
        <S.SearchIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchIcon>
      </S.SearchIconCont>
      <S.ClearIconCont onClick={() => dispatch(setSearch(['rowSearch', {
        ...sheet.edits?.search?.rowSearch,
        [selectedRow]: {
          text: '',
          isInvertSearch: sheet.edits?.search?.rowSearch?.[selectedRow]?.isInvertSearch,
        },
      }]))}
      >
        <S.ClearIcon>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </S.ClearIcon>
      </S.ClearIconCont>
    </S.Container>
  );
};

export default SearchBox;
