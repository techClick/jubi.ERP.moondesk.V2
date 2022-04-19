import { store } from 'redux/store';

export const getAllSheetIds = () => {
  const { selectedSheet } = store.getState().dataSheet;
  const { allDisplaySheet } = store.getState().dataSheet.sheets[selectedSheet];
  const ids: number[] = [];
  allDisplaySheet.map((entry) => {
    ids.push(Number(entry.md_id_4y4));
  });
  return ids;
};
