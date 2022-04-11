import { store } from 'redux/store';

export const getAllSheetIds = () => {
  const { selectedSheet } = store.getState().dataSheet;
  const displaySheet = store.getState().dataSheet.displaySheets[selectedSheet];
  const ids: number[] = [];
  displaySheet.map((entry) => {
    ids.push(Number(entry.md_id_4y4));
  });
  return ids;
};
