import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../CreateTable/CreateTable.styled';
import './scrollBar.css';
import { toolOptions } from './utils/utils';

const MoreTools = function MoreTools() {
  const history = useHistory();

  return (
    <S.Container id="scrollcontainer">
      {
        toolOptions.map((toolOption, i) => (
          <S.ToolsContainer
            key={`createtooloption${i}`}
            onClick={() => history.push(toolOption.path)}
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
              {toolOption.miniIcon}
              {' '}
              {toolOption.name}
            </S.ToolName>
          </S.ToolsContainer>
        ))
      }
    </S.Container>
  );
};

export default MoreTools;
