import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './SingleCharts.styled';
import { charts } from './utils/utils';

const SingleCharts = function SingleCharts() {
  const history = useHistory();

  return (
    <S.Conatiner>
      {
        charts.map((chart) => {
          return (
            <S.ChartContainer
              onClick={() => {
                history.push(`/app/analytics/createchart/${chart.name}`)
              }}
            >
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

export default SingleCharts;
