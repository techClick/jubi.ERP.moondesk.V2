import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div<any>`
  height: max-content;
  width: 300px;
  max-width: calc(100% - 20px);
  max-height: ${`${window.innerHeight - 200}px`};
  background: white;
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  z-index: 5;
  padding-bottom: 10px;
  max-height: 70%;
`;

export const Header = styled.div<any>`
  padding: 12px;
  padding-top: 8px;
  padding-bottom: 6px;
  padding-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
`;

export const SheetsSelect = styled.div<any>`
  margin-top: 21px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  display: flex;
  overflow: auto;
  flex-direction: column;
`;

export const HeadersCont = styled.div<any>`
  padding: 7px 0px;
  padding-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  font-size: 11px;
  font-weight: 500;
  display: flex;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TR = styled.tr`
`;

export const TH = styled.th<any>`
  width: ${(props) => { return props.index === 1 ? '60%' : '40%'; }};
  padding: 5px 0;
  padding-left: ${(props) => { return props.index === 1 ? '10px' : '5px'; }};
  background: ${Color(panelBorderColor).lighten(0.225).toString()};
  border-top: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  border-left: 1px solid ${Color(panelBorderColor).lighten(0.175).toString()};
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  margin: 0;
  font-size: 10px;
  text-align: left;
`;

export const THDiv = styled.div<any>`
  display: flex;
  align-items: center;
  max-height: 12px;
`;

export const TD = styled.td`
`;

export const SheetsContainer = styled.div<any>`
  padding: 1px 0.5px;
  padding-right: 1px;
  padding-top: 0.75px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  flex: 1;
  overflow: auto;
  margin: 0;
  max-height: 100%;
`;

export const Sheet = styled.div<any>`
  padding: 10px 0px;
  padding-left: 11px;
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  width: 100%;
  display: flex;
  max-width: 100%;
  font-size: 10px;
  background: ${(props) => {
    // eslint-disable-next-line no-nested-ternary
    let color = 'white';
    if (props.isDark) color = Color(panelBorderColor).lighten(0.225).toString();
    if (props.isSelected) color = Color(panelBorderColor).lighten(0.1).toString();
    return color;
  }};
  outline: ${(props) => props.isSelected && `1px solid
    ${Color(panelBorderColor).darken(0.3).toString()}`};
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.1).toString()};
    outline: 1px solid ${Color(panelBorderColor).darken(0.3).toString()};
  }
`;

export const NameCont = styled.div<any>`
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 60%;
  padding-right: 15px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const CreatedCont = styled.div<any>`
  width: 40%;
  margin-left: 5px;
  font-weight: 500;
  color: ${Color(textColor).lighten(0.5).toString()}
`;
