/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';

export const pieData = [
  { name: 'Group A', value: 1 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

export const COLORS = ['#639fd3', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
export const renderCustomizedLabel = function renderCustomizedLabel(
  {
    cx, cy, midAngle, innerRadius, outerRadius, percent, name,
  }:
  { cx: any, cy: any, midAngle: any, innerRadius: any,
    outerRadius: any, percent: any, index: any, name: any },
) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central"
        fontWeight={500}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text x={x} y={y - 15} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central"
        fontWeight={700}
      >
        {name}
      </text>
    </>
  );
};
