import React from 'react';
import { useDispatch } from 'react-redux';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { removeEditSteps, setShowPopup } from 'views/App/DataSheet/redux';
import { MainButton } from 'views/App/styles';
import * as S from './DeleteStep.styled';

const DeleteStep = function DeleteStep({ stepToDelete }:{ stepToDelete: number}) {
  const dispatch = useDispatch();
  return (
    <S.Container>
      <S.Header>
        DELETE STEPS TAKEN
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.SheetName>Are you sure you want to delete this step(s)?</S.SheetName>
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
              dispatch(removeEditSteps(stepToDelete));
            }}
          >
            Delete
          </MainButton>
        </S.ButtonDiv>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default DeleteStep;
