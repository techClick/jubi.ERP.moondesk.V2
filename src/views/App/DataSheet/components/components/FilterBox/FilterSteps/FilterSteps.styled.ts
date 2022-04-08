import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div<any>`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const TopPart = styled.div<any>`
  display: flex;
`;

export const Header = styled.div<any>`
  color: ${Color('white').darken(0.25).toString()};// #3720b9;
  padding-left: 5px;
  padding-top: 10px;
  font-size: 11px;
`;

export const ApplyPart = styled.div<any>`
  margin-left: auto;
  height: 30px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Color(textColor).darken(0.2).toString()};
  cursor: pointer;
  &:hover {
    color: ${Color(textColor).darken(0.5).toString()}; 
  }
`;

export const Icon = styled.div<any>`
  margin-top: -2px;
  transform: scale(0.7);
`;

export const StepsContainer = styled.div<any>`
  flex: 1;
  background: ${Color(panelBorderColor).darken(0.6).toString()};
  border: 1px solid ${Color(panelBorderColor).darken(0.8).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const Steps = styled.div<any>`
  max-height: 100%;
`;

export const Step = styled.div<any>`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${Color('white').darken(0.625).toString()};
  border: ${(props) => props.isSelected
    && `1px solid ${Color('white').darken(0.5).toString()}`};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.isSelected && Color(panelBorderColor).darken(0.525).toString()};
  opacity: ${(props) => props.isTransparent && 0.4};
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).darken(0.525).toString()};
    opacity: 1;
  }
`;

export const PartsContainer = styled.div<any>`
  width: 100%;
  height: 70%;
  text-align: left;
  padding-left: 8px;
  display: flex;
`;

export const LabelContainer = styled.div<any>`
  width: 100%;
  height: 70%;
  text-align: left;
  padding-left: 8px;
`;

export const StepName = styled.div<any>`
  margin-top: 1px;
  color: ${Color('white').darken(0.3).toString()};// #3720b9;
  font-size: 9px;
`;

export const StepDesc = styled.div<any>`
  margin-top: -1px;
  color: ${Color('white').darken(0.4).toString()};// #3720b9;
  font-size: 8px;
  text-decoration: italic;
`;

export const DeleteContainer = styled.div<any>`
  margin-left: auto;
  margin-top: auto;
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Color('white').darken(0.4).toString()};// #3720b9;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    color: ${Color('red').lighten(0.5).toString()};
  }
`;

export const DeleteIcon = styled.div<any>`
  transform: scale(0.5);
`;
