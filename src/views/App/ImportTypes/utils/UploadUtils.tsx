import React from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { Sheet } from 'types/types';
import { getStorageItem, setStorageItem } from 'views/App/utils/utils';
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

const saveUploadDatatoSheet = () => (dispatch: Function) => {
  const sheets: Sheet[] = JSON.parse(getStorageItem('sheets') || '{}');
  const sheet: Sheet = parserData;
  setStorageItem('sheets', JSON.stringify({ ...sheets, sheet }));
  dispatch(setSheets(sheets));
  dispatch(setShowPopup({}));
  sendToast();
};

export const getDataFromCSV = (files: any) => (dispatch: Function) => {
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
