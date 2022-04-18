import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import EscapeButton from 'views/App/components/EscapeButton/EscapeButton';
import { selectSheets } from 'views/App/DataSheet/redux';
import {
  selectActualImportedNames, selectImportedNames, selectselectedImports, setActualImportedNames,
  setSelectedImports, setShowPopup,
} from '../../redux';
import Table from './Table/Table';
import * as S from './TableSelector.styled';

const TableSelector = function TableSelector({ proceedCall }:{ proceedCall: Function }) {
  const sheets = useAppSelector(selectSheets);
  const headers0 = useAppSelector(selectImportedNames);
  const headers = useAppSelector(selectActualImportedNames);
  const selectedImports = useAppSelector(selectselectedImports);
  const selectedHeaders = selectedImports.map((index) => headers[index]);
  const existingSheetNames = sheets.map((sheet) => sheet.name);
  const possibleSheetNames = [...existingSheetNames, ...selectedHeaders];
  const [tableNames, setTableNames] = useState<any>(null);
  const [previewedSheet, setPreviewedSheet] = useState<number | null>(null);
  const [previewedSheetFrom, setPreviewedSheetFrom] = useState<number>(0);

  const dispatch = useDispatch();

  const onSelectCheckbox = (index: number) => {
    if (selectedImports.includes(index)) {
      const thisIndex = selectedImports.indexOf(index);
      const newSelectedImports = [...selectedImports];
      newSelectedImports.splice(thisIndex, 1);
      dispatch(setSelectedImports(newSelectedImports));
      setPreviewedSheet(newSelectedImports[newSelectedImports.length - 1]);
      setPreviewedSheetFrom(newSelectedImports.length - 1);
      let newTableNames = { ...tableNames };
      newTableNames = Object.entries(newTableNames).filter(([key]) => {
        return key !== headers[index];
      });
      if (headers0[index] !== headers[index]) {
        const newHeaders = [...headers];
        newHeaders[index] = headers0[index];
        dispatch(setActualImportedNames(newHeaders));
      }
      newTableNames = Object.fromEntries(newTableNames);
      setTableNames(newTableNames);
    } else {
      const newSelectedImports = [...selectedImports, index];
      dispatch(setSelectedImports(newSelectedImports));
      setPreviewedSheet(newSelectedImports[newSelectedImports.length - 1]);
      setPreviewedSheetFrom(newSelectedImports.length - 1);
      let thisSheetName = headers[index];
      while (possibleSheetNames.includes(thisSheetName)) {
        thisSheetName = `${thisSheetName}2`;
      }
      if (thisSheetName !== headers[index]) {
        const newHeaders = [...headers];
        newHeaders[index] = thisSheetName;
        dispatch(setActualImportedNames(newHeaders));
      }
      const newTableNames = { ...tableNames, [thisSheetName]: headers[index] };
      setTableNames(newTableNames);
    }
  };

  return (
    <S.Container>
      <EscapeButton setShowPopup={setShowPopup} />
      <S.BorderContainer>
        <S.SelectTable>
          <S.Header>
            Select tables
          </S.Header>
          <S.RowsContainer>
            { headers0.map((header: any, i) => (
              <S.RowCont key={`tscheckbox_${header}`}>
                <S.CheckBoxDiv>
                  <S.CheckBox
                    type="checkbox"
                    checked={selectedImports.includes(i)}
                    onChange={() => onSelectCheckbox(i)}
                  />
                </S.CheckBoxDiv>
                <S.RowName>{header}</S.RowName>
              </S.RowCont>
            ))}
          </S.RowsContainer>
        </S.SelectTable>
        <S.SelectedTable>
          <S.Header>
            Selected tables
          </S.Header>
          <S.RowsContainer2>
            { selectedHeaders.map((header: any, i) => (
              <S.RowCont2
                isSelected={i === previewedSheetFrom}
                onClick={() => {
                  setPreviewedSheet(selectedImports[i]);
                  setPreviewedSheetFrom(i);
                }}
                key={`tsselected_${header}`}
              >
                <S.RowName2>{tableNames[headers[selectedImports[i]]]}</S.RowName2>
                <S.ActualName>{`as ${headers[selectedImports[i]]}`}</S.ActualName>
              </S.RowCont2>
            ))}
          </S.RowsContainer2>
        </S.SelectedTable>
        <S.TablePreview>
          <S.Header>
            Table preview
          </S.Header>
          <Table previewedSheet={previewedSheet || previewedSheet === 0 ? previewedSheet : -1} />
        </S.TablePreview>
      </S.BorderContainer>
      <S.MainButtonDiv>
        <S.MainButton
          onClick={() => proceedCall()}
          isDisabled={selectedHeaders.length === 0}
        >
          Proceed
        </S.MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default TableSelector;
