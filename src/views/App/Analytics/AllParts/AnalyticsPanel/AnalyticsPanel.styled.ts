import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: -3px;
  overflow-y: auto;
  padding-bottom: 15px;
`;

export const NoChartsContainer = styled.div`
  margin: auto;
  margin-top: 9px;
  background: ${Color('white').darken(0.01).toString()};
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  border-radius: 2px;
  color: ${Color(textColor).lighten(0.2).toString()};
`;

export const ChartContainer = styled.div`
  width: 650px;
  height: 550px;
  background: ${Color('white').darken(0.05).toString()};
  box-shadow: 0px 0px 2px 0.220px ${Color(textColor).darken(0.05).toString()};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 15px;
`;

export const ManagePanel = styled.div`
  width: 100%;
  height: 15px;
  background: #bfc6ce;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export const DeleteIconCont = styled.div`
  float: right;
  width: 15px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #afbdcf;
  color: ${Color('red').lighten(0.5).toString()};
  cursor: pointer;
  &:hover {
    color: ${Color('red').lighten(0.1).toString()};
  }
`;

export const DeleteIcon = styled.div`
  transform: scale(0.8);
`;

export const ManageIconCont = styled.div`
  float: right;
  width: 25px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #afbdcf;
`;

export const Header = styled.div`
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 500;
  background: white;
  height: max-content;
`;

export const Chart = styled.div`
  flex: 1;
`;
