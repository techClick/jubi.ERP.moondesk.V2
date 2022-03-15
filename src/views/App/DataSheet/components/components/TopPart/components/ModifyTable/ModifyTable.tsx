import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';
import * as S from '../CreateTable/CreateTable.styled';
import { toolOptions } from './utils/utils';

const ModifyTable = function ModifyTable() {
  const history = useHistory();

  return (
    <S.Container id="scrollcontainer">
      {
        toolOptions.map((toolOption, i) => (
          <S.ToolsContainer
            key={`modifytooloption${i}`}
            onClick={() => history.push(toolOption.path)}
          >
            <S.IconContainer>
              <S.Icon>
                {toolOption.icon}
              </S.Icon>
            </S.IconContainer>
            <S.ToolName>
              <FontAwesomeIcon icon={faSquarePlus} />
              {' '}
              {toolOption.name}
            </S.ToolName>
          </S.ToolsContainer>
        ))
      }
    </S.Container>
  );
};

export default ModifyTable;
