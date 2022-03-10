import { faFileLines, faFile, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets, setSelectedSheet } from 'views/App/DataSheet/redux';
import * as S from './SheetViewer.styled';
import './scrollBar.css';

const TopPart = function TopPart() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheets: Sheet[] = useAppSelector(selectSheets);
  const history = useHistory();
  const dispatch = useDispatch();
  // const sheets = [sheets1[0]];

  return (
    <S.MainContainer>
      <S.RelativeContainer>
        <S.Line />
        <S.Container id="scrollcontainer">
          {
            sheets.map((sheet, i) => (
              <S.SheetContainer
                isLast={i === sheets.length - 1}
                isSelected={i === selectedSheet}
                onClick={() => dispatch(setSelectedSheet(i))}
              >
                <S.IconContainer>
                  <S.IconCont1>
                    <FontAwesomeIcon icon={faFileLines} size="3x" />
                  </S.IconCont1>
                </S.IconContainer>
                <S.SheetName>
                  {sheet.name}
                </S.SheetName>
              </S.SheetContainer>
            ))
          }
        </S.Container>
        <S.Line2 />
      </S.RelativeContainer>
      <S.SheetContainer2 onClick={() => history.push('/app/datasheets/importtypes')}>
        <S.IconContainer>
          <S.IconCont1>
            <FontAwesomeIcon icon={faFile} size="3x" />
          </S.IconCont1>
        </S.IconContainer>
        <S.SheetName>
          <FontAwesomeIcon icon={faSquarePlus} />
          {' New'}
        </S.SheetName>
      </S.SheetContainer2>
    </S.MainContainer>
  );
};

export default TopPart;
