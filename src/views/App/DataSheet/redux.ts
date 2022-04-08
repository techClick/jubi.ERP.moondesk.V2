import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { DisplaySheet, EditStep, RowSearch, Search, Sheet, ShowPopup } from 'types/types';
import { getStorageItem, setStorageItem } from '../utils/utils';
import { getDisplaySheets } from './utils/utils';

export interface AppState {
  sheets: Sheet[],
  selectedSheet: number,
  showPopup: ShowPopup,
  displaySheets: DisplaySheet[],
  isSelectingCell: boolean,
  rowToHighlight: string,
  showSearch: boolean,
  selectedRow: string,
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
  isSelectingCell: false,
  rowToHighlight: '',
  showSearch: true,
  selectedRow: '',
};

export const counterSlice = createSlice({
  name: 'dataSheet',
  initialState,
  reducers: {
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
    setEditStep: (state, action: PayloadAction<number>) => {
      const thisSheet = state.sheets[state.selectedSheet];
      thisSheet.edits = thisSheet.editSteps[action.payload].edits;
      setStorageItem('editstep', action.payload);
      setStorageItem('sheets', JSON.stringify(state.sheets));
      thisSheet.editStep = action.payload;
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setSearch: (state, action: PayloadAction<[string, Search | RowSearch, EditStep]>) => {
      const thisSheet = state.sheets[state.selectedSheet];
      const thisSearch = thisSheet.edits?.search;
      thisSheet.edits = {
        ...thisSheet.edits,
        search: {
          ...thisSearch,
          [action.payload[0]]: action.payload[1],
        },
      };
      const lengthOfEditSteps = thisSheet.editSteps.length - 1;
      if (thisSheet.editStep < lengthOfEditSteps) {
        thisSheet.editSteps.splice(thisSheet.editStep + 1, lengthOfEditSteps - thisSheet.editStep);
      }
      if (action.payload[2].isSearch && thisSheet.editSteps[thisSheet.editStep]) {
        if (thisSheet.editSteps[thisSheet.editStep].name === action.payload[2].name) {
          thisSheet.editSteps.splice(thisSheet.editStep, 1);
        }
      }
      if (action.payload[2].saveThis) {
        action.payload[2] = {
          ...action.payload[2],
          edits: thisSheet.edits,
        };
        thisSheet.editSteps = [
          ...thisSheet.editSteps,
          action.payload[2],
        ];
      }
      thisSheet.editStep = thisSheet.editSteps.length - 1;
      thisSheet.edits = thisSheet.editSteps[thisSheet.editStep].edits;
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
  setSheets, setSheet, setSelectedSheet, setShowPopup, setDisplaySheet, setSearch, setIsSortRow,
  setIsSelectingCell, setRowToHighlight, setShowSearch, setSelectedRow, setEditStep,
} = counterSlice.actions;

export const selectSheets = (state: RootState) => state.dataSheet.sheets;
export const selectSelectedSheet = (state: RootState) => state.dataSheet.selectedSheet;
export const selectShowPopup = (state: RootState) => state.dataSheet.showPopup;
export const selectDisplaySheets = (state: RootState) => state.dataSheet.displaySheets;
export const selectIsSelectingCell = (state: RootState) => state.dataSheet.isSelectingCell;
export const selectRowToHighlight = (state: RootState) => state.dataSheet.rowToHighlight;
export const selectShowSearch = (state: RootState) => state.dataSheet.showSearch;
export const selectSelectedRow = (state: RootState) => state.dataSheet.selectedRow;

export default counterSlice.reducer;
