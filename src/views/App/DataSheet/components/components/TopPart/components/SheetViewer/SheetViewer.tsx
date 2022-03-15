import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import * as S from './SheetViewer.styled';
import './scrollBar.css';
import { newSheetOptions } from './utils/utils';

const TopPart = function TopPart() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const history = useHistory();

  return (
    <S.MainContainer>
      <S.Container id="scrollcontainer">
        <S.SheetContainer>
          <S.IconContainer>
            <S.IconCont1>
              <FontAwesomeIcon icon={faTable} size="1x" />
            </S.IconCont1>
          </S.IconContainer>
          <S.SheetName>
            {sheet.name}
          </S.SheetName>
        </S.SheetContainer>
        {
          newSheetOptions.map((sheetOption, i) => (
            <S.SheetContainer2
              key={`sheetoption${i}`}
              onClick={() => history.push(sheetOption.path)}
            >
              <S.IconContainer>
                <S.IconCont1>
                  {sheetOption.icon}
                </S.IconCont1>
              </S.IconContainer>
              <S.SheetName>
                <FontAwesomeIcon icon={faSquarePlus} />
                {' '}
                {sheetOption.name}
              </S.SheetName>
            </S.SheetContainer2>
          ))
        }
      </S.Container>
    </S.MainContainer>
  );
};

export default TopPart;
