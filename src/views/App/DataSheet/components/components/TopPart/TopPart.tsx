import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets, setShowPopup } from 'views/App/DataSheet/redux';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as S from './TopPart.styled';
import SheetViewer from './components/SheetViewer/SheetViewer';
import EditSheet from './components/EditSheet/EditSheet';
import SearchBox from './components/SearchBox/SearchBox';

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
          {sheet.name}
        </S.SheetName>
        <S.IconContainer onClick={() => setShowOptions(!showOptions)}>
          <S.Icon>
            <FontAwesomeIcon icon={faEllipsisVertical} size="1x" />
          </S.Icon>
        </S.IconContainer>
        { showOptions && (
          <>
            <S.IconContainer2 onClick={() => editSheet()}>
              <S.Icon2>
                <FontAwesomeIcon icon={faPenToSquare} size="1x" />
              </S.Icon2>
            </S.IconContainer2>
            <S.IconContainer3>
              <S.Icon2>
                <FontAwesomeIcon icon={faTrash} size="1x" />
              </S.Icon2>
            </S.IconContainer3>
          </>
        )}
        <SearchBox />
      </S.ThisSheet>
    </S.Container>
  );
};

export default TopPart;
