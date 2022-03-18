import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { MainButton } from 'views/App/styles';
import * as S from './EditSheet.styled';
import './scrollBar.css';

const EditSheet = function EditSheet() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const [sheetName, setSheetName] = useState<string>(sheet.name);
  const [inputError, setInputError] = useState<string | false>(false);

  const headers = Object.entries(sheet.data[0]).map(([key]) => key);
  headers.sort();

  return (
    <S.Container>
      <S.Header>EDIT TABLE NAME</S.Header>
      <S.SheetName>Table name *</S.SheetName>
      <S.InputDiv>
        <S.Input value={sheetName} onChange={(e: any) => setSheetName(e.target.value)} />
        { inputError
          && <S.Required>{inputError}</S.Required>}
      </S.InputDiv>
      <S.MainButtonDiv>
        <MainButton>
          Save
        </MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default EditSheet;
