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

export const ToolsContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 56px;
  padding-top: 1px;
  margin-left: 8px;
  border-radius: 3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0.220px ${Color('white').darken(0.28).toString()};
  color: ${Color(textColor).lighten(0.3).toString()};
  display: inline-block;
  background: ${(props) => props.isSelected && Color('white').darken(0.08).toString()};
  box-shadow: ${(props) => props.isSelected && '0'};
  outline: ${(props) => props.isSelected
    && `1px solid ${Color('white').darken(0.48).toString()}`};
  &:hover {
    color: ${textColor};
    background: ${Color('white').darken(0.08).toString()};
    box-shadow: 0px 0px 0px 0.55px ${Color('white').darken(0.28).toString()};
  }
`;

export const IconContainer = styled.div`
  width: max-content;
  margin: auto;
  margin-top: -4px;
`;

export const Icon = styled.div<any>`
  transform: scaleX(${(props) => { return props.scaleX ? props.scaleX : 0.45; }})
    scaleY(${(props) => { return props.scaleY ? props.scaleY : 0.45; }});
  color: ${(props) => props.color && props.color};
  margin-top: ${(props) => props.yAdd && props.yAdd};
`;

export const ToolName = styled.div`
  font-size: 9.2px;
  font-weight: 400;
  margin: auto;
  margin-top: -8.5px;
  transform: scaleX(0.925);
  height: max-content;
  width: max-content;
`;
