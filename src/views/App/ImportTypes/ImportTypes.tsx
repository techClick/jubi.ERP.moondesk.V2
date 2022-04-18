import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { Background } from 'views/styles';
import * as S from './ImportTypes.styled';
import NameDialogue from './components/NameDialogue/NameDialogue';
import { selectShowPopup, setShowPopup, selectCSVInput } from './redux';
import { getDataFromCSV, getDataFromExcel } from './utils/UploadUtils';
import { importOptions } from './utils/VarUtils';

const ImportTypes = function ImportTypes() {
  const showPopup = useAppSelector(selectShowPopup);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const input = useAppSelector(selectCSVInput);
  const history = useHistory();
  const dispatch = useDispatch();
  let uploadType = 'CSV';

  useEffect(() => {
    dispatch(setShowPopup({}));
    setInitialLoad(false);
  }, []);

  const dialogues: any = {
    CSV: () => {
      uploadType = 'CSV';
      dispatch(setShowPopup({
        component: <NameDialogue />,
        exitOnBgClick: true,
      }));
    },
    Excel: () => {
      uploadType = 'Excel';
      const fileUploader = document.getElementById('uploadSheet');
      if (fileUploader) {
        fileUploader.click();
      }
    },
    Manual: () => {
      uploadType = 'Manual';
      dispatch(setShowPopup({
        component: <NameDialogue isShowEmptySheet />,
        exitOnBgClick: true,
      }));
    },
  };

  const afterSelectFileAction: any = {
    CSV: (files?: any) => {
      dispatch(getDataFromCSV(input.name || '', history, files));
    },
    Excel: (files?: any) => {
      dispatch(getDataFromExcel(history, files));
    },
  };

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
            SELECT IMPORT TYPE
          </S.Header>
          <S.Input
            type="file"
            id="uploadSheet"
            onChange={(e) => {
              afterSelectFileAction[uploadType](e.target.files);
              e.target.value = '';
            }}
          />
          <S.IconCont>
            {
              importOptions.map((option, index) => (
                <S.IconCont2
                  onClick={() => {
                    dialogues[option.uploadType]();
                  }}
                  key={`importoption_${index}`}
                >
                  <S.IconContMain>
                    <S.IconDiv color={option.color} biggerX={index < 2}>
                      {option.icon}
                    </S.IconDiv>
                    <S.IconDesc>{option.uploadType}</S.IconDesc>
                  </S.IconContMain>
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
