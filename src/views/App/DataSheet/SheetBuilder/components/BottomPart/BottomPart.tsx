import React from 'react';
import MediaQuery from 'react-responsive';
import { bigRes, minRes } from 'views/styles';
import * as S from './BottomPart.styled';
import Table from './Table/Table';

const BottomPart = function BottomPart() {
  return (
    <>
      <S.Container>
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
