import React from 'react';
import { useDispatch } from 'react-redux';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { MainButton } from 'views/App/styles';
import * as S from './Dialogue.styled';

const Dialogue = function Dialogue(
  { setShowPopup, proceedAction, proceedText, header, text, exitAction, topText }
  :
  { setShowPopup: any, proceedAction: Function, proceedText: string, header: string, text: string,
    exitAction?: Function, topText?: string },
) {
  const dispatch = useDispatch();
  return (
    <S.Container>
      <S.Header>
        {header}
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      {topText && <S.TopText>{topText}</S.TopText>}
      <S.SheetName>{text}</S.SheetName>
      <S.ButtonContainer>
        <S.MainButtonDiv>
          <S.Button
            onClick={() => {
              if (exitAction) {
                exitAction();
              } else {
                dispatch(setShowPopup({}));
              }
            }}
          >
            Cancel
          </S.Button>
        </S.MainButtonDiv>
        <S.ButtonDiv>
          <MainButton
            onClick={() => {
              dispatch(setShowPopup({}));
              proceedAction();
            }}
          >
            {proceedText}
          </MainButton>
        </S.ButtonDiv>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Dialogue;
