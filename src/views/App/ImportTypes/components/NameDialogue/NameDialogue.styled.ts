import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';
import { minRes } from 'views/styles';

export const Container = styled.div`
  background: white;
  width: 200px;
  height: max-content;
  position: fixed;
  bottom: 50%;
  right: 47.5%;
  transform: translate(47.5%, 50%);
  z-index: 5;
  border-radius: 4px;
  @media(max-width: ${`${minRes}px`}) {
    right: 50%;
    transform: translate(50%, 50%);
  }
`;

export const Header = styled.div<any>`
  font-weight: 500;
  font-size: 14px;
  padding-top: 12px;
  color: ${Color(textColor).lighten(0.2).toString()};
  width: 100%;
  text-align: center;
`;

export const NamePart = styled.div<any>`
  width: 40%;
  text-align: left;
  margin: auto;
  width: max-content;
`;

export const InputDiv = styled.div<any>`
  position: relative;
  border-left: ${(props) => props.isError && '1px solid red'};
  margin: auto;
  margin-top: 22px;
  height: max-content;
  border-radius: 2px;
  width: 100%;
`;

export const Input1 = styled.input<any>`
  width: 100%;
  height: 32px;
  margin-left: -.1px;
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

export const MainButtonDiv = styled.div<any>`
  width: max-content;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 15px;
`;
