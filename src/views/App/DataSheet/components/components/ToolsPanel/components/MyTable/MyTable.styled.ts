import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: max-content;
  height: max-content;
  text-align: left;
  height: 100%;
`;

export const SheetContainer = styled.div<any>`
  display: flex;
  align-items: center;
  width: max-content;
  min-width: 40px;
  max-width: 150px;
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

export const IconContainer = styled.div`
  width: max-content;
`;

export const IconCont = styled.div`
  transform: scale(1);
`;

export const IconCont1 = styled.div`
  color: ${Color(textColor).lighten(0.4).toString()};
  margin-left: 2px;
  transform: scale(0.75);
`;

export const SheetName = styled.div`
  font-size: 11px;
  font-weight: 400;
  padding-left: 5px;
  margin-top: 1px;
  height: max-content;
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(calc(-100% - 2px));
  display: flex;
  align-items: center;
`;

export const IconContainer1 = styled.div`
  margin-left: 2px;
  margin-right: -2px;
  padding: 1px 4px;
  margin-top: 0px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-radius: 2px;
  height: max-content;
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
  height: max-content;
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
  height: max-content;
  color: ${Color(textColor).lighten(0.3).toString()};
  cursor: pointer;
  &:hover {
    background: ${Color('red').lighten(0.9).toString()};
    color: ${Color('red').lighten(0.5).toString()};
  }
`;

export const Icon = styled.div`
  transform: scaleY(0.95) scaleX(0.95);
`;

export const Icon2 = styled.div`
  transform: scale(0.9);
`;

export const Icon3 = styled.div`
  transform: scale(0.85);
`;
