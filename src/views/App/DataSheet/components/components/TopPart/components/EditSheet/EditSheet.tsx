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
  const [input, setInput] = useState<string>('');
  const [inputError, setInputError] = useState<string | false>(false);
  const data = { date: '', time: '', value: '', way: '', froo: '', bar: '', yit: '',
    reed: '', ghin: '', datey: '', timey: '', valuey: '', wayy: '', frooy: '', bary: '',
    ghinoghinoghinoghinoghinoghinoghinoghinoghino: '',
    dateyo: '', timeyo: '', valueyo: '', wayyo: '', frooyo: '', baryo: '' };
  return (
    <S.Container>
      <S.Header>EDIT SHEET</S.Header>
      <S.SheetName>Sheet name *</S.SheetName>
      <S.InputDiv>
        <S.Input />
        { inputError
          && <S.Required>{inputError}</S.Required>}
      </S.InputDiv>
      <S.Header2>Filter rows</S.Header2>
      <S.RowsContainer id="rowscontainer">
        { Object.entries(data).map(([key]) => (
          <S.RowCont1>
            <S.CheckBoxDiv>
              <S.CheckBox type="checkbox" />
            </S.CheckBoxDiv>
            <S.RowName>{key}</S.RowName>
          </S.RowCont1>
        ))}
      </S.RowsContainer>
      <S.MainButtonDiv>
        <MainButton>
          Save
        </MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default EditSheet;
