import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div<any>`
  position: relative;
  margin-left: 6px;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  transform: translateY(30.5px);
  margin-top: -0.25px;
`;

export const Search = styled.input<any>`
  width: 160px;
  height: 27px;
  margin-top: 0px;
  border-radius: 4px; // 12px;
  padding-left: 24px;
  padding-right: 22px;
  font-size: 11.3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color(panelBorderColor).darken(0).toString()};
  &:focus{
    border: 1px solid ${Color('grey').darken(0.4).toString()};
  }
`;

export const SearchIconCont = styled.div`
  position: absolute;
  left: 6px;
  bottom: 50%;
  transform: translateY(calc(50% - 0px));
  color: ${Color(panelBorderColor).darken(0.1).toString()};
`;

export const SearchIcon = styled.div<any>`
  transform: scale(0.875);
`;

export const ClearIconCont = styled.div`
  position: absolute;
  right: 3px;
  height: 24px;
  width: 18px;
  border-radius: 50%;
  bottom: 50%;
  transform: translateY(calc(50% + 0.5px));
  color: ${Color(panelBorderColor).lighten(0.05).toString()};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: ${Color(panelBorderColor).darken(0.4).toString()};
  }
`;

export const ClearIcon = styled.div<any>`
  transform: scale(0.375);
  margin-left: 1px;
  margin-top: 1px;
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  border: 1px solid ${Color(panelBorderColor).darken(0).toString()};
  height: 26px;
  width: 26px;
  transform: translateY(calc(-100% - 3px));
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: ${Color(panelBorderColor).darken(0.1).toString()};
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.15).toString()};
    color: ${Color(textColor).lighten(0.2).toString()};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  transform: scale(0.575);
  margin-top: .5px;
`;
