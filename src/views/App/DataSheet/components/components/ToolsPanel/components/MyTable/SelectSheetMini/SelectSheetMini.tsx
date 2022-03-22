import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { selectSheets, setShowPopup } from 'views/App/DataSheet/redux';
import * as S from './SelectSheetMini.styled';

const SelectSheet = function SelectSheet() {
  const sheets1: Sheet[] = useAppSelector(selectSheets);
  const [toolsPanelHeight, settoolsPanelHeight] = useState<string>();
  const sheets = [...sheets1, ...sheets1, ...sheets1, ...sheets1, ...sheets1, ...sheets1, ...sheets1, ...sheets1];

  const gettoolsPanelHeight = () => {
    const toolsPanel = document.getElementById('toolspanel');
    let toolsPanelHeight2 = '0px';
    if (toolsPanel) {
      toolsPanelHeight2 = window.getComputedStyle(toolsPanel).height;
    }
    return `${toolsPanelHeight2}`;
  };

  useEffect(() => {
    settoolsPanelHeight(gettoolsPanelHeight());
  }, []);

  return (
    <S.Container addHeight={toolsPanelHeight}>
      <S.Header>
        SELECT TABLE
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.SheetsContainer>
        {
          sheets.map((sheet) => (
            <S.Sheet>
              {sheet.name}
            </S.Sheet>
          ))
        }
      </S.SheetsContainer>
    </S.Container>
  );
};

export default SelectSheet;
