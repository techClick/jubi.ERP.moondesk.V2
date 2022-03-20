import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Search } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import * as S from './TDEntryText.styled';

const TDEntryText = function TDEntryText({ value }:{ value: any }) {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const { text: searchText }: Search = (useAppSelector(selectSheets)[selectedSheet]
    .search || {}).plainSearch || {};

  const index = value?.indexOf(searchText);
  let entryContainsSearch = false;
  let entryText1 = '';
  let entryTextSearch = '';
  let entryText2 = '';
  if (searchText && searchText.length > 0 && index > -1) {
    entryText1 = [...value].splice(0, index).join('');
    entryTextSearch = [...value].splice(index, searchText.length).join('');
    entryText2 = [...value]
      .splice(index + searchText.length, value.length - searchText.length)
      .join('');
    entryContainsSearch = true;
  }
  return (
    <>
      { entryContainsSearch ? (
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
