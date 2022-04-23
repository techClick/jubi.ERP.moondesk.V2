import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { Sheet } from 'types/types';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import SortButton from 'views/App/components/SortButton/SortButton';
import { selectSelectedSheet, selectSheets, setSelectedSheet } from 'views/App/DataSheet/redux';
import { getDateFormatMobile } from 'views/App/utils/utils';
import { setShowPopup } from '../../redux';
import * as S from './SelectSheetMini.styled';
import { getIndex } from './utils/utils';

const SelectSheetMini = function SelectSheetMini() {
  const [sortSheetsByName, setSortSheetsByName] = useState<boolean>(false);
  const [sortSheetsByDate, setSortSheetsByDate] = useState<boolean>(true);
  const [sortButtonTrans, setSortButtonTrans] = useState<any>({});
  const selectedSheet: number = useAppSelector(selectSelectedSheet);
  const sheets: Sheet[] = useAppSelector(selectSheets);
  const dispatch = useDispatch();
  const sortedSheets: Sheet[] = [...sheets];
  if (sortSheetsByName) {
    sortedSheets.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }
  if (sortSheetsByDate && !sortSheetsByName) sortedSheets.reverse();

  return (
    <S.Container>
      <S.Header>
        SELECT TABLE
        <EscapeButton setShowPopup={setShowPopup} />
      </S.Header>
      <S.SheetsSelect>
        <S.Table>
          <thead>
            <S.TR>
              <S.TH index={1}>
                <S.THDiv>
                  NAME
                  <SortButton
                    isSort={sortSheetsByName}
                    noTrans={sortButtonTrans.sortSheetsByName}
                    sortFunction={() => {
                      setSortSheetsByDate(false);
                      setSortSheetsByName(!sortSheetsByName);
                      setSortButtonTrans({ sortSheetsByDate: true });
                    }}
                  />
                </S.THDiv>
              </S.TH>
              <S.TH>
                <S.THDiv>
                  CREATED
                  <SortButton
                    isSort={sortSheetsByDate}
                    noTrans={sortButtonTrans.sortSheetsByDate}
                    sortFunction={() => {
                      setSortSheetsByName(false);
                      setSortSheetsByDate(!sortSheetsByDate);
                      setSortButtonTrans({ sortSheetsByName: true });
                    }}
                  />
                </S.THDiv>
              </S.TH>
            </S.TR>
          </thead>
        </S.Table>
        <S.SheetsContainer>
          {
            sortedSheets.map((sheet, i) => {
              return (
                <S.Sheet
                  key={`minisheet_${i}`}
                  onClick={() => {
                    dispatch(setSelectedSheet(getIndex(sheet.name)));
                  }}
                  isSelected={getIndex(sheet.name) === selectedSheet}
                  isDark={i % 2 !== 0}
                  i={i}
                >
                  <S.NameCont>
                    {sheet.name}
                  </S.NameCont>
                  <S.CreatedCont>{getDateFormatMobile(sheet.date)}</S.CreatedCont>
                </S.Sheet>
              );
            })
            }
        </S.SheetsContainer>
      </S.SheetsSelect>
    </S.Container>
  );
};

export default SelectSheetMini;
