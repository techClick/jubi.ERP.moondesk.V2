import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div<any>`
  height: max-content;
  width: 220px;
  max-width: calc(100% - 20px);
  max-height: ${`${window.innerHeight - 200}px`};
  background: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 10px;
  top: calc(${(props) => props.addHeight} + 10px);
  border-radius: 2px;
  z-index: 5;
  padding-bottom: 10px;
  max-height: calc(100% - 30px - ${(props) => props.addHeight});
`;

export const Header = styled.div<any>`
  padding: 12px;
  padding-top: 8px;
  padding-bottom: 6px;
  padding-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
`;

export const SheetsContainer = styled.div<any>`
  margin-top: 20px;
  border-top: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  padding-top: 1px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  flex: 1;
  overflow: auto;
`;

export const Sheet = styled.div<any>`
  padding: 10px 0px;
  padding-left: 12px;
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  font-size: 11px;
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.1).toString()};
    outline: 1px solid ${Color(panelBorderColor).darken(0.3).toString()};
  }
`;
