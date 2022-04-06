import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  text-align: left;
  background: white;
  width: 100%;
  padding: 8px;
  padding-bottom: 6.75px;
  border-bottom: 1px solid ${Color(textColor).lighten(1).toString()};
  box-shadow: 0 7px 9px -9px rgba(0,0,0,0.4);
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: relative;
  z-index: 3;
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

export const ToolSection3 = styled.div`
  height: max-content;
  position: absolute;
  right: 0;
  height: 100%;
  padding-right: 8.4px;
`;

export const Line = styled.div`
  width: 1px;
  height: calc(100% + 15px);
  position: absolute;
  right: 0px;
  bottom: 50%;
  transform: translateY(calc(50% - 1px));
  background: ${Color(textColor).lighten(1.8).toString()};// ${Color(textColor).lighten(1.6).toString()};
`;

export const Line2 = styled.div`
  width: 1px;
  height: calc(100% + 2px);
  position: absolute;
  left: 0px;
  bottom: 50%;
  transform: translateY(calc(50% - 9px));
  background: ${Color(textColor).lighten(1.8).toString()};// ${Color(textColor).lighten(1.6).toString()};
`;
