import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'views/App/Analytics/redux';
import * as S from './NewChart.styled';
import './scrollBar.css';
import { toolOptions } from './utils/utils';
import ChartSelector from './ChartSelector/ChartSelector';

const NewChart = function NewChart() {
  const dispatch = useDispatch();
  return (
    <S.Container id="scrollcontainer">
      {
        toolOptions.map((toolOption, i) => (
          <S.ToolsContainer
            key={`newchartoption${i}`}
            onClick={() => {
              dispatch(setShowPopup({ component: <ChartSelector /> }));
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
              {toolOption.name}
            </S.ToolName>
          </S.ToolsContainer>
        ))
      }
    </S.Container>
  );
};

export default NewChart;
