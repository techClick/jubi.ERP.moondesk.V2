import React, { useState } from 'react';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { setShowPopup } from 'views/App/Analytics/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import * as S from './ChartSelector.styled';
import SingleCharts from './SingleCharts/SingleCharts';
import GrowthCharts from './GrowthCharts/GrowthCharts';

const ChartSelector = function ChartSelector() {
  const chartGroups: any = ['Single charts', 'Growth charts'];// , 'Comparison charts', 'Comparison-Growth charts'];
  const [showGroupCharts, setShowGroupCharts] = useState<any>({
    'Single charts': false,
    'Growth charts': false,
    'Comparison charts': false,
    'Comparison-Growth charts': false,
  });

  const components: any = {
    'Single charts': <SingleCharts />,
    'Growth charts': <GrowthCharts />,
    'Comparison charts': <SingleCharts />,
    'Comparison-Growth charts': <SingleCharts />,
  };

  return (
    <S.Container>
      <S.Header>
        SELECT NEW CHART
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      {
        chartGroups.map((group: any, i: any) => (
          <>
            <S.ChartGroup
              key={`chartgroup_${i}`}
              onClick={() => {
                setShowGroupCharts({ ...showGroupCharts, [group]: !showGroupCharts[group] });
              }}
            >
              <S.Label>{group}</S.Label>
              <S.IconConatiner
                rotate={showGroupCharts[group]}
              >
                <S.Icon>
                  <FontAwesomeIcon icon={faAngleUp} />
                </S.Icon>
              </S.IconConatiner>
            </S.ChartGroup>
            <S.ChartContainer showThis={showGroupCharts[group]}>
              {components[group]}
            </S.ChartContainer>
          </>
        ))
      }
    </S.Container>
  );
};

export default ChartSelector;
