import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  text-align: left;
  // background: white;
  width: auto;
  height: max-content;
  max-height: max-content;
  padding: 8px;
  padding-bottom: 6.75px;
  padding-left: 0px;
  // border-bottom: 1px solid ${Color(textColor).lighten(1.6).toString()};
  box-shadow: 0 2px 2px -2px ${Color(textColor).lighten(1).toString()};
  margin-bottom: 3px;
  /* -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; */
  position: relative;
  z-index: 3;
  overflow: hidden;
`;

export const ToolSection = styled.div`
  height: max-content;
  position: relative;
  height: 100%;
  padding-right: 8.4px;
`;

export const ToolSection2 = styled.div`
  position: absolute;
  right: 0;
  max-height: 100%;
  padding-right: 8.4px;
`;
