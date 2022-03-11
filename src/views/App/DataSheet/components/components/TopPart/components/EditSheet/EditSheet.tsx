import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
  const [isSearching] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string | false>(false);

  const data = { date: '', time: '', value: '', way: '', froo: '', bar: '', yit: '',
    reed: '', ghin: '', datey: '', timey: '', valuey: '', wayy: '', frooy: '', bary: '',
    ghinoghinoghinoghinoghinoghinoghinoghinoghino: '',
    dateyo: '', timeyo: '', valueyo: '', wayyo: '', frooyo: '', baryo: '' };

  const headers = Object.entries(data).map(([key]) => key); // sheet.data[0];
  headers.sort();

  return (
    <S.Container>
      <S.Header>EDIT SHEET</S.Header>
      <S.SheetName>Sheet name *</S.SheetName>
      <S.InputDiv>
        <S.Input value={sheetName} onChange={(e: any) => setSheetName(e.target.value)} />
        { inputError
          && <S.Required>{inputError}</S.Required>}
      </S.InputDiv>
      <S.Header2>
        Filter rows
        <S.Tools>
          {/* <S.IconContainer>
            <S.SelectSearchIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
            </S.SelectSearchIcon>
          </S.IconContainer> */}
          <S.IconContainer>
            <S.Icon><FontAwesomeIcon icon={faFilter} size="2x" /></S.Icon>
          </S.IconContainer>
        </S.Tools>
      </S.Header2>
      { isSearching && (
        <S.SearchDiv>
          <S.Search placeholder="Search" />
          <S.IconContainer2>
            <S.SearchIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </S.SearchIcon>
          </S.IconContainer2>
        </S.SearchDiv>
      )}
      <S.RowsContainer id="rowscontainer">
        { headers.map((header) => (
          // <S.RowCont1 key={`row_${header}`}>
          <S.RowCont1>
            <S.CheckBoxDiv>
              <S.CheckBox type="checkbox" />
            </S.CheckBoxDiv>
            <S.RowName>{header}</S.RowName>
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
