import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  position: fixed;
  right: 50.25%;
  bottom: 50%;
  transform: translate(50%, 50%);
  background: white;
  z-index: 4;
  width: max-content;
  max-height: 60%;
  border-radius: 2px;
  padding-bottom: 15px;
`;

export const Header = styled.div<any>`
  padding: 12px;
  padding-top: 8px;
  padding-bottom: 6px;
  padding-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  font-size: 14px;
  font-weight: 600;
`;

export const ToolsContainer = styled.div<any>`
  margin-top: 29px;
`;

export const ToolsSection = styled.div<any>`
  height: max-content;
  width: 100%;
  position: relative;
  padding-top: 8px;
  padding-left: 7px;
  padding-right: 15px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;
