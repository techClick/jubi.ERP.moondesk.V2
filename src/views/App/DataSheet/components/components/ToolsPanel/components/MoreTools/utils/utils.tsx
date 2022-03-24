import React from 'react';
import { faScrewdriverWrench, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from 'color';
import { setShowPopup } from 'views/App/DataSheet/redux';
import ToolsDialogue from '../ToolsDialogue/ToolsDialogue';

export const toolOptions = [
  {
    name: 'Tools',
    name2: '',
    icon: <FontAwesomeIcon icon={faWrench} size="3x" />,
    action: () => setShowPopup({
      component: <ToolsDialogue />,
      exitOnBgClick: true,
    }),
    color: Color('#DC4D18').lighten(0.2).toString(),
    scaleX: 0.42,
    scaleY: 0.42,
    yAdd: '1.4px',
    miniIcon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
  },
];
