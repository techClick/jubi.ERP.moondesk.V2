import React from 'react';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { setShowPopup } from 'views/App/DataSheet/redux';
import MediaQuery from 'react-responsive';
import { toolsRes2, toolsRes3 } from 'views/styles';
import CreateTable from '../../CreateTable/CreateTable';
import ModifyTable from '../../ModifyTable/ModifyTable';
import SearchTable from '../../SearchTable/SearchTable';
import * as S from './ToolsDialogue.styled';
import DeleteTable from '../../DeleteTable/DeleteTable';

const ToolsDialogue = function ToolsDialogue() {
  return (
    <S.Container>
      <S.Header>
        TOOLS
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.ToolsContainer>
        <MediaQuery maxWidth={toolsRes2}>
          <S.ToolsSection>
            <SearchTable isMoreTools />
          </S.ToolsSection>
        </MediaQuery>
        <S.ToolsSection>
          <ModifyTable isMoreTools />
        </S.ToolsSection>
        <S.ToolsSection>
          <CreateTable isMoreTools />
        </S.ToolsSection>
        <MediaQuery maxWidth={toolsRes3}>
          <S.ToolsSection>
            <DeleteTable isMoreTools />
          </S.ToolsSection>
        </MediaQuery>
      </S.ToolsContainer>
    </S.Container>
  );
};

export default ToolsDialogue;
