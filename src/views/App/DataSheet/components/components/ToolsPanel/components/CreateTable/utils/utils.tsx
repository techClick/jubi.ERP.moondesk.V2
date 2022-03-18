import React from 'react';
import { faCodeMerge, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import Color from 'color';
import { textColor } from 'views/App/styles';

export const toolOptions = [
  {
    name: 'Copy',
    name2: '',
    icon: <FontAwesomeIcon icon={faClone} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: '#9564CD',
    scaleX: 0.42,
    scaleY: 0.42,
    yAdd: 0,
  },
  {
    name: 'Merge',
    name2: '',
    icon: <FontAwesomeIcon icon={faCodeMerge} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: Color('#DC4D18').lighten(0).toString(),
    scaleX: 0.425,
    scaleY: 0.425,
    yAdd: '1px',
  },
  {
    name: 'New',
    name2: '',
    icon: <FontAwesomeIcon icon={faTable} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: Color(textColor).lighten(0.7).toString(),
    scaleX: 0.4675,
    scaleY: 0.4675,
    yAdd: '1.4px',
  },
];
