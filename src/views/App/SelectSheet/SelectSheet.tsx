import React from 'react';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { setShowPopup } from 'views/App/DataSheet/redux';
import * as S from './SelectSheet.styled';

const SelectSheet = function SelectSheet() {
  return (
    <S.Container>
      <S.Header>
        SELECT TABLE
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.Table>
        <thead>
          <S.TR>
            <S.TH index={1}>NAME</S.TH>
            <S.TH index={2}>ACTIVITY</S.TH>
            <S.TH index={3}>CREATED</S.TH>
            <S.TH index={4}>ACTIONS</S.TH>
          </S.TR>
        </thead>
        <tbody>
          <S.TR>
            
          </S.TR>
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default SelectSheet;
