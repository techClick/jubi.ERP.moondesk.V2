import { Sheet } from 'types/types';
import { setSheet } from 'views/App/DataSheet/redux';
import { getSheetFromEdits } from 'views/App/DataSheet/utils/utils';

export const saveEditedSheet = () => (dispatch: Function) => {
  const sheet: Sheet = getSheetFromEdits();
  sheet.edits = {};
  sheet.editSteps = [{
    name: 'Original',
    description: 'Initial state',
    edits: {},
    saveThis: true,
  }];
  sheet.editStep = 0;
  console.log(sheet);
  dispatch(setSheet(sheet));
};
