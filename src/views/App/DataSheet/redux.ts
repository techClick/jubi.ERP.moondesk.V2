import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { Sheet, ShowPopup } from 'types/types';
import { getStorageItem, setStorageItem } from '../utils/utils';

export interface AppState {
  sheets: Sheet[],
  selectedSheet: number,
  showPopup: ShowPopup,
}

const initialState: AppState = {
  sheets: JSON.parse(getStorageItem('sheets')
    || JSON.stringify([{}])),
  selectedSheet: Number(getStorageItem('selectedsheet') || 0),
  showPopup: {},
};

export const counterSlice = createSlice({
  name: 'dataSheet',
  initialState,
  reducers: {
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
  },
});

export const { setSheets, setSelectedSheet, setShowPopup } = counterSlice.actions;

export const selectSheets = (state: RootState) => state.dataSheet.sheets;
export const selectSelectedSheet = (state: RootState) => state.dataSheet.selectedSheet;
export const selectShowPopup = (state: RootState) => state.dataSheet.showPopup;

export default counterSlice.reducer;
