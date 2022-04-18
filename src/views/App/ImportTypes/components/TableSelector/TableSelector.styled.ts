import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor, topBarColor } from 'views/App/styles';

export const Container = styled.div`
  position: fixed;
  right: 47.5%;
  bottom: 50%;
  transform: translate(47.5%, 50%);
  background: white;
  height: max-content;
  max-height: 700px;
  z-index: 5;
  height: 400px;
  padding-bottom: 35px;
  border-radius: 2px;
`;

export const BorderContainer = styled.div`
  border-bottom: 1px solid ${panelBorderColor};
  display: flex;
  height: 95%;
`;

const panelWidth = '170px';
export const SelectTable = styled.div`
  width: ${panelWidth};
  height: 100%;
`;

export const Header = styled.div`
  font-size: 11px;
  font-weight: 700;
  padding: 10px 12px;
  padding-bottom: 8px;
  margin: auto;
  width: 93%;
  background: ${Color(panelBorderColor).lighten(0.1).toString()};
  @media(max-width: 708px) {
    width: 85.75%;
  }
`;

export const RowsContainer = styled.div<any>`
  margin-left: 12px;
  margin-top: 5px;
  max-height: 90%;
  overflow-y: auto;
  direction: rtl;
`;

export const RowCont = styled.div<any>`
  margin-left: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  direction: ltr;
`;

export const CheckBoxDiv = styled.div<any>`
  margin-left: 0px;
  display: flex;
  width: max-content;
`;

export const CheckBox = styled.input<any>`
  width: 16px;
  height: 16px;
  margin-left: 0;
  background: ${Color(panelBorderColor).darken(0.05).toString()};
`;

export const RowName = styled.div<any>`
  margin-left: 3px;
  margin-top: 1px;
  font-size: 11.2px;
  font-weight: 400;
  color: ${Color(textColor).darken(0.3).toString()};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
  &:hover {
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }
`;

export const SelectedTable = styled.div`
  width: ${panelWidth};
  height: 100%;
  border-left: 1px solid ${panelBorderColor};
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  margin-left: -1px;
`;

export const RowsContainer2 = styled.div<any>`
  max-height: 90%;
  overflow-y: auto;
  direction: rtl;
`;

export const RowCont2 = styled.div<any>`
  padding: 4px 0;
  padding-left: 17px;
  direction: ltr;
  background: ${(props) => props.isSelected && Color(topBarColor).lighten(0.65).toString()};
  cursor: pointer;
  &:hover {
    background: ${(props) => !props.isSelected && Color(topBarColor).lighten(0.83).toString()};
  }
`;

export const RowName2 = styled.div<any>`
  font-size: 11.2px;
  font-weight: 400;
  color: ${Color(textColor).darken(0.3).toString()};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
`;

export const ActualName = styled.div<any>`
  margin-top: -5px;
  font-size: 9px;
  font-weight: 700;
  color: ${Color(textColor).lighten(0.8).toString()};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
`;

export const MainButtonDiv = styled.div<any>`
  height: max-content;
  width: max-content;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const MainButton = styled.div<any>`
  color: ${(props) => {
    return !props.isDisabled ? topBarColor : Color('white').darken(0.3).toString();
  }};
  background: ${(props) => {
    return !props.isDisabled ? Color(topBarColor).lighten(0.87).toString()
      : Color('white').darken(0.1).toString();
  }};
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 7px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 13px;
  width: max-content;
  height: max-content;
  cursor: ${(props) => {
    return !props.isDisabled ? 'pointer' : 'not-allowed';
  }};
  &:hover {
    background: ${(props) => !props.isDisabled && Color(topBarColor).lighten(0.55).toString()};
    color: ${(props) => !props.isDisabled && Color(topBarColor).darken(0.35).toString()};
  }
`;

export const TablePreview = styled.div`
  width: 350px;
  height: 100%;
  @media(max-width: 708px) {
    display: none;
  }
`;
