import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { Search, Sheet, ShowPopup } from 'types/types';
import { getStorageItem, setStorageItem } from '../utils/utils';

export interface AppState {
  sheets: Sheet[],
  selectedSheet: number,
  showPopup: ShowPopup,
  search: Search,
}

const initialState: AppState = {
  sheets: JSON.parse(getStorageItem('sheets')
    || JSON.stringify([])),
  selectedSheet: Number(getStorageItem('selectedsheet') || 0),
  showPopup: {},
  search: {},
};

export const counterSlice = createSlice({
  name: 'dataSheet',
  initialState,
  reducers: {
    setSheet: (state, action: PayloadAction<Sheet>) => {
      state.sheets[state.selectedSheet] = action.payload;
    },
    setSheets: (state, action: PayloadAction<Sheet[]>) => {
      state.sheets = action.payload;
    },
    setSelectedSheet: (state, action: PayloadAction<number>) => {
      setStorageItem('selectedsheet', action.payload);
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
  setSheets, setSheet, setSelectedSheet, setShowPopup, setSearch,
} = counterSlice.actions;

export const selectSheets = (state: RootState) => state.dataSheet.sheets;
export const selectSelectedSheet = (state: RootState) => state.dataSheet.selectedSheet;
export const selectShowPopup = (state: RootState) => state.dataSheet.showPopup;
export const selectSearch = (state: RootState) => state.dataSheet.search;

export default counterSlice.reducer;
