import Color from 'color';
import styled, { keyframes } from 'styled-components';
import { containerPadding, panelBorderColor } from 'views/App/styles';
import { minRes } from 'views/styles';

const breatheAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }`;

export const Container = styled.div<any>`
  width: 100%;
  height: 100%;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
`;

export const ButtonDiv = styled.div`
  margin-bottom: ${containerPadding};
`;

export const DarkBG = styled.div`
  background: ${Color(panelBorderColor).darken(0.1).toString()};
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const FilterBoxContainer = styled.div<any>`
  background: ${Color(panelBorderColor).darken(0.4).toString()};
  width: 21%;
  min-width: 210px;
  height: 100%;
  text-align: center;
  position: relative;
  animation-name: ${breatheAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: 1;
  display: flex;
  @media(max-width: ${`${minRes}px`}) {
    display: none;
  }
`;
