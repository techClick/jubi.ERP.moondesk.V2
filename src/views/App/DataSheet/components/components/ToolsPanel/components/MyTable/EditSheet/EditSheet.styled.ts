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
  margin-bottom: 12px;
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

export const Header2 = styled.div<any>`
  margin-top: 26px;
  padding-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  font-size: 13px;
  font-weight: 500;
  position: relative;
`;

export const Tools = styled.div<any>`
  position: absolute;
  right: 0.2px;
  bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const IconContainer = styled.div`
  padding: 0px 0px;
  width: 20px;
  height: 19px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid ${Color(textColor).lighten(0.1).toString()};// ${Color('white').darken(0.15).toString()};
  color: ${Color(textColor).lighten(0.6).toString()};
  cursor: pointer;
  &:hover {
    background: ${Color('white').darken(0.075).toString()};
  }
`;

export const Icon = styled.div`
  margin-top: -4.75px;
  margin-left: -2.6px;
  transform: scale(0.355);
`;

export const SelectSearchIcon = styled.div`
  margin-top: -5px;
  margin-left: -2.6px;
  transform: scale(0.405);
`;

export const RowsContainer = styled.div<any>`
  margin-left: 12px;
  margin-top: 5px;
  max-height: 215px;
  overflow-y: auto;
  direction: rtl;
`;

export const RowCont1 = styled.div<any>`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  direction: ltr;
`;

export const CheckBoxDiv = styled.div<any>`
  margin-left: 3px;
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input<any>`
  width: 13px;
  height: 13px;
  background: ${Color(panelBorderColor).darken(0.05).toString()};
`;

export const RowName = styled.div<any>`
  margin-left: 3px;
  margin-top: 1px;
  font-size: 11.2px;
  font-weight: 400;
  color: ${Color(textColor).darken(0.3).toString()};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 160px;
  &:hover {
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }
`;
