import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import * as S from './TopPart.styled';
import SheetViewer from './components/SheetViewer';

const TopPart = function TopPart() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];

  return (
    <S.Container id="toppart">
      <SheetViewer />
      <S.SheetName>
        {sheet?.name}
      </S.SheetName>
    </S.Container>
  );
};

export default TopPart;
