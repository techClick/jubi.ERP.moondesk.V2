import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';
import { minRes } from 'views/styles';

export const Container = styled.div`
  width: 185px;
  height: max-content;
  background: white;
  padding: 15px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  box-shadow: 0px 0.7px 1.5px 0.55px ${Color('white').darken(0.31).toString()};
  font-size: 15px;
  color: ${Color(textColor).lighten(0.15).toString()};
  display: flex;
  margin: auto;
  margin-top: 3px;
  border-radius: 4px;
  direction: ltr;
  @media(max-width: ${`${minRes}px`}) {
    width: 77%;
  }
`;

export const LeftSide = styled.div`
  width: 30px;
`;

export const RightSide = styled.div`
  width: calc(100% - 30px);
  height: max-content;
`;

export const IconContainer = styled.div`
  color: #d4a650;
`;
