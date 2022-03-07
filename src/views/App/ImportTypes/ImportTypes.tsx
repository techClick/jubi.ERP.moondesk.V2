import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { selectShowSheet } from '../DataSheet/redux';
import * as S from './ImportTypes.styled';
import { importOptions } from './utils/utils';

const ImportTypes = function ImportTypes() {
  const history = useHistory();
  const showSheet = useAppSelector(selectShowSheet);

  if (showSheet) {
    history.replace('/app/datasheet');
    return null;
  }

  return (
    <>
      <S.Container>
        <S.WhiteCard>
          <S.Header1>
            IMPORT NEW DATA SHEET
          </S.Header1>
          <S.Line />
          <S.Header>
            Select import method
          </S.Header>
          <S.IconCont>
            {
              importOptions.map((option, index) => (
                <S.IconCont2 to={option.path()} key={`importoptions${index}`}>
                  <S.IconContMain>
                    <S.IconDiv color={option.color} biggerX={index < 2}>
                      {option.icon}
                    </S.IconDiv>
                  </S.IconContMain>
                  <S.IconDesc>{option.uploadType}</S.IconDesc>
                </S.IconCont2>
              ))
            }
          </S.IconCont>
        </S.WhiteCard>
      </S.Container>
    </>
  );
};

export default ImportTypes;
