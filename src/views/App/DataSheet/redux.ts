import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { DisplaySheet, EditStep, SetValues, RowSearch, Search, Sheet, ShowPopup } from 'types/types';
import { getStorageItem, setStorageItem } from '../utils/utils';
import { getAllDisplaySheets, getDisplaySheets } from './utils/utils';

export interface AppState {
  sheets: Sheet[],
  selectedSheet: number,
  showPopup: ShowPopup,
  displaySheets: DisplaySheet[],
  allDisplaySheets: DisplaySheet[],
  isSelectingCell: boolean,
  rowToHighlight: string,
  showSearch: boolean,
  selectedRow: string,
  toChangeIds: number[],
}

const initialState: AppState = {
  sheets: [
    ...JSON.parse(getStorageItem('sheets') || JSON.stringify([])).map((sheet: Sheet) => (
      { ...sheet }
    )),
  ],
  selectedSheet: Number(getStorageItem('selectedsheet') || 0),
  showPopup: {},
  displaySheets: getDisplaySheets(JSON.parse(getStorageItem('sheets') || JSON.stringify([]))),
  allDisplaySheets: getAllDisplaySheets(JSON.parse(getStorageItem('sheets') || JSON.stringify([]))),
  isSelectingCell: false,
  rowToHighlight: '',
  showSearch: true,
  selectedRow: '',
  toChangeIds: [],
};

