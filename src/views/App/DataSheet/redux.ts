import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { DisplaySheet, RowSearch, Search, Sheet, ShowPopup } from 'types/types';
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
      { ...sheet, search: {} }
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
    setSearch: (state, action: PayloadAction<[string, Search | RowSearch]>) => {
      const thisSearch = state.sheets[state.selectedSheet].search;
      state.sheets[state.selectedSheet].search = {
        ...thisSearch,
        [action.payload[0]]: action.payload[1],
      };
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
  setSheets, setSelectedSheet, setShowPopup, setDisplaySheet, setSearch, setIsSortRow,
  setIsSelectingCell, setRowToHighlight, setShowSearch, setSelectedRow,
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
