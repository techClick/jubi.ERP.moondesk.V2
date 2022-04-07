import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div<any>`
  margin-top: 80px;
  flex: 1;
  background: ${Color(panelBorderColor).darken(0.5).toString()};
  border: 1px solid ${Color(panelBorderColor).darken(0.6).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;
