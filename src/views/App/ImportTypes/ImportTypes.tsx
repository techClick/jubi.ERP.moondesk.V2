import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { Background } from 'views/styles';
import { selectSheets, selectShowPopup, setShowPopup } from '../DataSheet/redux';
import * as S from './ImportTypes.styled';
import { getDataFromCSV } from './utils/UploadUtils';
import { ImportInput, startUpload } from './utils/utils';
import { importOptions } from './utils/VarUtils';

const ImportTypes = function ImportTypes() {
  const showPopup = useAppSelector(selectShowPopup);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [inputError, setInputError] = useState<ImportInput>({});
  const [input, setInput] = useState<ImportInput>({ name: '' });
  const history = useHistory();
  const sheets = useAppSelector(selectSheets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowPopup({}));
    setInitialLoad(false);
  }, []);

  return (
    <>
      {showPopup.component && !initialLoad
        && (
          <>
            <Background onClick={() => (
              showPopup.exitOnBgClick && dispatch(setShowPopup({}))
            )}
            />
            {showPopup.component}
          </>
        )}
      <S.Container>
        <S.WhiteCard>
          <S.Header>
            IMPORT NEW DATA SHEET
          </S.Header>
          <S.Line />
          <S.NamePart>
            <S.InputDiv isError={Boolean(inputError.name)}>
              <S.Input1
                placeholder="Enter sheet name *"
                value={input.name}
                onChange={(e: any) => {
                  setInputError({});
                  setInput({ name: e.target.value });
                }}
                isError={Boolean(inputError.name)}
              />
              { inputError.name && <S.Required>{inputError.name}</S.Required>}
            </S.InputDiv>
          </S.NamePart>
          <S.Header1>
            Import method *
          </S.Header1>
          <S.IconCont>
            {
              importOptions.map((option, index) => (
                <S.IconCont2
                  onClick={() => startUpload(input, setInputError)}
                  key={`importoptions${index}`}
                >
                  <S.IconContMain>
                    <S.Input
                      type="file"
                      id="uploadSheet"
                      onChange={(e) => {
                        dispatch(getDataFromCSV(input.name || '', history, e.target.files));
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
