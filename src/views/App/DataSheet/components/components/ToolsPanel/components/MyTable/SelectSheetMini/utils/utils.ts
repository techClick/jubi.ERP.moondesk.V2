import { store } from 'redux/store';

export const getIndex = (sheetName: string) => {
  const { sheets } = store.getState().dataSheet;
  return sheets.indexOf(
    sheets.find((sheet) => sheet.name === sheetName) || sheets[0],
  );
};
