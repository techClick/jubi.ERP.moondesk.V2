import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const DarkBG = styled.div`
  // background: ${Color(panelBorderColor).darken(0.3).toString()};
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
