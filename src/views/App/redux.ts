import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { Settings } from 'types/types';

export interface AppState {
  settings: Settings;
}

const initialState: AppState = {
  settings: { isSortRow: [] },
};

type SetSettings = {
  key: string,
  setting: any,
}

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSettings3: (state, action: PayloadAction<SetSettings>) => {
      state.settings = { ...state.settings, [action.payload.key]: action.payload.setting };
    },
  },
});

export const { setSettings3 } = counterSlice.actions;

export const selectSettings3 = (state: RootState) => state.app.settings;

export default counterSlice.reducer;
