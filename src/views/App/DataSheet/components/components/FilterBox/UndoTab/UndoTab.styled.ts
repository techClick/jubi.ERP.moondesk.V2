import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div<any>`
  width: 100%;
  height: 25px;
  background: ${Color(panelBorderColor).darken(0.3).toString()};
  text-align: right;
`;

export const AllIconCont = styled.div<any>`
  width: max-content;
  height: 100%;
  display: inline-flex;
`;

export const IconContainer = styled.div<any>`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${Color('white').darken(0.55).toString()};
  opacity: ${(props) => props.isTransparent && 0.4};
  cursor: pointer;
  &:hover {
    color: ${Color('black').lighten(0.4).toString()};
    background-color: ${Color('white').darken(0.55).toString()};
  }
`;

export const Icon = styled.div<any>`
  margin-top: 2px;
  transform: scale(0.6);
`;
