import styled from 'styled-components';
import { bigRes } from 'views/styles';

const getTopPartHeight = (isInitialLoad: boolean): string => {
  const topPart = document.getElementById('toppart');
  if (topPart) {
    const sheetViewerScrollBarHeight = (!isInitialLoad && window.innerWidth > bigRes)
      ? 9 : 0;
    const topPartHeight = topPart.getBoundingClientRect().height;
    return `${topPartHeight - sheetViewerScrollBarHeight}px`;
  }
  return '0px';
};

export const Container = styled.div<any>`
  height: calc(100% - ${(props) => () => getTopPartHeight(props.initialLoad)});
`;
