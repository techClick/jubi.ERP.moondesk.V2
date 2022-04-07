import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  z-index: 5;
  background: white;
  width: 200px;
  height: 112px;
  border-radius: 3px;
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

export const SelectInvert = styled.div<any>`
  margin-top: 5px;
  padding-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 11px;
  position: relative;
`;

export const CheckBoxDiv = styled.div<any>`
  margin-left: 0px;
  display: flex;
  width: max-content;
`;

export const CheckBox = styled.input<any>`
  width: 12px;
  height: 12px;
  margin-top: -.05px;
  margin-left: 0;
  background: ${Color(panelBorderColor).darken(0.05).toString()};
`;
