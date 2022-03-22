import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { Sheet } from 'types/types';
import * as S from './SheetParts.styled';
import ToolsPanel from './components/ToolsPanel/ToolsPanel';
import TableView from './components/TableView/TableView';

const SheetParts = function SheetParts() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];

  return (
    <S.Container>
      <S.DarkBG>
        <ToolsPanel />
        { sheet && <TableView />}
      </S.DarkBG>
      <S.FilterBoxContainer>
        {' '}
      </S.FilterBoxContainer>
    </S.Container>
  );
};

export default SheetParts;
