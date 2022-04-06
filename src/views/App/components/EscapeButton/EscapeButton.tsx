import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from './EscapeButton.styled';

const EscapeButton = function EscapeButton(
  { setShowPopup, escapeAction }
  :
  { setShowPopup: Function, escapeAction?: Function },
) {
  const dispatch = useDispatch();

  return (
    <S.Container
      onClick={() => {
        if (escapeAction) escapeAction();
        dispatch(setShowPopup({}));
      }}
    >
      <S.ClearIcon>
        <FontAwesomeIcon icon={faX} size="2x" />
      </S.ClearIcon>
    </S.Container>
  );
};

export default EscapeButton;
