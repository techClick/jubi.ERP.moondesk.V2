import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

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
  font-size: 15px;
  font-weight: 600;
`;

export const SheetName = styled.div<any>`
  margin-top: 13px;
  margin-left: 12px;
  font-size: 11.5px;
  font-weight: 500;
`;

export const InputDiv = styled.div<any>`
  display: flex;
  width: calc(100% - 20px);
  margin-top: 2px;
  margin-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-left: ${(props) => props.isError && '1px solid red'};
  position: relative;
`;

export const MainButtonDiv = styled.div<any>`
  height: 100%;
  width: max-content;
  margin-left: 12px;
  margin-top: 7px;
`;

export const Input = styled.input<any>`
  width: 70%;
  height: 28.5px;
  border-radius: 2px;
  padding-left: 7px;
  padding-bottom: 2.5px;
  font-size: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color(panelBorderColor).darken(0.05).toString()};
  border: ${(props) => props.isError && '1px solid red'};
`;

export const Required = styled.div`
  display: flex;
  font-size: 11px;
  height: 14px;
  position: absolute;
  bottom: -13px;
  left: -2px;
  color: red;
  width: 150%;
`;
