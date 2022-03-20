import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { selectSelectedSheet, selectSheets, setShowPopup } from 'views/App/DataSheet/redux';
import { MainButton } from 'views/App/styles';
import * as S from './EditSheet.styled';
import './scrollBar.css';

const EditSheet = function EditSheet() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheets: Sheet[] = useAppSelector(selectSheets);
  const sheet: Sheet = sheets[selectedSheet];
  const [sheetName, setSheetName] = useState<string>(sheet.name);
  const [inputError, setInputError] = useState<string | false>(false);

  const headers = Object.entries(sheet.data[0]).map(([key]) => key);
  headers.sort();

  const saveEdit = () => {
    if (!sheetName || sheetName === '') {
      setInputError('Required');
    } else if (
      sheets.find((sheetTmp) => sheetName !== sheet.name && sheetTmp
        .name.toLowerCase() === String(sheetName).toLowerCase())) {
      setInputError('A table with this name already exists.');
    } else {
      // proceed
    }
  };

  return (
    <S.Container>
      <S.Header>
        EDIT TABLE NAME
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.SheetName>Table name *</S.SheetName>
      <S.InputDiv>
        <S.Input
          value={sheetName}
          onChange={(e: any) => {
            setInputError(false);
            setSheetName(e.target.value);
          }}
          isError={Boolean(inputError)}
        />
        { inputError
          && <S.Required>{inputError}</S.Required>}
      </S.InputDiv>
      <S.MainButtonDiv onClick={() => saveEdit()}>
        <MainButton>
          Save
        </MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default EditSheet;
