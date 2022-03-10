import styled from 'styled-components';
import { tableBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: white;
  width: 100%;
  border-bottom: 1px solid ${tableBorderColor};
`;

export const SheetName = styled.div`
  padding-top: 10px;
  padding-left: 18px;
  padding-bottom: 10px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  color: ${textColor};
`;
