import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  text-align: left;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: relative;
`;

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 63px;
  padding-top: 2px;
  margin-left: 8px;
  border-radius: 3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  cursor: pointer;
  outline: 1px solid ${Color('white').darken(0.35).toString()};
  color: ${Color(textColor).lighten(0.3).toString()};
  display: inline-block;
  &:hover {
    color: ${textColor};
    background: ${Color('white').darken(0.08).toString()};
  }
`;

export const IconContainer = styled.div`
  width: max-content;
  margin: auto;
`;

export const Icon = styled.div`
  transform: scale(0.6);
`;

export const ToolName = styled.div`
  font-size: 10px;
  font-weight: 400;
  margin: auto;
  margin-top: -6px;
  transform: scaleX(0.925);
  height: max-content;
  width: max-content;
`;
