import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectSelectedRow, selectSelectedSheet, selectSheets, setSearch } from 'views/App/DataSheet/redux';
import { useDispatch } from 'react-redux';
import { Sheet } from 'types/types';
import * as S from './FormatRow.styled';
import SearchBox from './components/SearchBox';

const FormatRow = function FormatRow() {
  const selectedRow = useAppSelector(selectSelectedRow);
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const isInvertSearch = sheet.edits?.search?.rowSearch?.[selectedRow]?.isInvertSearch || false;
  const dispatch = useDispatch();

  return (
    <S.Container id="formatrowcontainer">
      <S.Header>
        SEARCH BY ROW
      </S.Header>
      <SearchBox />
      <S.SelectInvert>
        <S.CheckBoxDiv>
          <S.CheckBox
            checked={isInvertSearch}
            onChange={() => dispatch(setSearch(['rowSearch',
              {
                ...sheet.edits?.search?.rowSearch,
                [selectedRow]: {
                  text: sheet.edits?.search?.rowSearch?.[selectedRow].text || '',
                  isInvertSearch: !isInvertSearch,
                },
              },
            ]))}
            type="checkbox"
          />
        </S.CheckBoxDiv>
        Select invert
      </S.SelectInvert>
    </S.Container>
  );
};

export default FormatRow;
