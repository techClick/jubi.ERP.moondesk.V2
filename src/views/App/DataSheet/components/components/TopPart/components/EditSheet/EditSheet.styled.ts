import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div`
  width: calc(100% - 20px);
  max-width: 280px;
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
  font-weight: 600;
`;

export const SheetName = styled.div<any>`
  margin-top: 18px;
  margin-left: 15px;
  font-size: 12.5px;
  font-weight: 500;
`;

export const InputDiv = styled.div<any>`
  display: flex;
  width: calc(100% - 30px);
  margin-top: 1px;
  margin-left: 14.5px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-left: ${(props) => props.isError && '1px solid red'};
  position: relative;
`;

export const Input = styled.input<any>`
  width: 70%;
  height: 32px;
  border-radius: 2px;
  padding-left: 7px;
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
  margin-top: 25px;
  padding-left: 15px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
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
  margin-right: 15px;
`;

export const IconContainer = styled.div`
  padding: 0px 0px;
  width: 23px;
  height: 22px;
  margin-left: 7.5px;
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
  margin-top: -4px;
  margin-left: -2.6px;
  transform: scale(0.355);
`;

export const SelectSearchIcon = styled.div`
  margin-top: -5px;
  margin-left: -2.6px;
  transform: scale(0.405);
`;

export const SearchDiv = styled.div<any>`
  position: relative;
`;

export const Search = styled.input<any>`
  width: 130px;
  height: 100%;
  height: 30px;
  margin-left: 15px;
  border-radius: 12px;
  padding-left: 24px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  border: ${(props) => props.isError && '1px solid red'};
`;

export const IconContainer2 = styled.div`
  position: absolute;
  left: 20px;
  bottom: 50%;
  transform: translateY(50%);
  color: ${Color(panelBorderColor).darken(0.1).toString()};
`;

export const SearchIcon = styled.div<any>`
  transform: scale(0.85);
`;

export const RowsContainer = styled.div<any>`
  margin-left: 15px;
  margin-top: 5px;
  max-height: 220px;
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
  margin-left: 6px;
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input<any>`
  width: 15.5px;
  height: 15.5px;
  background: ${Color(panelBorderColor).darken(0.05).toString()};
`;

export const RowName = styled.div<any>`
  margin-left: 6px;
  margin-top: 1px;
  font-size: 12.2px;
  font-weight: 400;
  color: ${Color(textColor).darken(0.3).toString()};
`;
