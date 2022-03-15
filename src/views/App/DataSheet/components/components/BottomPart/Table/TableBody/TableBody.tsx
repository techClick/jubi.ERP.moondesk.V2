import React, { useEffect } from 'react';
import { Search, DisplaySheet } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { setDisplaySheetFromSearch } from 'views/App/DataSheet/utils/utils';
import { selectDisplaySheets, selectSearch, selectSelectedSheet } from 'views/App/DataSheet/redux';
import * as S from './TableBody.styled';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const displaySheet: DisplaySheet = useAppSelector(selectDisplaySheets)[selectedSheet];
  const { text: searchText }: Search = useAppSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDisplaySheetFromSearch());
  }, [searchText, selectedSheet]);

  const EntryText = ({ value }:{value: any}) => {
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

  return (
    <tbody>
      { displaySheet?.map((entry, i) => (
        <S.TR key={`tablebody${i}`}>
          { Object.entries(entry).map(([key, value]) => (
            <S.TD key={`sheettd${key}${i}`}>
              <S.TDText>
                <EntryText value={value} />
              </S.TDText>
              {searchText && searchText !== '' && value?.includes(searchText || '') && <S.Highlight />}
            </S.TD>
          ))}
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
