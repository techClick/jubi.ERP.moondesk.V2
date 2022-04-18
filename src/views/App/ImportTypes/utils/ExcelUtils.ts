export const formatExcelData = (excelData: any) => {
  // eslint-disable-next-line consistent-return
  const acceptedHeaders: any = [];
  const headers = excelData[0].map((data: any) => {
    while (acceptedHeaders.includes(data)) {
      data = `${data}2`;
    }
    acceptedHeaders.push(data);
    return data;
  });
  const formattedData: any = [];
  for (let i = 1; i < excelData.length; i += 1) {
    const entry: any = {};
    for (let j = 0; j < excelData[i].length; j += 1) {
      if (excelData[i][j]) entry[headers[j]] = excelData[i][j];
    }
    formattedData.push(entry);
  }
  return formattedData;
};
