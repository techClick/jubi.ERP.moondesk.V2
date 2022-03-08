import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { selectSheets } from '../DataSheet/redux';
import * as S from './ImportTypes.styled';
import { getDataFromCSV } from './utils/UploadUtils';
import { uploadStart } from './utils/utils';
import { importOptions } from './utils/VarUtils';

const ImportTypes = function ImportTypes() {
  const history = useHistory();
  const showSheet = useAppSelector(selectSheets).length > 0;
  const dispatch = useDispatch();

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
                <S.IconCont2 onClick={() => dispatch(uploadStart())} key={`importoptions${index}`}>
                  <S.IconContMain>
                    <S.Input
                      type="file"
                      id="uploadSheet"
                      onChange={(e) => {
                        dispatch(getDataFromCSV(e.target.files));
                        e.target.value = '';
                      }}
                    />
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
