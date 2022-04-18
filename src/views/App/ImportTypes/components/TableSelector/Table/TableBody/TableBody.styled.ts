import Color from 'color';
import styled from 'styled-components';
import { highlightColor2, panelBorderColor, textColor } from 'views/App/styles';

const tableBorderColor = Color(panelBorderColor).lighten(0.1).toString();
export const TR = styled.tr<any>`
  border-top: .75px solid ${Color(tableBorderColor).darken(0.005).toString()};
  background: ${Color('white').darken(0.05).toString()};
`;

export const TD = styled.td<any>`
  color: ${Color(textColor).lighten(0.1).toString()};
  padding-right: ${(props) => { return props.isIndex ? '6px' : '9px'; }};
  padding-left: ${(props) => { return props.isIndex ? '23px' : '9px'; }};
  height: 23px;
  font-size: 11px;
  position: relative;
  max-width: 132px;
  z-index: 2;
`;

export const TDText = styled.div<any>`
  z-index: 2;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 0.5px;
  width: max-content;
`;

export const Highlight2 = styled.div`
  position: absolute;
  right: 50%;
  bottom: 50%;
  height: 105%;
  width: 105%;
  z-index: 1;
  transform: translate(50%, 50%);
  background: ${highlightColor2};
`;
