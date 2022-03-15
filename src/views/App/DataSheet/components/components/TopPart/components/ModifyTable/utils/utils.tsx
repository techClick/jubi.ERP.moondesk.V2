import React from 'react';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const toolOptions = [
  {
    name: 'Pick cell',
    name2: 'rows',
    icon: <FontAwesomeIcon icon={faSquarePlus} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
  {
    name: 'Filter row',
    name2: '',
    icon: <FontAwesomeIcon icon={faTable} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
  {
    name: 'Add row',
    name2: '',
    icon: <FontAwesomeIcon icon={faTable} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
];
