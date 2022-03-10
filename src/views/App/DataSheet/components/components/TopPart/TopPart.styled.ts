import Color from 'color';
import styled from 'styled-components';
import { tableBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: white;
  width: 100%;
  border-bottom: 1px solid ${tableBorderColor};
`;

export const ThisSheet = styled.div`
  padding-left: 15px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 35px;
  width: 100%;
`;

export const SheetName = styled.div`
  font-size: 14px;
  font-weight: 400;
  max-width: 60%;
  margin-top: -1px;
  color: ${textColor};
`;

export const IconContainer = styled.div`
  margin-left: 2px;
  padding: 1px 6px;
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
  margin-left: 2px;
  padding: 1px 6px;
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
  transform: scaleY(0.85) scaleX(0.9);
`;
