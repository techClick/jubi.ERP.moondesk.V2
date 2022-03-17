import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import * as S from './ToolsPanel.styled';
import CreateTableTools from './components/CreateTable/CreateTable';
import MyTableTools from './components/MyTable/MyTable';
import ModifyTableTools from './components/ModifyTable/ModifyTable';
import SearchTable from './components/SearchTable/SearchTable';

const TopPart = function TopPart() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];

  if (!sheet) return null;

  return (
    <S.Container id="toppart">
      <S.ToolSection>
        <MyTableTools />
        <S.Line />
      </S.ToolSection>
      <S.ToolSection>
        <ModifyTableTools />
        <S.Line />
      </S.ToolSection>
      <S.ToolSection2>
        <SearchTable />
        <S.Line />
      </S.ToolSection2>
      <S.ToolSection2>
        <CreateTableTools />
      </S.ToolSection2>
    </S.Container>
  );
};

export default TopPart;
