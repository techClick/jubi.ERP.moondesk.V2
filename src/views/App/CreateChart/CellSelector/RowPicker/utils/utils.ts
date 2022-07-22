import { toast } from 'react-toastify';
import { store } from 'redux/store';
import { ChartSheetEntry, Sheet } from 'types/types';
import { setChartSheets } from 'views/App/Analytics/redux';
import { setAllBuild, setChartSheetName1, setShowPopup } from 'views/App/CreateChart/redux';
import { getActualRowName } from 'views/App/DataSheet/utils/utils';

let emptyItemErrors = 0;
let emptyValueErrors = 0;
let numericalErrors = 0;
let nonNumericalErrors = 0;
let hasSelectedItem = false;
let hasSelectedValue = false;
let history;
let sheet: Sheet;

const sendToast = () => (dispatch: Function) => {
  const { allBuild } = store.getState().createChart;
  if (hasSelectedItem) {
    if (emptyItemErrors > 0 && numericalErrors > 0) {
      toast(
        `${emptyItemErrors} empty entry(ies) and ${numericalErrors} numerical entry(ies) for the ITEM field were ignored`,
        { type: 'warning', autoClose: 5000 },
      );
    } else {
      if (emptyItemErrors > 0) {
        toast(
          `${emptyItemErrors} empty entry(ies) for the ITEM field were ignored`,
          { type: 'warning', autoClose: 5000 },
        );
      }
      if (numericalErrors > 0) {
        toast(
          `${numericalErrors} numerical entry(ies) for the ITEM field were ignored`,
          { type: 'warning', autoClose: 5000 },
        );
      }
    }
  } else {
    toast(`No data was collected for the ITEM field.
    Entries from (${allBuild.item}) are empty or numerical`, { type: 'error', autoClose: 5000 });
    dispatch(setAllBuild({ ...allBuild, item: undefined }));
  }
  if (hasSelectedValue) {
    if (emptyValueErrors > 0 && nonNumericalErrors > 0) {
      toast(
        `${emptyValueErrors} empty entry(ies) and ${nonNumericalErrors} non-numerical
        entry(ies) for the VALUE field were ignored`,
        { type: 'warning', autoClose: 5000 },
      );
    } else {
      if (emptyValueErrors > 0) {
        toast(
          `${emptyValueErrors} empty entry(ies) for the VALUE field were ignored`,
          { type: 'warning', autoClose: 5000 },
        );
      }
      if (nonNumericalErrors > 0) {
        toast(
          `${nonNumericalErrors} non-numerical entry(ies) for the VALUE field were ignored`,
          { type: 'warning', autoClose: 5000 },
        );
      }
    }
  } else {
    toast(`No data was collected for the VALUE field.
    Entries from (${allBuild.value}) are empty or non-numerical`, { type: 'error', autoClose: 5000 });
    dispatch(setAllBuild({ ...allBuild, value: undefined }));
  }
  if (!hasSelectedItem && !hasSelectedValue) dispatch(setChartSheetName1(null));
};

const getSufPrefix = (value: string) => {
  const prefix_reg = /^([^0-9^.])+/g;
  const match1 = prefix_reg.exec(value);
  const suffix_reg = /([^0-9^.])+$/g;
  const match2 = suffix_reg.exec(value);
  return [match1?.[0] || '', match2?.[0] || ''];
};

const getNumberAtMiddle = (value: string) => {
  const match = getSufPrefix(value);
  let finalNumber = value.replace(match[0], '');
  finalNumber = finalNumber.replace(match[1], '');
  return finalNumber;
};

const getIsNotAcceptedNumber = (value: string) => {
  let finalNumber = getNumberAtMiddle(value);
  if (finalNumber === '') finalNumber = 'null';
  if (!isNaN(Number(finalNumber))) {
    return false;
  }
  return true;
};

export const formatAllBuild = () => (dispatch: Function) => {
  emptyItemErrors = 0;
  emptyValueErrors = 0;
  numericalErrors = 0;
  nonNumericalErrors = 0;
  hasSelectedItem = false;
  hasSelectedValue = false;
  const { chartType, allBuild } = store.getState().createChart;
  const { selectedSheet, sheets } = store.getState().dataSheet;
  sheet = sheets[selectedSheet];
  const chartSheetData: ChartSheetEntry[] = [];
  const actualItemRowName = getActualRowName(allBuild.item || '');
  const actualValueRowName = getActualRowName(allBuild.value || '');
  sheet.allDisplaySheet.map((entry) => {
    let itemErrorExists = false;
    if (!entry[actualItemRowName]) {
      emptyItemErrors += 1;
      itemErrorExists = true;
    } else if (!isNaN(Number(entry[actualItemRowName])) && !entry[actualItemRowName]?.includes('e')) {
      numericalErrors += 1;
      itemErrorExists = true;
    }
    if (!itemErrorExists) hasSelectedItem = true;
    let valueErrorExists = false;
    if (!entry[actualValueRowName]) {
      emptyValueErrors += 1;
      valueErrorExists = true;
    } else if (getIsNotAcceptedNumber(entry[actualValueRowName] || '')) {
      nonNumericalErrors += 1;
      valueErrorExists = true;
    }
    if (!valueErrorExists) hasSelectedValue = true;
    if (!itemErrorExists && !valueErrorExists) {
      const thisIndex = chartSheetData.findIndex((chartEntry) => {
        return chartEntry.name === entry[actualItemRowName]?.trim();
      });
      if (thisIndex === -1) {
        chartSheetData.push({
          name: entry[actualItemRowName]?.trim() || '',
          value: Number(getNumberAtMiddle(entry[actualValueRowName] || '')),
        });
      } else {
        chartSheetData[thisIndex].value = (Number(chartSheetData[thisIndex].value)
          + Number(getNumberAtMiddle(entry[actualValueRowName] || '')));
      }
    }
  });
  dispatch(setShowPopup({}));
  dispatch(sendToast());
  const match = getSufPrefix(sheet.allDisplaySheet[0][actualValueRowName] || '');
  const chartSheetsLength = store.getState().analytics.chartSheets.length;
  const chartSheet = {
    date: new Date(),
    data: chartSheetData,
    name: `${chartType} ${chartSheetsLength + 1}`,
    chartType,
    prefix: match[0],
    suffix: match[1],
  };
  if (hasSelectedItem && hasSelectedValue) {
    dispatch(setChartSheets(chartSheet));
    history.push('/app/analytics');
  }
};

export const saveItemBuild = (rowName: string, useHistory: any) => (dispatch: Function) => {
  history = useHistory;
  const { allBuild } = store.getState().createChart;
  dispatch(setAllBuild({ ...allBuild, item: rowName }));
  if (allBuild.value) {
    dispatch(formatAllBuild());
  } else {
    dispatch(setShowPopup({}));
  }
};

export const saveValueBuild = (rowName: string, useHistory: any) => (dispatch: Function) => {
  history = useHistory;
  const { allBuild } = store.getState().createChart;
  dispatch(setAllBuild({ ...allBuild, value: rowName }));
  if (allBuild.item) {
    dispatch(formatAllBuild());
  } else {
    dispatch(setShowPopup({}));
  }
};
