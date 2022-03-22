import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsisVertical, faPenToSquare, faTable, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets, setShowPopup } from 'views/App/DataSheet/redux';
import * as S from './MyTable.styled';
import EditSheet from './EditSheet/EditSheet';
import SelectSheetMini from './SelectSheetMini/SelectSheetMini';

const MyTable = function MyTable() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const dispatch = useDispatch();

  const editSheet = () => {
    dispatch(setShowPopup({ component: <EditSheet />, exitOnBgClick: true }));
  };

  return (
    <S.Container>
      <S.SheetContainer onClick={() => dispatch(setShowPopup({
        component: <SelectSheetMini />,
        exitOnBgClick: true,
      }))}
      >
        <S.IconContainer>
          <S.IconCont>
            <FontAwesomeIcon icon={faTable} size="1x" />
          </S.IconCont>
        </S.IconContainer>
        <S.SheetName>
          {sheet.name}
        </S.SheetName>
        <S.IconContainer>
          <S.IconCont1>
            <FontAwesomeIcon icon={faAngleDown} size="1x" />
          </S.IconCont1>
        </S.IconContainer>
        <S.AbsoluteDiv>
          <S.IconContainer2 onClick={() => { setShowOptions(false); editSheet(); }}>
            <S.Icon2>
              <FontAwesomeIcon icon={faPenToSquare} size="1x" />
            </S.Icon2>
          </S.IconContainer2>
          { showOptions && (
            <>
              <S.IconContainer3>
                <S.Icon3>
                  <FontAwesomeIcon icon={faTrash} size="1x" />
                </S.Icon3>
              </S.IconContainer3>
            </>
          )}
          <S.IconContainer1 onClick={() => setShowOptions(!showOptions)}>
            <S.Icon>
              <FontAwesomeIcon icon={faEllipsisVertical} size="1x" />
            </S.Icon>
          </S.IconContainer1>
        </S.AbsoluteDiv>
      </S.SheetContainer>
    </S.Container>
  );
};

export default MyTable;
