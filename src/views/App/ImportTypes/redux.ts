import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { SheetEntry, ShowPopup } from 'types/types';
import { ImportInput } from './utils/utils';

export interface AppState {
  showPopup: ShowPopup,
  CSVInput: ImportInput,
  importedNames: string[],
  actualImportedNames: string[],
  importedSheets: SheetEntry[][],
  selectedImports: number[],
}

const initialState: AppState = {
  showPopup: {},
  CSVInput: { name: '' },
  importedNames: [],
  actualImportedNames: [],
  importedSheets: [],
  selectedImports: [],
};

export const counterSlice = createSlice({
  name: 'importTypes',
  initialState,
  reducers: {
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setCSVInput: (state, action: PayloadAction<ImportInput>) => {
      state.CSVInput = action.payload;
    },
    setImportedNames: (state, action: PayloadAction<string[]>) => {
      state.importedNames = action.payload;
    },
    setActualImportedNames: (state, action: PayloadAction<string[]>) => {
      state.actualImportedNames = action.payload;
    },
    setImportedSheets: (state, action: PayloadAction<SheetEntry[][]>) => {
      state.importedSheets = action.payload;
    },
    setSelectedImports: (state, action: PayloadAction<number[]>) => {
      state.selectedImports = action.payload;
    },
  },
});

export const { setShowPopup, setCSVInput, setImportedNames, setActualImportedNames,
  setImportedSheets, setSelectedImports } = counterSlice.actions;

export const selectShowPopup = (state: RootState) => state.importTypes.showPopup;
export const selectCSVInput = (state: RootState) => state.importTypes.CSVInput;
export const selectImportedNames = (state: RootState) => state.importTypes.importedNames;
export const selectActualImportedNames = (state: RootState) => state
  .importTypes.actualImportedNames;
export const selectImportedSheets = (state: RootState) => state.importTypes.importedSheets;
export const selectselectedImports = (state: RootState) => state.importTypes.selectedImports;

export default counterSlice.reducer;
