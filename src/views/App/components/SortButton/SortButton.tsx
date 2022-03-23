import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './SortButton.styled';

const SelectSheet = function SelectSheet(
  { sortFunction, isSort, noTrans }
  :
  { sortFunction: Function, isSort: boolean, noTrans: boolean },
) {
  return (
    <S.Container
      isSort={isSort}
      onClick={() => sortFunction()}
      noTrans={noTrans}
      id="sortbuttoncont"
    >
      <S.Icon>
        <FontAwesomeIcon icon={faSortUp} size="2x" />
      </S.Icon>
    </S.Container>
  );
};

export default SelectSheet;
