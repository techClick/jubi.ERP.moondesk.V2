import Color from 'color';
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 600px;
`;

export const ChartBuilderCont = styled.div`
  flex: 1;
  background: ${Color('white').darken(0.5).toString()};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CellSelectorCont = styled.div`
  width: 20%;
  max-width: 250px;
  min-width: 200px;
  height: 100%;
  max-height: 100%;
  background: ${Color('white').darken(0.2).toString()};
`;
