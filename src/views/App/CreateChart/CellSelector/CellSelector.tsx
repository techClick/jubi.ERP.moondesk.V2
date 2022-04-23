import { faAngleDown, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { selectChartSheetName1, setShowPopup } from '../redux';
import * as S from './CellSelector.styled';
import RowPicker from './RowPicker/RowPicker';
import SelectSheetMini from './SelectSheetMini/SelectSheetMini';

const CellSelector = function CellSelector() {
  const chartSheetName1 = useAppSelector(selectChartSheetName1);
  const selectedSheet = useAppSelector(selectSelectedSheet);
  const sheet = useAppSelector(selectSheets)[selectedSheet];
  const dispatch = useDispatch();

  if (!sheet) return null;

  return (
    <S.Container>
      <S.SheetContCont>
        <S.SheetContainer
          isChangeable={!chartSheetName1}
        >
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
        </S.SheetContainer>
      </S.SheetContCont>
      <RowPicker />
    </S.Container>
  );
};

export default CellSelector;
