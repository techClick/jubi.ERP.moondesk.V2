import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPenToSquare, faTable } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets, setShowPopup } from 'views/App/DataSheet/redux';
import * as S from './MyTable.styled';
import EditSheet from './EditSheet/EditSheet';
import SelectSheetMini from './SelectSheetMini/SelectSheetMini';

const MyTable = function MyTable() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const dispatch = useDispatch();

  const editSheet = () => {
    dispatch(setShowPopup({ component: <EditSheet />, exitOnBgClick: true }));
  };

  return (
    <S.Container>
      <S.SheetContainer>
        <S.SheetPart onClick={() => dispatch(setShowPopup({
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
          <S.IconContainer0>
            <S.IconCont1>
              <FontAwesomeIcon icon={faAngleDown} size="1x" />
            </S.IconCont1>
          </S.IconContainer0>
        </S.SheetPart>
        <S.AbsoluteDiv>
          <S.IconContainer2 onClick={() => { editSheet(); }}>
            <S.Icon2>
              <FontAwesomeIcon icon={faPenToSquare} size="1x" />
            </S.Icon2>
          </S.IconContainer2>
        </S.AbsoluteDiv>
      </S.SheetContainer>
    </S.Container>
  );
};

export default MyTable;
