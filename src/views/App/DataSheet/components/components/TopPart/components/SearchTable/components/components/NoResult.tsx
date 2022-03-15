/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './NoResult.styled';

const NoResult = function NoResult() {
  const NoResultParts = () => {
    return (
      <S.Container>
        Works
      </S.Container>
    );
  };
  const searchDiv = document.getElementById('searchDiv');

  if (!searchDiv) return null;

  return ReactDOM.createPortal(<NoResultParts />, searchDiv);
};

export default NoResult;
