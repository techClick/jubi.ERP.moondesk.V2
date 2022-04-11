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
  width: 270px;
  height: max-content;
  border-radius: 3px;
  padding-bottom: 12px;
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

export const SheetName = styled.div<any>`
  margin-top: 5px;
  margin-left: 12px;
  font-size: 11.5px;
  font-weight: 500;
`;

export const InputDiv = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  margin-top: 2px;
  margin-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-left: ${(props) => props.isError && '1px solid red'};
  position: relative;
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

export const MainButtonDiv = styled.div<any>`
  height: 100%;
  width: max-content;
  margin-left: 12px;
  margin-top: 8px;
`;

export const Required = styled.div`
  display: flex;
  font-size: 10px;
  height: 14px;
  margin-top: 1px;
  color: red;
  width: 80%;
`;

export const Header2 = styled.div<any>`
  margin-top: 20px;
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
  margin-top: 7px;
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
