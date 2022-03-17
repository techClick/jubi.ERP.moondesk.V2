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
  width: 62px;
  height: 62px;
  padding-top: 1px;
  margin-left: 8px;
  border-radius: 3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0.220px ${Color('white').darken(0.18).toString()};
  color: ${Color(textColor).lighten(0.3).toString()};
  display: inline-block;
  &:hover {
    color: ${textColor};
    background: ${Color('white').darken(0.08).toString()};
    box-shadow: 0px 0px 0px 0.55px ${Color('white').darken(0.28).toString()};
  }
`;

export const IconContainer = styled.div`
  width: max-content;
  margin: auto;
`;

export const Icon = styled.div<any>`
  transform: scale(0.6);
  color: ${(props) => props.color && props.color}
`;

export const ToolName = styled.div`
  font-size: 9.5px;
  font-weight: 400;
  margin: auto;
  margin-top: -8px;
  transform: scaleX(0.925);
  height: max-content;
  width: max-content;
`;
