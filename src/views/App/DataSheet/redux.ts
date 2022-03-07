import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { Sheet, ShowPopup } from 'types/types';
import { getNewSheetId } from '../utils/GlobalUtils';
import { getStorageItem, setStorageItem } from '../utils/utils';

export interface AppState {
  sheet: Sheet,
  showSheet: boolean,
  showPopup: ShowPopup,
}

const initialState: AppState = {
  sheet: JSON.parse(getStorageItem(getNewSheetId())
    || JSON.stringify([{ date: new Date(), data: [] }])),
  showSheet: Boolean(getStorageItem('showsheet')),
  showPopup: {},
};

export const counterSlice = createSlice({
  name: 'dataSheet',
  initialState,
  reducers: {
    setSheet: (state, action: PayloadAction<Sheet>) => {
      state.sheet = action.payload;
    },
    setShowSheet: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        setStorageItem('showSheet', 'show');
      } else {
        localStorage.removeItem('showSheet');
      }
      state.showSheet = action.payload;
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
  },
});

export const { setSheet, setShowSheet, setShowPopup } = counterSlice.actions;

export const selectSheet = (state: RootState) => state.dataSheet.sheet;
export const selectShowSheet = (state: RootState) => state.dataSheet.showSheet;
export const selectShowPopup = (state: RootState) => state.dataSheet.showPopup;

export default counterSlice.reducer;
