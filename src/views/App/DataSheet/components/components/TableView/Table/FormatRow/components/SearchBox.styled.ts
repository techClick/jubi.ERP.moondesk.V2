import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div<any>`
  position: relative;
  margin-left: 12px;
  right: 0;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Search = styled.input<any>`
  width: calc(100% - 12px);
  height: 27px;
  margin-top: 0px;
  border-radius: 4px;
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
  right: 16px;
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
