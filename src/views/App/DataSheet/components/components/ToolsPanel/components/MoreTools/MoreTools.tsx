import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from '../CreateTable/CreateTable.styled';
import './scrollBar.css';
import { toolOptions } from './utils/utils';

const MoreTools = function MoreTools() {
  const dispatch = useDispatch();

  return (
    <S.Container id="scrollcontainer">
      {
        toolOptions.map((toolOption, i) => (
          <S.ToolsContainer
            key={`createtooloption${i}`}
            onClick={() => dispatch(toolOption.action())}
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
