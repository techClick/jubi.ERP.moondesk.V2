import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from '../SingleCharts/SingleCharts.styled';
import { charts } from './utils/utils';

const GrowthCharts = function GrowthCharts() {
  return (
    <S.Conatiner>
      {
        charts.map((chart) => {
          return (
            <S.ChartContainer>
              <S.IconConatiner>
                <S.Icon color={chart.color}>
                  <FontAwesomeIcon icon={chart.icon} />
                </S.Icon>
              </S.IconConatiner>
              <S.Label>{chart.name}</S.Label>
            </S.ChartContainer>
          );
        })
      }
    </S.Conatiner>
  );
};

export default GrowthCharts;
