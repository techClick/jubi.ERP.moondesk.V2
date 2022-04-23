import Color from 'color';
import styled from 'styled-components';
import { topBarColor } from 'views/App/styles';

export const Container = styled.div`
`;

export const RowContainer = styled.div<any>`
  background: ${(props) => { return !props.isSelected ? 'white' : 'none'; }};
  height: 30px;
  width: auto;
  border-bottom: 1px solid ${Color('white').darken(0.3).toString()};
  padding-left: 10px;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.transparent || props.isSelected) && 0.3};
  cursor: ${(props) => !props.transparent && 'pointer'};
  &:hover {
    background: ${(props) => !props.transparent && !props.isSelected && Color(topBarColor).lighten(0.6).toString()};
  }
`;

export const RowName = styled.div`
  font-size: 10px;
`;
