import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { selectIsSelectingCell, setShowPopup } from 'views/App/DataSheet/redux';
import * as S from '../CreateTable/CreateTable.styled';
import * as X from './ModifyTable.styled';
import { toolOptions } from './utils/utils';

const ModifyTable = function ModifyTable({ isMoreTools }:{ isMoreTools?: boolean }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isSelectingCell = useAppSelector(selectIsSelectingCell);

  return (
    <X.Container>
      {
        toolOptions.map((toolOption, i) => (
          <S.ToolsContainer
            key={`modifytooloption${i}`}
            isSelected={toolOption.name === 'Pick cell' && isSelectingCell}
            onClick={() => {
              if (isMoreTools && toolOption.name !== 'Pick cell') dispatch(setShowPopup({}));
              if (toolOption.action) {
                dispatch(toolOption.action());
              } else {
                history.push(toolOption.path);
              }
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
