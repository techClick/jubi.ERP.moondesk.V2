import React from 'react';
import * as S from './ToolsPanel.styled';
import NewChartTools from './NewChart/NewChart';
import ReportTools from './ReportTools/ReportTools';

const TopPart = function TopPart() {
  return (
    <S.Container id="toolspanel">
      <S.ToolSection>
        <NewChartTools />
      </S.ToolSection>
      <S.ToolSection2>
        <ReportTools />
      </S.ToolSection2>
    </S.Container>
  );
};

export default TopPart;
