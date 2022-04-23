import React from 'react';
import LoadingDialogue from 'views/App/components/LoadingDialogue/Loading';
import { DisplaySheet, Search, Sheet, SheetEntry } from 'types/types';
import { store } from 'redux/store';
import { maxValuesinTable } from 'views/App/utils/GlobalUtils';
import { setDisplaySheet, setShowPopup } from '../redux';

export const getActualRowName = (selectedRow: string) => {
  const { selectedSheet, sheets } = store.getState().dataSheet;
  const sheet: Sheet = sheets[selectedSheet];
  let rowName = selectedRow;
  for (const [key, value] of Object.entries(sheet.edits.headers || {})) {
    if (value === selectedRow) {
      rowName = key;
      break;
    }
  }
  return rowName;
};

export const getRowNames = (state?: any) => {
  const { selectedSheet, sheets } = state || store.getState().dataSheet;
  const sheet: Sheet = sheets[selectedSheet];
  const headerEdit = sheet.edits.headers || {};
  const rowNames: any = {};
  Object.entries(sheet?.data[0] || {}).map(([key]) => {
    if (headerEdit[key]) {
      rowNames[key] = headerEdit[key];
    } else {
      rowNames[key] = key;
    }
  });
  return rowNames;
};

export const getDisplaySheet = (sheet: Sheet): DisplaySheet => {
  const displaySheet: DisplaySheet = [];
  for (let i = 0; i < sheet.data.length; i += 1) {
    if (i > maxValuesinTable) break;
    displaySheet.push(sheet.data[i]);
  }
  return displaySheet;
};

export const getSortedSheet = () => {
  const { selectedSheet, sheets } = store.getState().dataSheet;
  let sheet: Sheet = sheets[selectedSheet];
  const { text: searchText }: Search = sheet.edits?.search?.globalSearch || {};
  const rowSearch = sheet.edits?.search?.rowSearch || [];
  const rowValueEdits = sheet.edits?.rowValues || [];
  let sheetData: SheetEntry[] = [...sheet.data];
  rowValueEdits.map((edit) => {
    sheetData.map((entry, i) => {
      if (edit.ids.includes(Number(entry.md_id_4y4))) {
        sheetData[i] = { ...sheetData[i], [edit.row]: edit.value };
      }
    });
  });
  const deleteValueEdits = sheet.edits?.deleteValues || [];
  deleteValueEdits.map((edit) => {
    sheetData = sheetData.filter((entry) => !edit.ids.includes(Number(entry.md_id_4y4)));
  });
  sheet = { ...sheet, data: sheetData };
  let sortedSheet: Sheet = sheet;
  if (searchText && [...searchText].length > 0) {
    const sheetData2 = sheet.data.filter((entry) => (
      // eslint-disable-next-line no-unused-vars
      Object.entries(entry).find(([key, value]) => (
        value?.toString().includes(searchText)
      ))
    ));
    sortedSheet = {
      name: sheet.name,
      data: sheetData2,
      displaySheet: [],
      allDisplaySheet: [],
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

export const getSheetFromEdits = () => (dispatch: Function) => {
  dispatch(setShowPopup({ component: <LoadingDialogue text="Applying Filters" /> }));
  let sheet: Sheet = getSortedSheet();
  const headerEdits = sheet.edits.headers;
  if (Object.entries(headerEdits || {}).length > 0) {
    const sheetData = [...sheet.data];
    sheet = { ...sheet, data: [] };
    sheetData.map((entry) => {
      const newEntry: any = {};
      for (const [key, value] of Object.entries(headerEdits || {})) {
        for (const [key2] of Object.entries(entry)) {
          if (key2 === key) {
            newEntry[value] = entry[key];
          } else {
            newEntry[key2] = entry[key2];
          }
        }
      }
      sheet.data.push(newEntry);
    });
  }
  dispatch(setShowPopup({}));
  return sheet;
};

export const setDisplaySheetFromEdits = () => (dispatch: Function) => {
  const sortedSheet = getSortedSheet();
  dispatch(setDisplaySheet([getDisplaySheet(sortedSheet), sortedSheet.data]));
};
