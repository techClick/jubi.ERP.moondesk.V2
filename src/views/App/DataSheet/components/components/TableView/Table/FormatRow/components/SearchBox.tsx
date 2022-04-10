import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { useDispatch } from 'react-redux';
import {
  selectSelectedRow, selectSelectedSheet, selectSheets, setSearch,
} from 'views/App/DataSheet/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import * as S from './SearchBox.styled';

const SearchBox = function SearchBox() {
  const selectedRow = useAppSelector(selectSelectedRow);
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const currentEditStep = sheet.editStep;
  const dispatch = useDispatch();

  const getIsSaveClear = (editStepName: string) => {
    let isSaveClear = false;
    for (let i = currentEditStep - 1; i > -1; i -= 1) {
      if (sheet.editSteps[i].name === editStepName) {
        isSaveClear = true;
        break;
      }
    }
    return isSaveClear;
  };

  let rowNameForSaveEdit = selectedRow;
  for (const [key, value] of Object.entries(sheet.edits.headers || {})) {
    if (value === selectedRow) {
      rowNameForSaveEdit = key;
      break;
    }
  }
  const searchText = sheet.edits?.search?.rowSearch?.[rowNameForSaveEdit]?.text || '';

  return (
    <S.Container>
      <S.Search
        isActive={searchText || false}
        type="text"
        placeholder={`Search ${selectedRow}`}
        value={searchText || ''}
        onChange={(e: any) => {
          dispatch(setSearch([
            'rowSearch',
            {
              ...sheet.edits?.search?.rowSearch,
              [rowNameForSaveEdit]: {
                text: e.target.value,
                isInvertSearch: sheet
                  .edits?.search?.rowSearch?.[rowNameForSaveEdit]?.isInvertSearch,
              },
            },
            {
              name: `Search on row (${selectedRow})`,
              description: `${e.target.value ? `Search for ${e.target.value}`
                : 'Clear search'}`,
              edits: {},
              saveThis: Boolean(e.target.value) || getIsSaveClear(`Search on row (${selectedRow})`),
              isSearch: true,
            },
          ]));
        }}
      />
      <S.SearchIconCont>
        <S.SearchIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchIcon>
      </S.SearchIconCont>
      <S.ClearIconCont onClick={() => {
        // eslint-disable-next-line no-extra-boolean-cast
        if (Boolean(searchText)) {
          dispatch(setSearch([
            'rowSearch',
            {
              ...sheet.edits?.search?.rowSearch,
              [rowNameForSaveEdit]: {
                text: '',
                isInvertSearch: sheet
                  .edits?.search?.rowSearch?.[rowNameForSaveEdit]?.isInvertSearch,
              },
            },
            {
              name: `Search on row (${selectedRow})`,
              description: 'Clear search',
              edits: {},
              saveThis: getIsSaveClear(`Search on row (${selectedRow})`),
              isSearch: true,
            },
          ]));
        }
      }}
      >
        <S.ClearIcon>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </S.ClearIcon>
      </S.ClearIconCont>
    </S.Container>
  );
};

export default SearchBox;
