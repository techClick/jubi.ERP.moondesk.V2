import Papa from 'papaparse';
import { Sheet } from 'types/types';
import { getStorageItem, setStorageItem } from 'views/App/utils/utils';
import { setSheet, setShowPopup, setShowSheet } from 'views/App/DataSheet/redux';

export const importType: any = {
  csv: 'CSV',
  excel: 'EXCEL',
  db: 'DATABASE',
  dbf: '.DB',
  hand: 'MANUALLY',
};

const saveUploadDataToSheet = () => (dispatch: Function) => {
  const newSheet: Sheet = JSON.parse(getStorageItem('sheet') || '{}');
  dispatch(setSheet(newSheet));
  dispatch(setShowSheet(true));
  dispatch(setShowPopup({}));
};

export const getDataFromCSV = (files: any) => (dispatch: Function) => {
  Papa.parse(files[0], {
    complete: (result) => {
      setStorageItem('sheet', JSON.stringify(result.data));
      dispatch(saveUploadDataToSheet());
    },
    header: true,
    skipEmptyLines: true,
  });
};
