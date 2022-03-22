import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { bigRes, minRes } from 'views/styles';
import * as S from './TableView.styled';
import Table from './Table/Table';

const BottomPart = function BottomPart() {
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <>
      <S.Container initialLoad={initialLoad} id="tableView">
        <MediaQuery minWidth={bigRes + 0.0001}>
          <Table />
        </MediaQuery>
        <MediaQuery maxWidth={bigRes} minWidth={minRes + 0.0001}>
          <Table />
        </MediaQuery>
        <MediaQuery maxWidth={minRes}>
          <Table />
        </MediaQuery>
      </S.Container>
    </>
  );
};

export default BottomPart;
