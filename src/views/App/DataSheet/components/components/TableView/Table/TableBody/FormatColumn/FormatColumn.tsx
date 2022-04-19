import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import Dialogue from 'views/App/components/Dialogue/Dialogue';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import {
  selectSelectedSheet, selectSheets, selectToChangeIds, setDeleteValues, setIsSelectAllCol,
  setRowValues, setShowPopup,
} from 'views/App/DataSheet/redux';
import { MainButton } from 'views/App/styles';
import * as S from './FormatColumn.styled';

const FormatColumn = function FormatColumn(
  { currentRow, value }
  :
  { currentRow: string, value: string },
) {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const { isSelectAllColumns } = useAppSelector(selectSheets)[selectedSheet].edits;
  const toChangeIds = useAppSelector(selectToChangeIds);
  const [value2, setValue2] = useState<string>(value);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Header>
        EDIT COLUMNS
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.SelectionContainer>
        <S.CheckBoxDiv>
          <S.CheckBox
            checked={isSelectAllColumns}
            onChange={() => dispatch(setIsSelectAllCol([currentRow, !isSelectAllColumns]))}
            type="checkbox"
          />
        </S.CheckBoxDiv>
        Select all similar values
      </S.SelectionContainer>
      <S.SheetName>Set value *</S.SheetName>
      <S.InputDiv>
        <S.Input
          value={value2}
          onChange={(e: any) => {
            setValue2(e.target.value);
          }}
        />
      </S.InputDiv>
      <S.MainButtonDiv>
        <MainButton
          onClick={() => {
            dispatch(setRowValues({
              ids: toChangeIds,
              row: currentRow,
              value: value2,
            }));
            dispatch(setShowPopup({}));
          }}
        >
          Save value
        </MainButton>
      </S.MainButtonDiv>
      <S.Header2>
        DELETE COLUMNS
      </S.Header2>
      <S.MainButtonDiv>
        <MainButton
          onClick={() => {
            dispatch(setShowPopup({
              component: <Dialogue
                setShowPopup={setShowPopup}
                proceedAction={() => {
                  dispatch(setDeleteValues({
                    ids: toChangeIds,
                    row: currentRow,
                    value,
                  }));
                  dispatch(setShowPopup({}));
                }}
                proceedText="Yes, Delete"
                header="DELETE COLUMNS"
                text="Are you sure you want to delete the selected column(s)?"
              />,
              exitOnBgClick: true,
            }));
          }}
        >
          Delete
        </MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default FormatColumn;