export const counterSlice = createSlice({
  name: 'dataSheet',
  initialState,
  reducers: {
    setToChangeIds: (state, action: PayloadAction<number[]>) => {
      state.toChangeIds = action.payload;
    },
    setIsSortRow: (state, action: PayloadAction<boolean>) => {
      state.sheets[state.selectedSheet].isSortRow = action.payload;
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    setDisplaySheet: (state, action: PayloadAction<DisplaySheet>) => {
      state.displaySheets[state.selectedSheet] = action.payload;
    },
    setSheet: (state, action: PayloadAction<Sheet>) => {
      state.sheets[state.selectedSheet] = action.payload;
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    setSheets: (state, action: PayloadAction<Sheet[]>) => {
      state.displaySheets = getDisplaySheets(action.payload);
      setStorageItem('sheets', JSON.stringify(action.payload));
      state.sheets = action.payload;
    },
    setSelectedSheet: (state, action: PayloadAction<number>) => {
      setStorageItem('selectedsheet', action.payload);
      state.selectedSheet = action.payload;
    },
    setIsSelectAllColRaw: (state, action: PayloadAction<boolean>) => {
      const sheet = state.sheets[state.selectedSheet];
      // eslint-disable-next-line prefer-destructuring
      sheet.edits.isSelectAllColumns = action.payload;
      sheet.editSteps[0].edits = sheet.edits;
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    setIsSelectAllCol: (state, action: PayloadAction<[string, boolean]>) => {
      const sheet = state.sheets[state.selectedSheet];
      // eslint-disable-next-line prefer-destructuring
      sheet.edits.isSelectAllColumns = action.payload[1];
      const lengthOfEditSteps = sheet.editSteps.length - 1;
      let saveThis = true;
      if (sheet.editSteps[sheet.editStep].name.includes('Set select similar')) {
        sheet.editStep -= 1;
        saveThis = false;
      }
      if (sheet.editStep < lengthOfEditSteps) {
        sheet.editSteps.splice(sheet.editStep + 1, lengthOfEditSteps - sheet.editStep);
      }
      if (saveThis) {
        sheet.editSteps.push(
          {
            name: `Set select similar values (${action.payload[0]})`,
            description: `Set to ${action.payload[1]}`,
            edits: sheet.edits,
            saveThis: true,
          },
        );
      }
      sheet.editStep = sheet.editSteps.length - 1;
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    setRowValues: (state, action: PayloadAction<SetValues>) => {
      const sheet = state.sheets[state.selectedSheet];
      if (!sheet.edits.rowValues) sheet.edits.rowValues = [];
      sheet.edits.rowValues?.push(action.payload);
      const lengthOfEditSteps = sheet.editSteps.length - 1;
      if (sheet.editStep < lengthOfEditSteps) {
        sheet.editSteps.splice(sheet.editStep + 1, lengthOfEditSteps - sheet.editStep);
      }
      sheet.editSteps.push(
        {
          name: `Set global value (${action.payload.row})`,
          description: `Set ${action.payload.ids.length} item(s) to ${action.payload.value}`,
          edits: sheet.edits,
          saveThis: true,
        },
      );
      sheet.editStep = sheet.editSteps.length - 1;
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    setEditStep: (state, action: PayloadAction<number>) => {
      const sheet = state.sheets[state.selectedSheet];
      sheet.edits = sheet.editSteps[action.payload].edits;
      sheet.editStep = action.payload;
      setStorageItem('editstep', action.payload);
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    removeEditSteps: (state, action: PayloadAction<number>) => {
      const sheet = state.sheets[state.selectedSheet];
      const lengthOfEditSteps = sheet.editSteps.length - 1;
      sheet.editSteps.splice(action.payload, lengthOfEditSteps - (action.payload - 1));
      sheet.editStep = sheet.editSteps.length - 1;
      sheet.edits = sheet.editSteps[sheet.editStep].edits;
      setStorageItem('editstep', action.payload);
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setHeaderEdit: (state, action: PayloadAction<[string, string]>) => {
      if (action.payload[0] === action.payload[1]) {
        return;
      }
      const sheet = state.sheets[state.selectedSheet];
      if (!sheet.edits.headers) sheet.edits.headers = {};
      const headersEdit = sheet.edits.headers;
      if (Object.entries(headersEdit || {}).find(([, value]) => value === action.payload[0])) {
        const thisKey = Object.entries(headersEdit || {})
          .find(([, value]) => value === action.payload[0])?.[0];
        if (thisKey === action.payload[1]) {
          delete sheet.edits.headers[thisKey];
        } else {
          // eslint-disable-next-line prefer-destructuring
          sheet.edits.headers[thisKey || ''] = action.payload[1];
        }
      } else {
        // eslint-disable-next-line prefer-destructuring
        sheet.edits.headers[action.payload[0]] = action.payload[1];
      }
      const lengthOfEditSteps = sheet.editSteps.length - 1;
      if (sheet.editStep < lengthOfEditSteps) {
        sheet.editSteps.splice(sheet.editStep + 1, lengthOfEditSteps - sheet.editStep);
      }
      sheet.editSteps.push(
        {
          name: `Change row name (${action.payload[0]})`,
          description: `Change to ${action.payload[1]}`,
          edits: sheet.edits,
          saveThis: true,
        },
      );
      sheet.editStep = sheet.editSteps.length - 1;
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    setSearch: (state, action: PayloadAction<[string, Search | RowSearch, EditStep]>) => {
      const sheet = state.sheets[state.selectedSheet];
      const thisSearch = sheet.edits?.search;
      sheet.edits = {
        ...sheet.edits,
        search: {
          ...thisSearch,
          [action.payload[0]]: action.payload[1],
        },
      };
      const lengthOfEditSteps = sheet.editSteps.length - 1;
      if (sheet.editStep < lengthOfEditSteps) {
        sheet.editSteps.splice(sheet.editStep + 1, lengthOfEditSteps - sheet.editStep);
      }
      if (action.payload[2].isSearch && sheet.editSteps[sheet.editStep]) {
        if (sheet.editSteps[sheet.editStep].name === action.payload[2].name) {
          sheet.editSteps.splice(sheet.editStep, 1);
        }
      }
      if (action.payload[2].saveThis) {
        action.payload[2] = {
          ...action.payload[2],
          edits: sheet.edits,
        };
        sheet.editSteps.push(
          action.payload[2],
        );
      }
      sheet.editStep = sheet.editSteps.length - 1;
      sheet.edits = sheet.editSteps[sheet.editStep].edits;
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
    setIsSelectingCell: (state, action: PayloadAction<boolean>) => {
      state.isSelectingCell = action.payload;
    },
    setRowToHighlight: (state, action: PayloadAction<string>) => {
      state.rowToHighlight = action.payload;
    },
    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
    setSelectedRow: (state, action: PayloadAction<string>) => {
      state.selectedRow = action.payload;
    },
  },
});

export const {
  setSheets, setSheet, setSelectedSheet, setShowPopup, setDisplaySheet, setSearch,
  setIsSelectingCell, setRowToHighlight, setShowSearch, setSelectedRow, setEditStep,
  removeEditSteps, setIsSortRow, setHeaderEdit, setRowValues, setIsSelectAllCol,
  setIsSelectAllColRaw, setToChangeIds,
} = counterSlice.actions;

export const selectSheets = (state: RootState) => state.dataSheet.sheets;
export const selectSelectedSheet = (state: RootState) => state.dataSheet.selectedSheet;
export const selectToChangeIds = (state: RootState) => state.dataSheet.toChangeIds;
export const selectShowPopup = (state: RootState) => state.dataSheet.showPopup;
export const selectDisplaySheets = (state: RootState) => state.dataSheet.displaySheets;
export const selectIsSelectingCell = (state: RootState) => state.dataSheet.isSelectingCell;
export const selectRowToHighlight = (state: RootState) => state.dataSheet.rowToHighlight;
export const selectShowSearch = (state: RootState) => state.dataSheet.showSearch;
export const selectSelectedRow = (state: RootState) => state.dataSheet.selectedRow;

export default counterSlice.reducer;
