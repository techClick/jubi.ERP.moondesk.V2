import React from 'react';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const newSheetOptions = [
  {
    name: 'Filter',
    name2: 'rows',
    icon: <FontAwesomeIcon icon={faSquarePlus} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
  {
    name: 'New',
    name2: '',
    icon: <FontAwesomeIcon icon={faTable} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
  {
    name: 'Copy',
    name2: '',
    icon: <FontAwesomeIcon icon={faTable} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
  {
    name: 'Merge',
    name2: '',
    icon: <FontAwesomeIcon icon={faTable} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
];
