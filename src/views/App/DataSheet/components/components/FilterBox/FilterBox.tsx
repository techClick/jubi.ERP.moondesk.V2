import React from 'react';
import * as S from './FilterBox.styled';
import FilterSteps from './FilterSteps/FilterSteps';
import UndoTab from './UndoTab/UndoTab';

const FilterBox = function FilterBox() {
  return (
    <S.Container>
      <UndoTab />
      <FilterSteps />
    </S.Container>
  );
};

export default FilterBox;
