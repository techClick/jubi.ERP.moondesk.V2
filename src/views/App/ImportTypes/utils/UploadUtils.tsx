import React from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { Sheet } from 'types/types';
import { getStorageItem } from 'views/App/utils/utils';
import { setSheets, setShowPopup } from 'views/App/DataSheet/redux';
import LoadingDialogue from 'views/App/components/LoadingDialogue/Loading';

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
const saveUploadDatatoSheet = () => (dispatch: Function) => {
  const sheets: Sheet[] = JSON.parse(getStorageItem('sheets') || '[]');
  const sheet: Sheet = { name: sheetName, data: parserData };
  sheets.push(sheet);
  dispatch(setSheets(sheets));
  dispatch(setShowPopup({}));
  history.push('/app/datasheets');
  sendToast();
};

export const getDataFromCSV = (
  newSheetName: string,
  historyHere: any,
  files: any,
) => (dispatch: Function) => {
  sheetName = newSheetName;
  history = historyHere;
  dispatch(setShowPopup({ component: <LoadingDialogue text="Parsing CSV" /> }));
  Papa.parse(files[0], {
    complete: (result) => {
      parserData = result.data;
      dispatch(saveUploadDatatoSheet());
    },
    header: true,
    skipEmptyLines: true,
  });
};
