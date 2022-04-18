import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectImportedSheets } from 'views/App/ImportTypes/redux';
import * as S from './Table.styled';
import TableBody from './TableBody/TableBody';

const Table = function Table({ previewedSheet }:{ previewedSheet: number }) {
  const selectedSheet = useAppSelector(selectImportedSheets)[previewedSheet];
  const headers = previewedSheet > -1 && Object.entries(selectedSheet[0]).map(([key]) => key);

  return (
    <S.Container id="tableCont">
      {
        previewedSheet > -1 ? (
          <S.TableDiv>
            <S.Table>
              <thead>
                <tr>
                  { (headers || []).map((key) => (
                    <S.TH key={`tmptableheader_${key}`}>
                      <S.THText>{key}</S.THText>
                    </S.TH>
                  ))}
                </tr>
              </thead>
              <TableBody previewedSheet={previewedSheet} />
            </S.Table>
          </S.TableDiv>
        ) : (<>{' '}</>)
      }
    </S.Container>
  );
};

export default Table;
