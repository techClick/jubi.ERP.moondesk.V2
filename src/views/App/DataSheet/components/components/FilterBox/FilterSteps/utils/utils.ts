import { Sheet } from 'types/types';
import { setSheet } from 'views/App/DataSheet/redux';
import { getSheetFromEdits } from 'views/App/DataSheet/utils/utils';

export const saveEditedSheet = () => (dispatch: Function) => {
  const sheet: Sheet = dispatch(getSheetFromEdits());
  sheet.edits = {};
  sheet.editSteps = [{
    name: 'Original',
    description: 'Initial state',
    edits: {},
    saveThis: true,
  }];
  sheet.editStep = 0;
  dispatch(setSheet(sheet));
};
