import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  height: max-content;
  width: 500px;
  max-width: calc(100% - 20px);
  max-height: ${`${window.innerHeight - 200}px`};
  background: white;
  position: fixed;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  border-radius: 2px;
  z-index: 5;
`;

export const Header = styled.div<any>`
  padding: 12px;
  padding-top: 8px;
  padding-bottom: 6px;
  padding-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  font-size: 14px;
  font-weight: 600;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TR = styled.tr`
`;

export const TH = styled.th<any>`
  width: ${(props) => { return props.index === 1 ? '40%' : '22.5%'; }};
  width: ${(props) => props.index === 4 && '15%'};
  padding: 5px 0;
  padding-left: ${(props) => { return props.index === 1 ? '10px' : '5px'; }};
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  border-left: 1px solid ${Color(panelBorderColor).lighten(0.2).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  margin: 0;
  font-size: 10px;
  text-align: left;
`;

export const TD = styled.td`
`;
