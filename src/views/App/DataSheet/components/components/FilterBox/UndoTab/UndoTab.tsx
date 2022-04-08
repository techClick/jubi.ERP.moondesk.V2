import { faRotateLeft, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { selectSelectedSheet, selectSheets, setEditStep } from 'views/App/DataSheet/redux';
import * as S from './UndoTab.styled';

const UndoTab = function UndoTab() {
  const selectedSheet = useAppSelector(selectSelectedSheet);
  const sheet = useAppSelector(selectSheets)[selectedSheet];
  const currentEditStep = sheet.editStep;
  const dispatch = useDispatch();
  const lengthOfEditSteps = sheet.editSteps.length - 1;

  return (
    <S.Container>
      <S.AllIconCont>
        <S.IconContainer
          onClick={() => {
            if (currentEditStep > 0) dispatch(setEditStep(currentEditStep - 1));
          }}
          isTransparent={currentEditStep === 0}
        >
          <S.Icon>
            <FontAwesomeIcon icon={faRotateLeft} size="2x" />
          </S.Icon>
        </S.IconContainer>
        <S.IconContainer
          onClick={() => {
            if (currentEditStep < lengthOfEditSteps) dispatch(setEditStep(currentEditStep + 1));
          }}
          isTransparent={currentEditStep === lengthOfEditSteps}
        >
          <S.Icon>
            <FontAwesomeIcon icon={faRotateRight} size="2x" />
          </S.Icon>
        </S.IconContainer>
      </S.AllIconCont>
    </S.Container>
  );
};

export default UndoTab;
