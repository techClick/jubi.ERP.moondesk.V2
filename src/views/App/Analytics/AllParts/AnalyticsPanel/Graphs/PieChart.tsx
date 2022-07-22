/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  PieChart as PieChartRe, Pie, Cell, Tooltip,
} from 'recharts';
import { ChartSheet } from 'types/types';
import * as S from './PieChart.styled';
import { COLORS, renderCustomizedLabel } from './utils/utils';

const PieChart = function PieChart({ chartSheet }:{ chartSheet: ChartSheet }) {
  return (
    <S.Container>
      <PieChartRe width={500} height={500}>
        <Pie
          data={chartSheet.data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={220}
          fill="#25011a"
          dataKey="value"
          nameKey="name"
          isAnimationActive={false}
        >
          {chartSheet.data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="black"
              onClick={() => {
                console.log(entry.name);
              }}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChartRe>
    </S.Container>
  );
};

export default PieChart;
