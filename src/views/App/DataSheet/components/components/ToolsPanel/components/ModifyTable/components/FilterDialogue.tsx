import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { selectSelectedSheet, selectSheets, setShowPopup } from 'views/App/DataSheet/redux';
import { MainButton } from 'views/App/styles';
import * as S from './FilterDialogue.styled';
import NoResult from './NoResult';
import './scrollBar.css';

const EditSheet = function EditSheet() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const [showFiltered, setShowFiltered] = useState<boolean>(false);
  const dispatch = useDispatch();

  const headers = Object.entries(sheet.data[0]).map(([key]) => key);
  headers.sort();

  return (
    <S.Container>
      <S.Header>
        FORMAT ROWS
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.Header2>
        Filter row
        <S.Tools>
          <S.IconContainer
            showFiltered={showFiltered}
            onClick={() => {
              setShowFiltered(!showFiltered);
            }}
          >
            <S.Icon><FontAwesomeIcon icon={faFilter} size="2x" /></S.Icon>
          </S.IconContainer>
        </S.Tools>
      </S.Header2>
      <S.RowsContainer id="rowscontainer">
        {/* <NoResult /> */}
        { headers.map((header) => (
          <S.RowCont1>
            <S.CheckBoxDiv>
              <S.CheckBox type="checkbox" />
            </S.CheckBoxDiv>
            <S.RowName>{header}</S.RowName>
          </S.RowCont1>
        ))}
      </S.RowsContainer>
      <S.UnSelect>Unselect all</S.UnSelect>
      <S.Header2>
        <S.CheckBoxDiv2>
          <S.CheckBox2 type="checkbox" />
        </S.CheckBoxDiv2>
        Sort rows alphabetically
      </S.Header2>
      <S.MainButtonDiv onClick={() => dispatch(setShowPopup({}))}>
        <MainButton>
          Done
        </MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default EditSheet;
