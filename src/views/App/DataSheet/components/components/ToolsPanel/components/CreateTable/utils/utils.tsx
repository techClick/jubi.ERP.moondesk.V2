import React from 'react';
import { faCodeMerge, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-regular-svg-icons';

const ALLCOLOR = '#81e055';
export const toolOptions = [
  {
    name: 'Copy',
    name2: '',
    icon: <FontAwesomeIcon icon={faClone} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: '#81e055', // '#b950af',
  },
  {
    name: 'Merge',
    name2: '',
    icon: <FontAwesomeIcon icon={faCodeMerge} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: '#81e055', // '#686ec0',
  },
  {
    name: 'New',
    name2: '',
    icon: <FontAwesomeIcon icon={faTable} size="3x" />,
    path: '/app/datasheets/importtypes',
    color: '#81e055', // '#5ec22f',
  },
];
