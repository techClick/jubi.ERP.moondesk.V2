import React from 'react';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const toolOptions = [
  {
    name: 'New',
    name2: '',
    icon: <FontAwesomeIcon icon={faChartLine} size="3x" />,
    color: '#DCB67A',
    scaleX: 0.32,
    scaleY: 0.32,
    yAdd: '-4px',
  },
];
