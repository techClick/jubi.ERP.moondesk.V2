import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Search } from 'types/types';
import { selectSelectedSheet, selectSheets, selectShowSearch } from 'views/App/DataSheet/redux';
import * as S from './TDEntryText.styled';

const TDEntryText = function TDEntryText({ value }:{ value: any }) {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const { text: searchText }: Search = (useAppSelector(selectSheets)[selectedSheet]
    .edits?.search || {}).globalSearch || {};
  const showSearch: boolean = useAppSelector(selectShowSearch);

  const index = value?.toString().indexOf(searchText);
  let entryContainsSearch = false;
  let entryText1 = '';
  let entryTextSearch = '';
  let entryText2 = '';
  if (searchText && searchText.length > 0 && index > -1) {
    entryText1 = [...value.toString()].splice(0, index).join('');
    entryTextSearch = [...value.toString()].splice(index, searchText.length).join('');
    entryText2 = [...value.toString()]
      .splice(index + searchText.length, value.toString().length - searchText.length)
      .join('');
    entryContainsSearch = true;
  }
  return (
    <>
      { showSearch && entryContainsSearch ? (
        <>
          {entryText1}
          {entryText1[entryText1.length - 1] === ' ' && <span>&nbsp;</span>}
          <S.SearchHighlight
            leftMargin={entryText1[entryText1.length - 1] === ' '}
            rightMargin={entryText2[0] === ' '}
          >
            {entryTextSearch[0] === ' ' && <span>&nbsp;</span>}
            {entryTextSearch}
            {entryTextSearch[entryTextSearch.length - 1] === ' ' && <span>&nbsp;</span>}
          </S.SearchHighlight>
          {entryText2[0] === ' ' && <span>&nbsp;</span>}
          {entryText2}
        </>
      ) : (
        <>
          {value}
        </>
      )}
    </>
  );
};

export default TDEntryText;
