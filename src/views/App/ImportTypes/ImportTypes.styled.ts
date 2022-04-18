import Color from 'color';
import styled, { keyframes } from 'styled-components';
import { panelBorderColor, textColor } from '../styles';

const breatheAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const WhiteCard = styled.div<any>`
  border-radius: 4px;
  background: white;
  width: max-content;
  width: 90%;
  max-width: 300px;
  height: max-content;
  position: absolute;
  text-align: center;
  animation-name: ${breatheAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: 1;
  animation: all 0.05 ease-in;
  border: 1px solid ${Color('white').darken(0.09).toString()};
  right: 50%;
  bottom: 75%;
  padding-bottom: 18px;
  transform: translate(50%, 75%);
`;

export const Header = styled.div<any>`
  font-weight: 700;
  font-size: 14px;
  padding: 12px 0;
  color: ${Color(textColor).lighten(0.2).toString()};
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.13).toString()};
`;

export const IconCont = styled.div<any>`
  width: 100%;
  height: 80px;
  padding: 0 5px;
  margin-top: 25px;
  display: flex;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const DivForKey = styled.div<any>`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const IconCont2 = styled.div`
  background: ${Color(panelBorderColor).lighten(0.17).toString()};
  outline: 1px solid ${Color(panelBorderColor).lighten(0.075).toString()};
  border-radius: 4px;
  width: calc(33.3% - 19px);
  height: 100%;
  margin-left: 15px;
  text-align: center;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  text-decoration: none;
  color: ${textColor};
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0).toString()};
    outline: 1px solid ${Color(panelBorderColor).darken(0.12).toString()};
  }
`;

export const IconContMain = styled.div<any>`
  width: 80%;
  height: 100%;
  margin: auto;
  position: relative;
`;

export const IconDiv = styled.div<any>`
  position: absolute;
  bottom: 60%;
  right: 50%;
  transform: translate(50%, 60%) scaleX(${(props) => { return props.biggerX ? 1.125 : 1; }});
  color: ${(props) => props.color && props.color};
`;

export const IconDesc = styled.div<any>`
  position: absolute;
  bottom: 40%;
  right: 50%;
  transform: translate(50%, calc(40% + 18px)) scaleX(${(props) => { return props.biggerX ? 1.125 : 1; }});
  margin: auto;
  margin-top: 2px;
  font-size: 11px;
  font-weight: 700;
`;

export const Input = styled.input`
  display: none;
`;
