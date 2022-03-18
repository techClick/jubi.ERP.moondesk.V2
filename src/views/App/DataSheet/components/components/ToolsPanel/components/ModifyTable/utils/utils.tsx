import React from 'react';
import { faArrowDownWideShort, faExpand, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from 'color';

export const toolOptions = [
  {
    name: 'Pick cell',
    name2: 'rows',
    icon: <FontAwesomeIcon icon={faExpand} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: '#DCB67A',
    scaleX: 0.425,
    scaleY: 0.465,
    yAdd: '1px',
  },
  {
    name: 'Filter',
    name2: '',
    icon: <FontAwesomeIcon icon={faArrowDownWideShort} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: '#3795E0',
    scaleX: 0.425,
    scaleY: 0.425,
    yAdd: '1.4px',
  },
  {
    name: 'Add row',
    name2: '',
    icon: <FontAwesomeIcon icon={faTableColumns} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: Color('#28BEA5').darken(0.05).toString(),
    scaleX: 0.4675,
    scaleY: 0.4675,
    yAdd: '1.4px',
  },
];
