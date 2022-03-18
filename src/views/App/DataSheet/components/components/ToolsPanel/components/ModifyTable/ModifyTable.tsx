import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import * as S from '../CreateTable/CreateTable.styled';
import * as X from './ModifyTable.styled';
import { toolOptions } from './utils/utils';

const ModifyTable = function ModifyTable() {
  const history = useHistory();

  return (
    <X.Container>
      {
        toolOptions.map((toolOption, i) => (
          <S.ToolsContainer
            key={`modifytooloption${i}`}
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
              <FontAwesomeIcon icon={faBorderAll} />
              {' '}
              {toolOption.name}
            </S.ToolName>
          </S.ToolsContainer>
        ))
      }
    </X.Container>
  );
};

export default ModifyTable;
