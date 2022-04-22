import Color from 'color';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faChartColumn, faChartGantt, faChartPie } from '@fortawesome/free-solid-svg-icons';

export const charts = [{
  name: 'Growth-Pie chart',
  icon: faChartPie,
  color: Color('#DC4D18').lighten(0.2).toString(),
},
{
  name: 'Growth-Bar chart',
  icon: faChartBar,
  color: '#3795E0',
},
{
  name: 'Growth-Histogram',
  icon: faChartColumn,
  color: '#DCB67A',
},
{
  name: 'Growth-Scatter plot',
  icon: faChartGantt, // faChartScatter
  color: '#9564CD',
},
];
