import React, { useState } from 'react';
import { MainButton } from 'views/App/styles';
import * as S from './EditSheet.styled';

const EditSheet = function EditSheet() {
  const [input, setInput] = useState<string>('');
  const [inputError, setInputError] = useState<string | false>(false);

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
      <S.MainButtonDiv>
        <MainButton>
          Save
        </MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default EditSheet;
