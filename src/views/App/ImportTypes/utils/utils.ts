import { store } from 'redux/store';
import { getDataManually } from './UploadUtils';

export type ImportInput = {
  [key: string]: string | undefined | false,
  name?: string | false,
}

export const startUpload = function startUpload(
  input: ImportInput,
  setError: Function,
) {
  const errorTmp: ImportInput = {};
  const { sheets } = store.getState().dataSheet;
  if (!input.name) {
    errorTmp.name = 'Required';
  } else if (
    sheets.find((sheet) => sheet.name.toLowerCase() === String(input.name).toLowerCase())) {
    errorTmp.name = 'A table with this name already exists.';
  }
  setError(errorTmp);
  if (!errorTmp.name) {
    const fileUploader = document.getElementById('uploadSheet');
    if (fileUploader) {
      fileUploader.click();
    }
  }
};

export const showEmptySheet = (
  input: ImportInput,
  setError: Function,
  history: any,
) => (dispatch: Function) => {
  const errorTmp: ImportInput = {};
  const { sheets } = store.getState().dataSheet;
  if (!input.name) {
    errorTmp.name = 'Required';
  } else if (
    sheets.find((sheet) => sheet.name.toLowerCase() === String(input.name).toLowerCase())) {
    errorTmp.name = 'A table with this name already exists.';
  }
  setError(errorTmp);
  if (!errorTmp.name) {
    dispatch(getDataManually(input.name || '', history));
  }
};
