import Color from 'color';
import styled from 'styled-components';

export const Conatiner = styled.div`
  padding: 12px;
  padding-top: 0px;
`;

export const ChartContainer = styled.div`
  background: ${Color('white').darken(0.01).toString()};
  width: max-content;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 7px;
  border: 1px solid ${Color('white').darken(0.4).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background: ${Color('white').darken(0.2).toString()};
    border: 1px solid ${Color('white').darken(0.7).toString()};
  }
`;

export const IconConatiner = styled.div<any>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div<any>`
  color: ${(props) => props.color && props.color};
  transform: scale(0.85);
`;

export const Label = styled.div`
  font-size: 10px;
  margin-left: 5px;
`;
