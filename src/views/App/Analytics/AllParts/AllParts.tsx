import React from 'react';
import * as S from './AllParts.styled';
import AnalyticsPanel from './AnalyticsPanel/AnalyticsPanel';
import ToolsPanel from './ToolsPanel/ToolsPanel';

const AllParts = function AllParts() {
  return (
    <S.Container>
      <ToolsPanel />
      <AnalyticsPanel />
    </S.Container>
  );
};

export default AllParts;
