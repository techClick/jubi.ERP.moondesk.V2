import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './NoResult.styled';

const NoResult = function NoResult() {
  return (
    <S.Container>
      <S.LeftSide>
        <S.IconContainer>
          <FontAwesomeIcon icon={faCircleInfo} />
        </S.IconContainer>
      </S.LeftSide>
      <S.RightSide>
        No filtered rows
      </S.RightSide>
    </S.Container>
  );
};

export default NoResult;
