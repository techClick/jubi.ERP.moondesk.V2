import { Sheet } from 'types/types';

export type ImportInput = {
  [key: string]: string | undefined | false,
  name?: string | false,
}

export const startUpload = function startUpload(
  sheets: Sheet[],
  input: ImportInput,
  setError: Function,
) {
  const errorTmp: ImportInput = {};
  if (!input.name) {
    errorTmp.name = 'Required';
  } else if (
    sheets.find((sheet) => sheet.name.toLowerCase() === String(input.name).toLowerCase())) {
    errorTmp.name = 'A sheet with this name exists. Use another name.';
  }
  setError(errorTmp);
  if (!errorTmp.name) {
    const fileUploader = document.getElementById('uploadSheet');
    if (fileUploader) {
      fileUploader.click();
    }
  }
};
