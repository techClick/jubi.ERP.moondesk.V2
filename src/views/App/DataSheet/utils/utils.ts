import { SearchInterface, Sheet, SheetInterface } from 'types/types';
import { store } from 'redux/store';
import { setSheet } from '../redux';

export const setSheetDataFromSearch = () => (dispatch: Function) => {
  const { text: searchText }: SearchInterface = store.getState().dataSheet.search;
  const { selectedSheet } = store.getState().dataSheet;
  const sheet = store.getState().dataSheet.sheets[selectedSheet];
  const { displayDataOrig: sheetDataOrig }: SheetInterface = sheet;
  if (!searchText || [...searchText].length === 0) {
    const sheetTmp: Sheet = { ...sheet };
    sheetTmp.displayData = sheetDataOrig || [];
    dispatch(setSheet(sheetTmp));
  } else {
    let sortedSheetData = [...sheetDataOrig || []];
    sortedSheetData = sortedSheetData.filter((entry) => (
      // eslint-disable-next-line no-unused-vars
      Object.entries(entry).find(([key, value]) => (
        value?.includes(searchText)
      ))
    ));
    const sheetTmp = { ...sheet };
    sheetTmp.displayData = sortedSheetData;
    dispatch(setSheet(sheetTmp));
  }
};
