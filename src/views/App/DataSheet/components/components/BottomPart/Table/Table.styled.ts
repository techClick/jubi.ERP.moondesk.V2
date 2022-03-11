import Color from 'color';
import styled from 'styled-components';
import { tableBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div<any>`
  width: max-content;
  height: 100%;
  max-height: 100%;
  display: flex;
  overflow: auto;
  background: ${Color('white').darken(0.05).toString()};
  padding: 0 0px;
  position: relative;
  z-index: 2;
`;

export const TableDiv = styled.div<any>`
  text-align: left;
  margin-left: -1px;
  width: max-content;
`;

export const Table = styled.table`
  border-bottom: .75px solid ${tableBorderColor};
  border-collapse: collapse;
  text-align: left;
  color: #3b3b3b;
  tr:nth-of-type(1){
    border-top: 0;
  }
`;

export const TH = styled.th<any>`
  background: ${Color('white').darken(0.1).toString()};
  border-bottom: .75px solid ${tableBorderColor};
  border-left: .75px solid ${Color('white').darken(0.15).toString()};
  padding: 5px 
    ${(props) => { return props.isIndex ? '6px' : '9px'; }} 
    4px ${(props) => { return props.isIndex ? '23px' : '9px'; }};
  color: ${Color(textColor).darken(0.1).toString()};
  font-size: 11.8px;
`;

export const TR = styled.tr<any>`
  border-top: .75px solid ${tableBorderColor};
  position: relative;
`;
