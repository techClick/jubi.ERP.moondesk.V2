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
  max-width: 500px;
  height: 282px;
  position: absolute;
  text-align: center;
  animation-name: ${breatheAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: 1;
  animation: all 0.05 ease-in;
  padding-bottom: 20px;
  border: 1px solid ${Color('white').darken(0.09).toString()};
  right: 50%;
  bottom: 75%;
  transform: translate(50%, 75%);
`;

export const Header = styled.div<any>`
  font-weight: 700;
  font-size: 19px;
  margin: 20px auto;
  color: ${Color(textColor).lighten(0.2).toString()};
`;

export const NamePart = styled.div<any>`
  width: 40%;
  text-align: left;
  margin: auto;
`;

export const InputDiv = styled.div<any>`
  position: relative;
  border-left: ${(props) => props.isError && '1px solid red'};
  margin-top: 42px;
  height: max-content;
  border-radius: 2px;
`;

export const Input1 = styled.input<any>`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding-left: 8px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: .5px solid ${Color(panelBorderColor).darken(0.05).toString()};
  border: ${(props) => props.isError && '1px solid red'};
`;

export const Required = styled.div`
  display: flex;
  font-size: 12px;
  height: 14px;
  position: absolute;
  bottom: -15px;
  left: -2px;
  color: red;
  width: 150%;
`;

export const Name = styled.div<any>`
  font-weight: 400;
  font-size: 13px;
  width: max-content;
  margin-top: 37px;
  color: ${Color(textColor).lighten(0.5).toString()};
`;

export const Header1 = styled.div<any>`
  font-weight: 400;
  font-size: 12px;
  width: max-content;
  // margin: auto;
  padding-left: 30px;
  // transform: translateX(.vw);
  margin-top: 35px;
  color: ${Color(textColor).lighten(0.55).toString()};
`;

export const IconCont = styled.div<any>`
  width: 100%;
  height: 100px;
  padding: 0 5px;
  margin-top: 12px;
  display: flex;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const IconCont2 = styled.div`
  background: ${Color(panelBorderColor).lighten(0.17).toString()};
  outline: 1px solid ${Color(panelBorderColor).lighten(0.075).toString()};
  border-radius: 4px;
  padding-bottom: 5px;
  width: calc(25% - 19px);
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
  height: 70%;
  margin: auto;
  position: relative;
`;

export const IconDiv = styled.div<any>`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%) scaleX(${(props) => { return props.biggerX ? 1.125 : 1; }});
  color: ${(props) => props.color && props.color};
`;

export const IconDesc = styled.div<any>`
  margin: auto;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 700;
`;

export const Line = styled.hr`
  height: 1px;
  width: 100%;
  position:absolute;
  border: 0;
  background-color: ${Color(panelBorderColor).lighten(0.13).toString()};
  top: 59px;
  left: 0;
`;

export const Input = styled.input`
  display: none;
`;
