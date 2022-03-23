import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div<any>`
  padding: 0px 0px;
  width: max-content;
  height: max-content;
  margin-top: 7px;
  margin-left: 1px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-radius: 2px;
  color: ${Color(textColor).lighten(0.6).toString()};
  transform: rotate(${(props) => { return props.isSort ? '180deg' : '360deg'; }});
  transition: ${(props) => !props.noTrans && 'all 0.15s linear'};
  margin-top: ${(props) => props.isSort && '-10px'};
  -webkit-tap-highlight-color: transparent;
`;

export const Icon = styled.div`
  cursor: pointer;
  transform: scale(0.75);
`;
