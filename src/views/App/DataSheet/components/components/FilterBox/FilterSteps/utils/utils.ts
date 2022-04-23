import { Sheet } from 'types/types';
import { setSheet } from 'views/App/DataSheet/redux';
import { getSheetFromEdits } from 'views/App/DataSheet/utils/utils';

export const saveEditedSheet = () => (dispatch: Function) => {
  const sheet: Sheet = dispatch(getSheetFromEdits());
  sheet.edits = { isSelectAllColumns: true };
  sheet.editSteps = [{
    name: 'Original',
    description: 'Initial state',
    edits: { isSelectAllColumns: true },
    saveThis: true,
  }];
  sheet.editStep = 0;
  dispatch(setSheet(sheet));
};
