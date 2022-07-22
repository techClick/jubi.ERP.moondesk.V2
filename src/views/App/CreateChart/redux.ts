import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ChartBuild, ChartSheet, SelectedBuild, ShowPopup } from 'types/types';

export interface AppState {
  showPopup: ShowPopup,
  chartType: string,
  selectedBuild: SelectedBuild,
  allBuild: ChartBuild,
  chartSheetName1: string | null,
  chartSheet1: ChartSheet,
}

const initialState: AppState = {
  showPopup: {},
  chartType: '',
  selectedBuild: null,
  allBuild: {},
  chartSheetName1: null,
  chartSheet1: {
    date: new Date(),
    data: [],
    chartType: '',
    name: '',
  },
};

export const counterSlice = createSlice({
  name: 'createChart',
  initialState,
  reducers: {
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setChartType: (state, action: PayloadAction<string>) => {
      state.chartType = action.payload;
    },
    setSelectedBuild: (state, action: PayloadAction<SelectedBuild>) => {
      state.selectedBuild = action.payload;
    },
    setAllBuild: (state, action: PayloadAction<ChartBuild>) => {
      state.allBuild = action.payload;
    },
    setChartSheetName1: (state, action: PayloadAction<string | null>) => {
      state.chartSheetName1 = action.payload;
    },
    setChartSheet1: (state, action: PayloadAction<ChartSheet>) => {
      state.chartSheet1 = action.payload;
    },
  },
});

export const {
  setShowPopup, setSelectedBuild, setAllBuild, setChartSheet1,
  setChartSheetName1, setChartType,
} = counterSlice.actions;

export const selectShowPopup = (state: RootState) => state.createChart.showPopup;
export const selectChartType = (state: RootState) => state.createChart.chartType;
export const selectSelectedBuild = (state: RootState) => state.createChart.selectedBuild;
export const selectAllBuild = (state: RootState) => state.createChart.allBuild;
export const selectChartSheet1 = (state: RootState) => state.createChart.chartSheet1;
export const selectChartSheetName1 = (state: RootState) => state.createChart.chartSheetName1;

export default counterSlice.reducer;
