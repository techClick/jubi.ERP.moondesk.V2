import React from 'react';
import { faArrowDownWideShort, faExpand, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const toolOptions = [
  {
    name: 'Pick cell',
    name2: 'rows',
    icon: <FontAwesomeIcon icon={faExpand} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
  {
    name: 'Filter row',
    name2: '',
    icon: <FontAwesomeIcon icon={faArrowDownWideShort} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
  {
    name: 'Add row',
    name2: '',
    icon: <FontAwesomeIcon icon={faTableColumns} size="3x" />,
    path: '/app/datasheets/importtypes',
  },
];
