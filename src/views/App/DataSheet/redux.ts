import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { DisplaySheet, Search, Sheet, ShowPopup } from 'types/types';
import { getStorageItem, setStorageItem } from '../utils/utils';
import { getDisplaySheets } from './utils/utils';

export interface AppState {
  sheets: Sheet[],
  selectedSheet: number,
  showPopup: ShowPopup,
  displaySheets: DisplaySheet[],
}

const initialState: AppState = {
  sheets: [
    ...JSON.parse(getStorageItem('sheets') || JSON.stringify([])).map((sheet: Sheet) => (
      { ...sheet, search: {} }
    )),
  ],
  selectedSheet: Number(getStorageItem('selectedsheet') || 0),
  showPopup: {},
  displaySheets: getDisplaySheets(JSON.parse(getStorageItem('sheets') || JSON.stringify([]))),
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
    setSheets: (state, action: PayloadAction<Sheet[]>) => {
      state.displaySheets = getDisplaySheets(action.payload);
      setStorageItem('sheets', JSON.stringify(action.payload));
      state.sheets = action.payload;
    },
    setSelectedSheet: (state, action: PayloadAction<number>) => {
      setStorageItem('selectedsheet', action.payload);
      state.selectedSheet = action.payload;
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setSearch: (state, action: PayloadAction<[string, Search]>) => {
      const thisSearch = state.sheets[state.selectedSheet].search;
      state.sheets[state.selectedSheet].search = {
        ...thisSearch,
        [action.payload[0]]: action.payload[1],
      };
      setStorageItem('sheets', JSON.stringify(state.sheets));
    },
  },
});

export const {
  setSheets, setSelectedSheet, setShowPopup, setDisplaySheet, setSearch, setIsSortRow,
} = counterSlice.actions;

export const selectSheets = (state: RootState) => state.dataSheet.sheets;
export const selectSelectedSheet = (state: RootState) => state.dataSheet.selectedSheet;
export const selectShowPopup = (state: RootState) => state.dataSheet.showPopup;
export const selectDisplaySheets = (state: RootState) => state.dataSheet.displaySheets;

export default counterSlice.reducer;
