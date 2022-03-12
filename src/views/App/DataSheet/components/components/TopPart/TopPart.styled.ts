import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, tableBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: white;
  width: 100%;
  border-bottom: 1px solid ${tableBorderColor};
  position: relative;
`;

export const ThisSheet = styled.div`
  padding-left: 10px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
`;

export const SheetName = styled.div`
  font-size: 12.075px;
  font-weight: 400;
  max-width: 60%;
  margin-top: 1px;
  color: ${textColor};
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IconContainer = styled.div`
  margin-left: 2px;
  padding: 1px 4px;
  margin-top: 0px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-radius: 2px;
  color: ${Color(textColor).lighten(0.3).toString()};
  cursor: pointer;
  &:hover {
    background: ${Color('white').darken(0.075).toString()};
  }
`;

export const IconContainer2 = styled.div`
  margin-left: 5.5px;
  padding: 1px 5px;
  margin-top: 0px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-radius: 2px;
  color: ${Color(textColor).lighten(0.3).toString()};
  cursor: pointer;
  &:hover {
    background: ${Color('white').darken(0.075).toString()};
  }
`;

export const IconContainer3 = styled.div`
  margin-left: 1px;
  padding: 1px 5px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-radius: 2px;
  color: ${Color(textColor).lighten(0.3).toString()};
  cursor: pointer;
  &:hover {
    background: ${Color('red').lighten(0.9).toString()};
    color: ${Color('red').lighten(0.5).toString()};
  }
`;

export const Icon = styled.div`
  transform: scaleY(0.75) scaleX(0.8);
`;

export const Icon2 = styled.div`
  transform: scale(0.7);
`;

export const AbsoluteDiv = styled.div<any>`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SearchDiv = styled.div<any>`
  position: relative;
  margin-top: -1px;
`;

export const Search = styled.input<any>`
  width: 150px;
  height: 100%;
  height: 21px;
  border-radius: 12px;
  padding-left: 21px;
  padding-right: 24px;
  margin-right: 6px;
  font-size: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color(panelBorderColor).darken(0.1).toString()};
  border: ${(props) => props.isError && '1px solid red'};
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
