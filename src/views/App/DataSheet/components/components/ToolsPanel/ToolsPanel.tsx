import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import MediaQuery from 'react-responsive';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { toolsRes1, toolsRes2, toolsRes3 } from 'views/styles';
import * as S from './ToolsPanel.styled';
import CreateTableTools from './components/CreateTable/CreateTable';
import MyTableTools from './components/MyTable/MyTable';
import ModifyTableTools from './components/ModifyTable/ModifyTable';
import SearchTable from './components/SearchTable/SearchTable';
import DeleteTable from './components/DeleteTable/DeleteTable';
import MoreTools from './components/MoreTools/MoreTools';

const TopPart = function TopPart() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];

  if (!sheet) return null;

  return (
    <S.Container id="toolspanel">
      <S.ToolSection>
        <MyTableTools />
        <S.Line />
      </S.ToolSection>
      <MediaQuery minWidth={toolsRes1 + 0.01}>
        <S.ToolSection2>
          <ModifyTableTools />
          <S.Line />
        </S.ToolSection2>
      </MediaQuery>
      <MediaQuery maxWidth={toolsRes1}>
        <S.ToolSection2>
          <MoreTools />
          <MediaQuery minWidth={toolsRes2 + 0.01}>
            <S.Line />
          </MediaQuery>
        </S.ToolSection2>
      </MediaQuery>
      <MediaQuery minWidth={toolsRes2 + 0.01}>
        <S.ToolSection2>
          <SearchTable />
          <MediaQuery minWidth={toolsRes1 + 0.01}>
            <S.Line />
          </MediaQuery>
        </S.ToolSection2>
      </MediaQuery>
      <MediaQuery minWidth={toolsRes1 + 0.01}>
        <S.ToolSection2>
          <CreateTableTools />
        </S.ToolSection2>
      </MediaQuery>
      <MediaQuery minWidth={toolsRes3 + 0.01}>
        <S.ToolSection3>
          <S.Line2 />
          <DeleteTable />
        </S.ToolSection3>
      </MediaQuery>
    </S.Container>
  );
};

export default TopPart;
