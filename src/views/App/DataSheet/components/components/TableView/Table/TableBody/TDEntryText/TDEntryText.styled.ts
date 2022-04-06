import Color from 'color';
import styled from 'styled-components';
import { highlightColor, textColor } from 'views/App/styles';

export const SearchHighlight = styled.div<any>`
  display: inline-flex;
  align-items: center;
  height: 120%;
  padding: 0 1px;
  margin-left: ${(props) => props.leftMargin && '1.5px'};
  margin-right: ${(props) => props.rightMargin && '1.5px'};
  background: ${highlightColor};
  color: ${Color(textColor).darken(0.2).toString()};
  transform: translateY(0px);
`;
