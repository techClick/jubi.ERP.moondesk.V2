import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
`;

export const NoChartsContainer = styled.div`
  margin: auto;
  margin-top: 9px;
  background: ${Color('white').darken(0.01).toString()};
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  border-radius: 2px;
  color: ${Color(textColor).lighten(0.2).toString()};
`;
