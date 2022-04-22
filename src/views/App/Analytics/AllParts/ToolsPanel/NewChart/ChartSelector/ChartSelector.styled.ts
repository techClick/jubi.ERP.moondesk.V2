import Color from 'color';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 5;
  width: calc(100% - 20px);
  max-width: 300px;
  height: calc(100% - 20px);
  max-height: 500px;
  bottom: 50%;
  right: 47.5%;
  transform: translate(47.5%, 50%);
  background: ${Color('white').darken(0.1).toString()};
  overflow: auto;
  overflow-x: hidden;
  border-radius: 2px;
`;

export const Header = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${Color('white').darken(0.3).toString()};
  font-size: 12px;
  font-weight: 700;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  background: white;
`;

export const ChartGroup = styled.div`
  border-bottom: 1px solid ${Color('white').darken(0.3).toString()};
  padding: 12px;
  width: auto;
  background: white;
  position: relative;
  cursor: pointer;
`;

export const Label = styled.div`
  font-size: 11px;
  font-weight: 500;
`;

export const IconConatiner = styled.div<any>`
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5px;
  right: 5px;
  transform: rotate(${(props) => props.rotate && '180deg'});
  transition: all 0.2s linear;
`;

export const Icon = styled.div`
  transform: scale(0.7);
`;

export const ChartContainer = styled.div<any>`
  height: ${(props) => { return props.showThis ? '180px' : '0px'; }};
  transition: all 0.2s linear;
  width: 80%;
  overflow: hidden;
`;
