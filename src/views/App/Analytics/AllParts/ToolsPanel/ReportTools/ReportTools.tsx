import React from 'react';
import * as S from '../NewChart/NewChart.styled';
import * as X from './ReportTools.styled';
import { toolOptions } from './utils/utils';

const ReportTools = function ReportTools() {
  return (
    <X.Container>
      {
        toolOptions.map((toolOption, i) => (
          <S.ToolsContainer
            key={`reporttooloption${i}`}
            onClick={() => {}}
          >
            <S.IconContainer>
              <S.Icon
                color={toolOption.color}
                scaleX={toolOption.scaleX}
                scaleY={toolOption.scaleY}
                yAdd={toolOption.yAdd}
              >
                {toolOption.icon}
              </S.Icon>
            </S.IconContainer>
            <S.ToolName>
              {toolOption.name}
            </S.ToolName>
          </S.ToolsContainer>
        ))
      }
    </X.Container>
  );
};

export default ReportTools;
