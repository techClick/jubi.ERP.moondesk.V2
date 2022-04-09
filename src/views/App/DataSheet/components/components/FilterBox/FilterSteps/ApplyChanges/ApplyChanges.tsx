import React from 'react';
import { useDispatch } from 'react-redux';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { setShowPopup } from 'views/App/DataSheet/redux';
import { MainButton } from 'views/App/styles';
import { saveEditedSheet } from '../utils/utils';
import * as S from './ApplyChanges.styled';

const DeleteStep = function DeleteStep() {
  const dispatch = useDispatch();
  return (
    <S.Container>
      <S.Header>
        APPLY CHANGES
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.SheetName>Are you sure you want to apply all change(s)?</S.SheetName>
      <S.ButtonContainer>
        <S.MainButtonDiv>
          <S.Button onClick={() => dispatch(setShowPopup({}))}>
            Cancel
          </S.Button>
        </S.MainButtonDiv>
        <S.ButtonDiv>
          <MainButton
            onClick={() => {
              dispatch(setShowPopup({}));
              dispatch(saveEditedSheet());
            }}
          >
            Apply
          </MainButton>
        </S.ButtonDiv>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default DeleteStep;
