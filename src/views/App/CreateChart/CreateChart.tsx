import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { Background } from 'views/styles';
import { setDisplaySheetFromEdits } from '../DataSheet/utils/utils';
import CellSelector from './CellSelector/CellSelector';
import ChartBuilder from './ChartBuilder/ChartBuilder';
import * as S from './CreateChart.styled';
import { selectShowPopup, setAllBuild, setChartSheetName1, setChartType, setSelectedBuild, setShowPopup } from './redux';

const CreateChart = function CreateChart() {
  const showPopup = useAppSelector(selectShowPopup);
  const dispatch = useDispatch();
  const { chartType }: any = useParams();

  useEffect(() => {
    dispatch(setChartType(chartType));
    dispatch(setShowPopup({}));
    dispatch(setAllBuild({}));
    dispatch(setSelectedBuild(null));
    dispatch(setChartSheetName1(null));
    dispatch(setDisplaySheetFromEdits());
  }, []);

  if (chartType !== 'Pie chart') return null;

  return (
    <S.MainContainer>
      {showPopup.component
        && (
          <>
            <Background onClick={() => {
              if (showPopup.exitOnBgClick) {
                if (showPopup.action) showPopup.action();
                dispatch(setShowPopup({}));
              }
            }}
            />
            {showPopup.component}
          </>
        )}
      <S.Container>
        <S.ChartBuilderCont>
          <ChartBuilder />
        </S.ChartBuilderCont>
        <S.CellSelectorCont>
          <CellSelector />
        </S.CellSelectorCont>
      </S.Container>
    </S.MainContainer>
  );
};

export default CreateChart;
