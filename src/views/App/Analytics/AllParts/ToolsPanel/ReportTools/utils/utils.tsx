import React from 'react';
import { faFileWaveform, faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import Color from 'color';

export const toolOptions = [
  {
    name: 'Clear',
    name2: '',
    icon: <FontAwesomeIcon icon={faXmark} size="3x" />,
    color: Color('#DC4D18').lighten(0.2).toString(),
    scaleX: 0.36,
    scaleY: 0.36,
    yAdd: '-4px',
    fontSize: null,
    icon2: faGear,
  },
  {
    name: 'Save',
    name2: '',
    icon: <FontAwesomeIcon icon={faFileWaveform} size="3x" />,
    color: '#DCB67A',
    scaleX: 0.32,
    scaleY: 0.32,
    yAdd: '-4px',
    fontSize: null,
    icon2: faGear,
  },
  {
    name: 'Report',
    name2: '',
    icon: <FontAwesomeIcon icon={faFileWaveform} size="3x" />,
    color: null, // '#DCB67A',
    scaleX: 0.32,
    scaleY: 0.32,
    yAdd: '-4px',
    fontSize: null, // '8.7px',
    icon2: faSquarePlus,
  },
];
