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
  const { selectedSheet, sheets } = store.getState().dataSheet;
  const sheet: Sheet = sheets[selectedSheet];
  const { text: searchText }: Search = sheet.search?.plainSearch || {};
  const rowSearch = sheet.search?.rowSearch || [];
  let sortedSheet: Sheet = sheet;
  if (searchText && [...searchText].length > 0) {
    sortedSheet = {
      name: sheet.name,
      data: sheet.data.filter((entry) => (
        // eslint-disable-next-line no-unused-vars
        Object.entries(entry).find(([key, value]) => (
          value?.includes(searchText)
        ))
      )),
      date: sheet.date,
    };
  }

  Object.entries(rowSearch).map(([key, value]) => {
    sortedSheet = { ...sortedSheet,
      data: sortedSheet.data.filter((entry) => {
        return Object.entries(entry).find(([key2, value2]) => (
          key2 === key && value2?.includes(value)
        ));
      }),
    };
  });
  dispatch(setDisplaySheet(getDisplaySheet(sortedSheet)));
};
