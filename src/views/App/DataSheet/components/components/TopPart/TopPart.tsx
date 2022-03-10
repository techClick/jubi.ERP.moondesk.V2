import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets, setShowPopup } from 'views/App/DataSheet/redux';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as S from './TopPart.styled';
import SheetViewer from './components/SheetViewer';
import EditSheet from './components/EditSheet/EditSheet';

const TopPart = function TopPart() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const dispatch = useDispatch();

  const editSheet = () => {
    setShowOptions(!showOptions);
    dispatch(setShowPopup({ component: <EditSheet />, exitOnBgClick: true }));
  };

  return (
    <S.Container id="toppart">
      <SheetViewer />
      <S.ThisSheet>
        <S.SheetName>
          {sheet?.name}
        </S.SheetName>
        <S.IconContainer onClick={() => setShowOptions(!showOptions)}>
          <S.Icon>
            <FontAwesomeIcon icon={faEllipsisVertical} size="1x" />
          </S.Icon>
        </S.IconContainer>
        { showOptions && (
          <>
            <S.IconContainer onClick={() => editSheet()}>
              <S.Icon>
                <FontAwesomeIcon icon={faPenToSquare} size="1x" />
              </S.Icon>
            </S.IconContainer>
            <S.IconContainer2>
              <S.Icon>
                <FontAwesomeIcon icon={faTrash} size="1x" />
              </S.Icon>
            </S.IconContainer2>
          </>
        )}
      </S.ThisSheet>
    </S.Container>
  );
};

export default TopPart;
