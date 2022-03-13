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

export const ScrollDiv = styled.div`
  flex: 1;
  overflow: auto;
`;

export const FlexDiv = styled.div`
  height: 100%;
  max-height: 100%;
  width: 100%;
  display: flex;
  margin: auto;
`;

export const WhiteCard = styled.div<any>`
  background: ${Color(panelBorderColor).darken(0.1).toString()};
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  animation-name: ${breatheAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: 1;
  overflow: hidden;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
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
  @media(max-width: ${`${minRes}px`}) {
    display: none;
  }
`;
