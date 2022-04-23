import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import LoadingDialogue from 'views/App/components/LoadingDialogue/Loading';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { selectAllBuild, selectSelectedBuild, setShowPopup } from '../../redux';
import * as S from './RowPicker.styled';
import { saveItemBuild, saveValueBuild } from './utils/utils';

const RowPicker = function RowPicker() {
  const selectedBuild = useAppSelector(selectSelectedBuild);
  const allBuild: any = useAppSelector(selectAllBuild);
  const selectedRows = Object.entries(allBuild).map(([key]) => {
    return allBuild[key];
  });
  const selectedSheet = useAppSelector(selectSelectedSheet);
  const sheet = useAppSelector(selectSheets)[selectedSheet];
  const headerEdit = useAppSelector(selectSheets)[selectedSheet].edits.headers || {};
  const dispatch = useDispatch();

  const getKeys = () => {
    // eslint-disable-next-line consistent-return
    let keys = Object.entries(sheet?.data[0] || {}).map(([key]) => {
      if (headerEdit[key]) return headerEdit[key];
      return key;
    });
    keys = keys.filter((key) => key !== 'md_id_4y4');
    return keys;
  };

  const headerKeys = getKeys();
  const headersType1 = sheet?.data[0] ? headerKeys : [];
  const headers = (sheet && sheet.isSortRow) ? headerKeys.sort() : headersType1;

  const formatBuildSelection: any = {
    item: (rowName: string) => dispatch(saveItemBuild(rowName)),
    value: (rowName: string) => dispatch(saveValueBuild(rowName)),
  };

  return (
    <S.Container>
      {
        headers.map((header, i) => (
          <S.RowContainer
            onClick={() => {
              if (!selectedRows.includes(header)) {
                dispatch(setShowPopup({ component: <LoadingDialogue text="Collecting row" /> }));
                formatBuildSelection[selectedBuild || ''](header);
              }
            }}
            key={`analysisrow_${i}`}
            transparent={!selectedBuild}
            isSelected={selectedRows.includes(header)}
          >
            <S.RowName>{header}</S.RowName>
          </S.RowContainer>
        ))
      }
    </S.Container>
  );
};

export default RowPicker;
