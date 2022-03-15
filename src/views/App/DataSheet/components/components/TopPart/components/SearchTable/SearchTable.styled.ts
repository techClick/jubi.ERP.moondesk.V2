import styled from 'styled-components';
import { tableBorderColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  text-align: left;
  background: white;
  border-bottom: 1px solid ${tableBorderColor};
  position: relative;
`;
