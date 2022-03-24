import { faGear, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'views/App/DataSheet/redux';
import * as S from '../CreateTable/CreateTable.styled';
import * as X from './DeleteTable.styled';

const DeleteTable = function DeleteTable({ isMoreTools }:{ isMoreTools?: boolean }) {
  const dispatch = useDispatch();

  return (
    <X.Container>
      <S.ToolsContainer
        onClick={() => {
          if (isMoreTools) dispatch(setShowPopup({}));
        }}
      >
        <S.IconContainer>
          <S.Icon
            // color={toolOption.color}
            // scaleX={toolOption.scaleX}
            // scaleY={toolOption.scaleY}
            yAdd="2px"
          >
            <FontAwesomeIcon icon={faGear} size="3x" />
          </S.Icon>
        </S.IconContainer>
        <S.ToolName>
          <FontAwesomeIcon icon={faList} />
          {' More'}
        </S.ToolName>
      </S.ToolsContainer>
    </X.Container>
  );
};

export default DeleteTable;
