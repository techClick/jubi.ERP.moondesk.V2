import Color from 'color';
import styled from 'styled-components';
import { topBarColor } from 'views/App/styles';

export const Container = styled.div`
  background: ${Color('white').darken(0.3).toString()};
  width: 330px;
  height: 190px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background: ${Color('white').darken(0.1).toString()};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 10px;
  font-size: 11px;
  font-weight: 500;
`;

export const PickerPart = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PickerContainer = styled.div`
  display: flex;
`;

export const ItemPartContainer = styled.div`
  border: 4px solid ${Color('grey').lighten(0).toString()};
  border-radius: 4px;
  height: 110px;
  width: 140px;
  position: relative;
`;

export const BlueBorder = styled.div<any>`
  height: 100%;
  width: 100%;
  border: 3px solid ${Color(topBarColor).lighten(0).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  pointer-events: none;
  display: ${(props) => props.notVisible && 'none'};
`;

export const ItemShadowBack = styled.div`
  background: ${Color('grey').lighten(0).toString()};
  position: absolute;
  top: 0;
  z-index: 0;
  opacity: 0.2;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const ItemLabelCont = styled.div`
  font-size: 10px;
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  background: ${Color('grey').lighten(0.1).toString()};
  width: max-content;
  height: max-content;
  padding: 5px 7px;
  padding-right: 3px;
  border-radius: 3px;
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90px;
  font-size: 11px;
  font-weight: 700;
  margin-top: .5px;
`;

export const XMarkContainer = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const XMark = styled.div`
  transform: scale(0.6);
`;

export const ValuePartContainer = styled.div`
  border: 4px solid ${Color('#DC4D18').lighten(0.3).toString()};
  border-radius: 4px;
  height: 110px;
  width: 140px;
  position: relative;
  margin-left: 1px;
`;

export const ValueShadowBack = styled.div`
  background: ${Color('#DC4D18').lighten(0).toString()};
  position: absolute;
  top: 0;
  z-index: 0;
  opacity: 0.2;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const ValueLabelCont = styled.div`
  font-size: 10px;
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  background: ${Color('#DC4D18').lighten(0.3).toString()};
  width: max-content;
  height: max-content;
  padding: 5px 7px;
  padding-right: 3px;
  border-radius: 3px;
  display: flex;
  align-items: center;
`;
