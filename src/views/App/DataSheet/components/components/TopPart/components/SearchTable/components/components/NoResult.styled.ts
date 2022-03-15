import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(calc(-100% + 10px));
  width: calc(100% - 20px);
  max-width: 200px;
  z-index: 5;
`;
