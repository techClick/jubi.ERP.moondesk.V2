import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ChartSheet, ShowPopup } from 'types/types';
import { getStorageItem, setStorageItem } from '../utils/utils';

export interface AppState {
  showPopup: ShowPopup,
  chartSheets: ChartSheet[],
}

const initialState: AppState = {
  showPopup: {},
  chartSheets: JSON.parse(getStorageItem('chartSheets') || JSON.stringify([])),
};

export const counterSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setChartSheets: (state, action: PayloadAction<ChartSheet>) => {
      state.chartSheets.push(action.payload);
      setStorageItem('chartSheets', JSON.stringify(state.chartSheets));
    },
  },
});

export const { setShowPopup, setChartSheets } = counterSlice.actions;

export const selectShowPopup = (state: RootState) => state.analytics.showPopup;
export const selectChartSheets = (state: RootState) => state.analytics.chartSheets;

export default counterSlice.reducer;
