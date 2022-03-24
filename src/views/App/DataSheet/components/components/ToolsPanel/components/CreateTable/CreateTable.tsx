import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'views/App/DataSheet/redux';
import * as S from './CreateTable.styled';
import './scrollBar.css';
import { toolOptions } from './utils/utils';

const CreateTable = function CreateTable({ isMoreTools }:{ isMoreTools?: boolean }) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <S.Container id="scrollcontainer">
      {
        toolOptions.map((toolOption, i) => (
          <S.ToolsContainer
            key={`createtooloption${i}`}
            onClick={() => {
              if (isMoreTools) dispatch(setShowPopup({}));
              history.push(toolOption.path);
            }}
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
