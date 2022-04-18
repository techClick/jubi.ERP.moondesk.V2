import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { MainButton } from 'views/App/styles';
import { selectCSVInput, setCSVInput } from '../../redux';
import { ImportInput, showEmptySheet, startUpload } from '../../utils/utils';
import * as S from './NameDialogue.styled';

const NameDialogue = function NameDialogue(
  { isShowEmptySheet }
  :
  { isShowEmptySheet?: boolean },
) {
  const [inputError, setInputError] = useState<ImportInput>({});
  const input = useAppSelector(selectCSVInput);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <S.Container>
      <S.Header>
        SET NEW TABLE NAME
      </S.Header>
      <S.NamePart>
        <S.InputDiv isError={Boolean(inputError.name)}>
          <S.Input1
            placeholder="Enter table name *"
            value={input.name}
            onChange={(e: any) => {
              setInputError({});
              dispatch(setCSVInput({ name: e.target.value }));
            }}
            isError={Boolean(inputError.name)}
          />
          { inputError.name && <S.Required>{inputError.name}</S.Required>}
        </S.InputDiv>
      </S.NamePart>
      <S.MainButtonDiv>
        <MainButton
          onClick={() => {
            if (isShowEmptySheet) {
              dispatch(showEmptySheet(input, setInputError, history));
            } else {
              startUpload(input, setInputError);
            }
          }}
        >
          upload
        </MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default NameDialogue;
