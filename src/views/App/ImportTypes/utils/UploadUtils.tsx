import React from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { Sheet } from 'types/types';
import { getStorageItem } from 'views/App/utils/utils';
import { store } from 'redux/store';
import { setSelectedSheet, setSheets } from 'views/App/DataSheet/redux';
import { maxValuesinTable } from 'views/App/utils/GlobalUtils';
import LoadingDialogue from 'views/App/components/LoadingDialogue/Loading';
import * as XLSX from 'xlsx';
import { formatExcelData } from './ExcelUtils';
import TableSelector from '../components/TableSelector/TableSelector';
import {
  setActualImportedNames, setImportedNames, setImportedSheets, setSelectedImports,
  setShowPopup,
} from '../redux';

export const importType: any = {
  csv: 'CSV',
  excel: 'EXCEL',
  db: 'DATABASE',
  dbf: '.DB',
  hand: 'MANUALLY',
};

let parserData: any;

const sendToast = function sendToast(): void {
  toast(
    `Successfully added ${parserData.length}/${parserData.length} entries`,
    { type: 'success', autoClose: 5000 },
  );
};

let sheetName = '';
let history;
let sheetAmount = 1;
let uploadAmount = 0;
const saveUploadDatatoSheet = () => (dispatch: Function) => {
  const sheets: Sheet[] = JSON.parse(getStorageItem('sheets') || '[]');
  const sheet: Sheet = {
    name: sheetName,
    data: parserData,
    displaySheet: parserData.filter((entry: any, i: any) => i < maxValuesinTable),
    allDisplaySheet: parserData,
    date: new Date(),
    edits: { isSelectAllColumns: true },
    editSteps: [{
      name: 'Original',
      description: 'Initial state',
      edits: { isSelectAllColumns: true },
      saveThis: true,
    }],
    editStep: 0,
  };
  sheets.push(sheet);
  dispatch(setSheets(sheets));
  sendToast();
  uploadAmount += 1;
  if (uploadAmount === sheetAmount) {
    dispatch(setSelectedSheet(sheets.length - 1));
    dispatch(setShowPopup({}));
    history.push('/app/datasheets');
  }
};

const addIndexToData = () => {
  const parserData2: any = [];
  parserData.map((entry: any, i: any) => {
    entry = { md_id_4y4: i, ...entry };
    parserData2.push(entry);
  });
  parserData = [...parserData2];
};

export const getDataFromCSV = (
  newSheetName: string,
  historyHere: any,
  files: any,
) => (dispatch: Function) => {
  sheetAmount = 1;
  uploadAmount = 0;
  sheetName = newSheetName;
  history = historyHere;
  dispatch(setShowPopup({ component: <LoadingDialogue text="Parsing CSV" /> }));
  Papa.parse(files[0], {
    complete: (result) => {
      parserData = result.data;
      addIndexToData();
      dispatch(saveUploadDatatoSheet());
    },
    header: true,
    skipEmptyLines: true,
  });
};

export const getDataFromExcel = (
  historyHere: any,
  files: any,
) => (dispatch: Function) => {
  uploadAmount = 0;
  sheetName = 'Excel Sheet';
  history = historyHere;
  dispatch(setShowPopup({ component: <LoadingDialogue text="Parsing Excel" /> }));
  const reader = new FileReader();
  reader.readAsArrayBuffer(files[0]);
  reader.onload = () => {
    const excelData = new Uint8Array(reader.result as ArrayBufferLike);
    const workBook = XLSX.read(excelData, { type: 'array' });
    const sheetNames = workBook.SheetNames;
    const sheetData = sheetNames.map((name) => (
      XLSX.utils.sheet_to_json(workBook.Sheets[name], { header: 1 })
    ));
    const proceedWithSave = () => {
      // eslint-disable-next-line no-shadow
      const { actualImportedNames, importedSheets, selectedImports } = store.getState().importTypes;
      const selectedSheets = selectedImports.map((imp) => importedSheets[imp]);
      const selectedNames = selectedImports.map((imp) => actualImportedNames[imp]);
      sheetAmount = selectedSheets.length;
      selectedSheets.map((sheet, i) => {
        sheetName = selectedNames[i];
        parserData = sheet;
        addIndexToData();
        dispatch(saveUploadDatatoSheet());
      });
    };
    const formattedSheetData = sheetData.map((data) => formatExcelData(data));
    dispatch(setImportedNames(sheetNames));
    dispatch(setActualImportedNames(sheetNames));
    dispatch(setImportedSheets(formattedSheetData));
    dispatch(setSelectedImports([]));
    dispatch(setShowPopup({ component: <TableSelector proceedCall={proceedWithSave} /> }));
  };
};

export const getDataManually = (
  newSheetName: string,
  historyHere: any,
) => (dispatch: Function) => {
  sheetAmount = 1;
  uploadAmount = 0;
  sheetName = newSheetName;
  history = historyHere;
  dispatch(setShowPopup({ component: <LoadingDialogue text="Parsing CSV" /> }));
  parserData = [[]];
  addIndexToData();
  dispatch(saveUploadDatatoSheet());
};
