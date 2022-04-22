import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import * as S from './RowPicker.styled';

const RowPicker = function RowPicker() {
  const selectedSheet = useAppSelector(selectSelectedSheet);
  const sheet = useAppSelector(selectSheets)[selectedSheet];
  const dispatch = useDispatch();

  return (
    <S.Container>
    </S.Container>
  );
};

export default RowPicker;
