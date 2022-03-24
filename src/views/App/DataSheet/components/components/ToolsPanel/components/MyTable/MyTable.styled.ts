import Color from 'color';
import styled from 'styled-components';
import { textColor, topBarColor } from 'views/App/styles';
import { toolsRes4 } from 'views/styles';

export const Container = styled.div`
  position: relative;
  width: 130px;
  height: 100%;
  @media(max-width: ${`${toolsRes4 + 0.01}px`}) {
    width: 62px;
  }
`;

export const SheetContainer = styled.div<any>`
  width: max-content;
  float: right;
  height: 26px;
  transform: translateY(30.5px);
  padding: 0 5px;
  padding-top: 1px;
  border: 1px solid ${Color('white').darken(0.6).toString()};
  border-radius: 2px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: relative;
  background: ${Color('white').darken(0.08).toString()};
  cursor: pointer;
  color: ${Color(textColor).lighten(0.3).toString()};
  &:hover {
    color: ${textColor};
    background: ${Color('white').darken(0.15).toString()};
  }
`;

export const SheetPart = styled.div<any>`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: max-content;
`;

export const IconCont1 = styled.div`
  color: ${Color(textColor).lighten(1.2).toString()};
  transform: scale(0.4);
`;

export const SheetName = styled.div`
  font-size: 11px;
  font-weight: 400;
  padding-left: 5px;
  margin-top: 1px;
  height: max-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 91px;
  @media(max-width: ${`${toolsRes4 + 0.01}px`}) {
    max-width: 22px;
  }
`;

export const IconContainer0 = styled.div`
  width: 7px;
  margin-left: 2px;
`;

export const IconCont = styled.div`
  //transform: scale(1);
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(calc(-100%));
  display: flex;
  align-items: center;
`;

export const IconContainer2 = styled.div`
  margin-right: -3px;
  padding: 1px 0px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  height: max-content;
  color: ${Color(textColor).lighten(0.5).toString()};
  cursor: pointer;
  &:hover {
    color: ${topBarColor};
  }
`;

export const Icon2 = styled.div`
  transform: scale(1);
`;
