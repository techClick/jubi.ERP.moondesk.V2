import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';
import * as S from './CreateTable.styled';
import './scrollBar.css';
import { toolOptions } from './utils/utils';

const CreateTable = function CreateTable() {
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
              <S.Icon color={toolOption.color}>
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

export default CreateTable;
