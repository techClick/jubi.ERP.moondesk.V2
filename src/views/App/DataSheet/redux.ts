import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { DisplaySheet, Search, Sheet, ShowPopup } from 'types/types';
import { getStorageItem, setStorageItem } from '../utils/utils';
import { getDisplaySheets } from './utils/utils';

export interface AppState {
  sheets: Sheet[],
  selectedSheet: number,
  showPopup: ShowPopup,
  search: Search,
  displaySheets: DisplaySheet[],
}

const initialState: AppState = {
  sheets: JSON.parse(getStorageItem('sheets')
    || JSON.stringify([])),
  selectedSheet: 0,
  showPopup: {},
  search: {},
  displaySheets: getDisplaySheets(JSON.parse(getStorageItem('sheets') || JSON.stringify([]))),
};

export const counterSlice = createSlice({
  name: 'dataSheet',
  initialState,
  reducers: {
    setDisplaySheet: (state, action: PayloadAction<DisplaySheet>) => {
      state.displaySheets[state.selectedSheet] = action.payload;
    },
    setSheets: (state, action: PayloadAction<Sheet[]>) => {
      state.displaySheets = getDisplaySheets(action.payload);
      setStorageItem('sheets', JSON.stringify(action.payload));
      state.sheets = action.payload;
    },
    setSelectedSheet: (state, action: PayloadAction<number>) => {
      state.search = {};
      state.selectedSheet = action.payload;
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setSearch: (state, action: PayloadAction<Search>) => {
      state.search = action.payload;
    },
  },
});

export const {
  setSheets, setSelectedSheet, setShowPopup, setSearch, setDisplaySheet,
} = counterSlice.actions;

export const selectSheets = (state: RootState) => state.dataSheet.sheets;
export const selectSelectedSheet = (state: RootState) => state.dataSheet.selectedSheet;
export const selectShowPopup = (state: RootState) => state.dataSheet.showPopup;
export const selectSearch = (state: RootState) => state.dataSheet.search;
export const selectDisplaySheets = (state: RootState) => state.dataSheet.displaySheets;

export default counterSlice.reducer;
