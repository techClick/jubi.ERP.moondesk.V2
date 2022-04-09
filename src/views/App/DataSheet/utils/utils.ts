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

export const getSheetFromEdits = () => {
  const { selectedSheet, sheets } = store.getState().dataSheet;
  let sheet: Sheet = sheets[selectedSheet];
  const headerEdits = sheet.edits.headers;
  const sheetData = [...sheet.data];
  sheet = { ...sheet, data: [] };
  sheetData.map((entry) => {
    for (const [key, value] of Object.entries(headerEdits || {})) {
      entry = { ...entry, [value]: entry[key] };
      delete entry[key];
    }
    sheet.data.push(entry);
  });
  const { text: searchText }: Search = sheet.edits?.search?.plainSearch || {};
  const rowSearch = sheet.edits?.search?.rowSearch || [];
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
      edits: sheet.edits,
      editSteps: sheet.editSteps,
      editStep: sheet.editStep,
    };
  }
  Object.entries(rowSearch).map(([key, value]) => {
    sortedSheet = { ...sortedSheet,
      data: sortedSheet.data.filter((entry) => {
        if (value.text && [...value.text].length > 0) {
          if (value.isInvertSearch) {
            return Object.entries(entry).find(([key2, value2]) => (
              key2 === key && value.text && !value2?.includes(value.text)
            ));
          }
          return Object.entries(entry).find(([key2, value2]) => (
            key2 === key && value.text && value2?.includes(value.text)
          ));
        }
        return true;
      }),
    };
  });
  return sortedSheet;
};

export const setDisplaySheetFromEdits = () => (dispatch: Function) => {
  dispatch(setDisplaySheet(getDisplaySheet(getSheetFromEdits())));
};
