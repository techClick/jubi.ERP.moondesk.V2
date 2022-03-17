import React from 'react';
import { faArrowsLeftRight, faDiagramNext, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const toolOptions = [
  {
    name: 'Options',
    name2: 'rows',
    icon: <FontAwesomeIcon icon={faDiagramNext} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
  {
    name: 'Split',
    name2: '',
    icon: <FontAwesomeIcon icon={faArrowsLeftRight} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
];
