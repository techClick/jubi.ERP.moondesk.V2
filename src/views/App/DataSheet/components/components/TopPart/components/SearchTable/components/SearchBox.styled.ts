import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div<any>`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SearchDiv = styled.div<any>`
  position: relative;
  margin-top: -1.4px;
`;

export const Search = styled.input<any>`
  width: 150px;
  height: 22px;
  border-radius: 12px;
  padding-left: 21px;
  padding-right: 24px;
  margin-right: 6px;
  font-size: 11.3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color(panelBorderColor).darken(0).toString()};
  border: ${(props) => props.isError && '1px solid red'};
  outline: ${(props) => props.isActive && `2.3px solid ${Color('grey').darken(0.6).toString()}`};
  &:focus{
    outline: ${(props) => { return props.isActive ? '2.3px' : '1px'; }}
      solid ${Color('grey').darken(0.6).toString()};
    border: 0;
    height: 20px;
  }
`;

export const SearchIconCont = styled.div`
  position: absolute;
  left: 3px;
  bottom: 50%;
  transform: translateY(calc(50% + 1.5px));
  color: ${Color(panelBorderColor).darken(0.1).toString()};
`;

export const SearchIcon = styled.div<any>`
  transform: scale(0.7);
`;

export const ClearIconCont = styled.div`
  position: absolute;
  right: 8px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  bottom: 50%;
  transform: translateY(calc(50% + 1.5px));
  color: ${Color(panelBorderColor).darken(0.1).toString()};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.15).toString()};
    color: ${Color(panelBorderColor).darken(0.2).toString()};
  }
`;

export const ClearIcon = styled.div<any>`
  transform: scale(0.805);
  margin-left: -1px;
`;
