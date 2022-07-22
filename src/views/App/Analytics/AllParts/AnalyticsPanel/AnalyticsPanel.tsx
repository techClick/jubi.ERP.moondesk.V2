import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectChartSheets } from '../../redux';
import * as S from './AnalyticsPanel.styled';
import PieChart from './Graphs/PieChart';

const AnalyticsPanel = function AnalyticsPanel() {
  const chartSheets = useAppSelector(selectChartSheets);

  return (
    <S.Container>
      { chartSheets.length === 0 && <S.NoChartsContainer>No charts</S.NoChartsContainer>}
      {
        chartSheets.map((chartSheet, i) => (
          <S.ChartContainer key={`chartsheet_${i}`}>
            <S.ManagePanel>
              <S.DeleteIconCont>
                <S.DeleteIcon>
                  <FontAwesomeIcon icon={faXmark} />
                </S.DeleteIcon>
              </S.DeleteIconCont>
            </S.ManagePanel>
            <S.Header>
              {chartSheet.name}
            </S.Header>
            <S.Chart>
              <PieChart chartSheet={chartSheet} />
            </S.Chart>
          </S.ChartContainer>
        ))
      }
    </S.Container>
  );
};

export default AnalyticsPanel;
