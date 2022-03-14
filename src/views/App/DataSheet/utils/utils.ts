import { DisplaySheet, Search, Sheet } from 'types/types';
import { store } from 'redux/store';
import { maxValuesinTable } from 'views/App/utils/GlobalUtils';
import { setDisplaySheet } from '../redux';

export const getDisplaySheet = (sheet: Sheet): DisplaySheet => {
  const displaySheet: DisplaySheet = [];
  for (let i = 0; i < sheet.data.length; i += 1) {
    if (i > maxValuesinTable - 1) break;
    displaySheet.push(sheet.data[i]);
  }
  return displaySheet;
};

export const getDisplaySheets = (sheets: Sheet[]): DisplaySheet[] => {
  const displaySheets: DisplaySheet[] = [];
  sheets.map((sheet) => {
    const displaySheet: DisplaySheet = [];
    for (let i = 0; i < sheet.data.length; i += 1) {
      if (i > maxValuesinTable - 1) break;
      displaySheet.push(sheet.data[i]);
    }
    displaySheets.push(displaySheet);
  });
  return displaySheets;
};

export const setDisplaySheetFromSearch = () => (dispatch: Function) => {
  const { text: searchText }: Search = store.getState().dataSheet.search;
  const { selectedSheet, sheets } = store.getState().dataSheet;
  const sheet: Sheet = sheets[selectedSheet];
  if (!searchText || [...searchText].length === 0) {
    const displaySheet: DisplaySheet = getDisplaySheet(sheet);
    dispatch(setDisplaySheet(displaySheet));
  } else {
    const sortedSheet: Sheet = {
      name: sheet.name,
      data: sheet.data.filter((entry) => (
        // eslint-disable-next-line no-unused-vars
        Object.entries(entry).find(([key, value]) => (
          value?.includes(searchText)
        ))
      )),
    };
    const displaySheet: DisplaySheet = getDisplaySheet(sortedSheet);
    dispatch(setDisplaySheet(displaySheet));
  }
};
