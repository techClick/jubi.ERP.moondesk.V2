import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  text-align: left;
  background: white;
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid ${Color(textColor).lighten(1).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: relative;
`;

export const ToolSection = styled.div`
  height: max-content;
  position: relative;
  height: 100%;
  padding-right: 8.4px;
`;

export const ToolSection2 = styled.div`
  height: max-content;
  position: relative;
  height: 100%;
  padding-right: 8px;
`;

export const Line = styled.div`
  width: 1px;
  height: calc(100% + 16px);
  position: absolute;
  right: 0px;
  bottom: 50%;
  transform: translateY(calc(50% + .2px));
  background: ${Color(textColor).lighten(1.6).toString()};
`;
