import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ShowPopup } from 'types/types';

export interface AppState {
  showPopup: ShowPopup,
}

const initialState: AppState = {
  showPopup: {},
};

export const counterSlice = createSlice({
  name: 'createChart',
  initialState,
  reducers: {
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
  },
});

export const { setShowPopup } = counterSlice.actions;

export const selectShowPopup = (state: RootState) => state.createChart.showPopup;

export default counterSlice.reducer;
