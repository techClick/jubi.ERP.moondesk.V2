import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div<any>`
  width: 100%;
  height: 30px;
  background: ${Color(panelBorderColor).darken(0.3).toString()};
`;
