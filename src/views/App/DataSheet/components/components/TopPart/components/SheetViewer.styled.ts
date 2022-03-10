import Color from 'color';
import styled from 'styled-components';
import { tableBorderColor, textColor } from 'views/App/styles';
import { bigRes } from 'views/styles';

export const MainContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${tableBorderColor};
  display: flex;
  padding: 15px;
  position: relative;
  padding-bottom: 8px;
`;

export const RelativeContainer = styled.div`
  max-width: 60%;
  height: max-content;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  text-align: left;
  overflow-x: hidden;
  padding-right: 10px;
  padding-bottom: 8px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  max-width: 100%;
  transform: translateX(0.001px);
  @media(max-width: ${`${bigRes}px`}) {
    overflow-x: auto;
  }
  &:hover {
    overflow-x: auto;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 71px;
  background: ${Color('white').darken(0.075).toString()};
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Line2 = styled.div`
  width: 1px;
  height: 71px;
  background: ${Color('white').darken(0.075).toString()};
  position: absolute;
  top: 0px;
  right: -0.5px;
`;

export const SheetContainer = styled.div<any>`
  margin-right: ${(props) => !props.isLast && '10px'};
  display: flex;
  flex-direction: column;
  width: 90px;
  min-width: 90px;
  height: 71px;
  padding-top: 4px;
  border: 1px solid
    ${(props) => {
    return !props.isSelected ? Color('white').darken(0.075).toString()
      : Color(textColor).lighten(0.4).toString();
  }};
  border-radius: 3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  background: ${(props) => props.isSelected && Color('white').darken(0.08).toString()};
  cursor: pointer;
  color: ${(props) => {
    return !props.isSelected ? Color(textColor).lighten(0.3).toString()
      : Color(textColor).darken(0.2).toString();
  }};
  display: inline-block;
  &:hover {
    color: ${textColor};
    background: ${Color('white').darken(0.06).toString()};
  }
`;

export const IconContainer = styled.div`
  width: max-content;
  margin: auto;
`;

export const IconCont1 = styled.div`
  transform: scale(0.8);
`;

export const SheetName = styled.div`
  font-size: 11px;
  font-weight: 400;
  margin: auto;
  margin-top: -4px;
  transform: scaleX(0.925);
  height: max-content;
  width: max-content;
`;

export const SheetContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 65px;
  height: 71px;
  padding-top: 5px;
  margin-left: 10px;
  border-radius: 4px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  cursor: pointer;
  color: ${Color(textColor).lighten(0.3).toString()};
  display: inline-block;
  &:hover {
    color: ${textColor};
    outline: 1px solid ${Color('white').darken(0.25).toString()};
  }
`;
