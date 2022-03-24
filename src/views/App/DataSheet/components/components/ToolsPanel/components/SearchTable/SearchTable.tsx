import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectSelectedSheet, selectSheets, setShowPopup } from 'views/App/DataSheet/redux';
import * as S from './SearchTable.styled';
import * as X from '../CreateTable/CreateTable.styled';
import SearchBox from './components/SearchBox';
import { toolOptions } from './utils/utils';

const SearchTable = function SearchTable({ isMoreTools }:{ isMoreTools?: boolean }) {
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheet: Sheet = useAppSelector(selectSheets)[selectedSheet];
  const history = useHistory();
  const dispatch = useDispatch();

  if (!sheet) return null;

  return (
    <S.Container id="toolspanel">
      <SearchBox />
      <S.ToolsCont1>
        {
          toolOptions.map((toolOption, i) => (
            <X.ToolsContainer
              key={`createtooloption${i}`}
              onClick={() => {
                if (isMoreTools) dispatch(setShowPopup({}));
                history.push(toolOption.path);
              }}
            >
              <X.IconContainer>
                <X.Icon color={toolOption.color}>
                  {toolOption.icon}
                </X.Icon>
              </X.IconContainer>
              <X.ToolName>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                {' '}
                {toolOption.name}
              </X.ToolName>
            </X.ToolsContainer>
          ))
        }
      </S.ToolsCont1>
    </S.Container>
  );
};

export default SearchTable;
