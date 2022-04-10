import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import {
  selectDisplaySheets,
  selectSelectedRow, selectSelectedSheet, selectSheets, setHeaderEdit, setSearch, setShowPopup,
} from 'views/App/DataSheet/redux';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { MainButton } from 'views/App/styles';
import { useDispatch } from 'react-redux';
import { Sheet } from 'types/types';
import * as S from './FormatRow.styled';
import SearchBox from './components/SearchBox';

const FormatRow = function FormatRow() {
  const selectedRow = useAppSelector(selectSelectedRow);
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const displaySheet = useAppSelector(selectDisplaySheets)[selectedSheet];
  const currentEditStep = sheet.editStep;
  const isInvertSearch = sheet.edits?.search?.rowSearch?.[selectedRow]?.isInvertSearch || false;
  const [rowName, setRowName] = useState<string>(selectedRow);
  const [inputError, setInputError] = useState<string | false>(false);
  const dispatch = useDispatch();

  const headersType1 = displaySheet[0] ? Object.keys(displaySheet[0]) : [];
  const rowNames = (displaySheet[0] && sheet.isSortRow) ? Object.keys(displaySheet[0]).sort()
    : headersType1;

  let rowNameForSaveEdit = selectedRow;
  for (const [key, value] of Object.entries(sheet.edits.headers || {})) {
    if (value === selectedRow) {
      rowNameForSaveEdit = key;
      break;
    }
  }

  return (
    <S.Container id="formatrowcontainer">
      <S.Header>
        EDIT ROW NAME
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.SheetName>Row name *</S.SheetName>
      <S.InputDiv>
        <S.Input
          value={rowName}
          onChange={(e: any) => {
            setInputError(false);
            setRowName(e.target.value);
          }}
          isError={Boolean(inputError)}
        />
        { inputError
          && <S.Required>{inputError}</S.Required>}
      </S.InputDiv>
      <S.MainButtonDiv onClick={() => {
        if (rowName) {
          if (rowName !== selectedRow && rowNames.includes(rowName)) {
            setInputError('Row with this name already exists');
            return;
          }
          dispatch(setHeaderEdit([selectedRow, rowName]));
          dispatch(setShowPopup({}));
          return;
        }
        setInputError('Required');
      }}
      >
        <MainButton>
          Save name
        </MainButton>
      </S.MainButtonDiv>
      <S.Header2>
        SET GLOBAL VALUE
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header2>
      <S.SheetName>Global value</S.SheetName>
      <S.InputDiv>
        <S.Input
          value={rowName}
          onChange={(e: any) => {
            setRowName(e.target.value);
          }}
          isError={Boolean(inputError)}
        />
        { inputError
          && <S.Required>{inputError}</S.Required>}
      </S.InputDiv>
      <S.MainButtonDiv onClick={() => {}}>
        <MainButton>
          Set global value
        </MainButton>
      </S.MainButtonDiv>
      <S.Header2>
        SEARCH ROW
      </S.Header2>
      <SearchBox />
      <S.SelectInvert>
        <S.CheckBoxDiv>
          <S.CheckBox
            checked={isInvertSearch}
            onChange={() => {
              dispatch(setSearch([
                'rowSearch',
                {
                  ...sheet.edits?.search?.rowSearch,
                  [rowNameForSaveEdit]: {
                    text: sheet.edits?.search?.rowSearch?.[rowNameForSaveEdit].text || '',
                    isInvertSearch: !isInvertSearch,
                  },
                },
                {
                  name: `Invert search on row(${selectedRow})`,
                  description: `${isInvertSearch ? 'Do not use' : 'Use'} invert`,
                  edits: {},
                  saveThis: !sheet.editSteps[currentEditStep].name
                    .includes(`Invert search on row(${selectedRow})`),
                  isSearch: true,
                },
              ]));
            }}
            type="checkbox"
          />
        </S.CheckBoxDiv>
        Invert search
      </S.SelectInvert>
    </S.Container>
  );
};

export default FormatRow;
