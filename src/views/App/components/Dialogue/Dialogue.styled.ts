import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div`
  width: calc(100% - 20px);
  max-width: 275px;
  height: max-content;
  padding-bottom: 12px;
  background: white;
  position: fixed;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  z-index: 4;
  border-radius: 2px;
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

export const TopText = styled.div<any>`
  margin-top: 13px;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 11.5px;
  font-weight: 500;
`;

export const SheetName = styled.div<any>`
  margin-top: 13px;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 11.5px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div<any>`
  height: 100%;
  width: 100%;
  margin-left: 2px;
  margin-top: 8px;
  display: flex;
`;

export const MainButtonDiv = styled.div<any>`
  height: 100%;
  width: max-content;
  margin-left: 12px;
  margin-top: 8px;
`;

export const ButtonDiv = styled.div<any>`
  height: 100%;
  width: max-content;
  margin-left: 12px;
  margin-top: 8px;
`;

export const Button = styled.div`
  background: ${Color(textColor).lighten(1.5).toString()};
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 7px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 13px;
  width: max-content;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color(textColor).lighten(0.6).toString()};
    color: ${Color(textColor).darken(0.35).toString()};
  }
`;
