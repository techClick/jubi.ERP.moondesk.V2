import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  width: calc(100% - 20px);
  max-width: 240px;
  height: max-content;
  background: white;
  position: fixed;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  z-index: 4;
  border-radius: 2px;
`;

export const Header = styled.div<any>`
  padding: 15px;
  padding-top: 8px;
  padding-bottom: 6px;
  padding-left: 15px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  font-size: 16px;
  font-weight: 700;
`;

export const SheetName = styled.div<any>`
  margin-top: 18px;
  margin-left: 15px;
  font-size: 12px;
  font-weight: 500;
`;

export const InputDiv = styled.div<any>`
  display: flex;
  width: 80%;
  margin-top: 0px;
  margin-left: 15px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-left: ${(props) => props.isError && '1px solid red'};
  position: relative;
`;

export const Input = styled.input<any>`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding-left: 5px;
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

export const MainButtonDiv = styled.div<any>`
  height: 100%;
  display: flex;
  justify-content: center;
  width: 140px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Header2 = styled.div<any>`
  margin-top: 17px;
  padding: 7px;
  padding-left: 15px;
  padding-bottom: 6px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  // border-top: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  // border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  // background: ${Color(panelBorderColor).lighten(0.15).toString()};
  font-size: 14px;
  font-weight: 500;
`;
