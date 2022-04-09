import { faDiagramPredecessor, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { selectSelectedSheet, selectSheets, setEditStep, setShowPopup } from 'views/App/DataSheet/redux';
import ApplyChanges from './ApplyChanges/ApplyChanges';
import DeleteStep from './DeleteStep/DeleteStep';
import * as S from './FilterSteps.styled';

const FilterSteps = function FilterSteps() {
  const selectedSheet = useAppSelector(selectSelectedSheet);
  const sheet = useAppSelector(selectSheets)[selectedSheet];

  if (!sheet) return null;

  const currentEditStep = sheet.editStep;
  const dispatch = useDispatch();

  if (!sheet) return null;

  const { editSteps } = sheet;

  return (
    <S.Container>
      <S.TopPart>
        <S.Header>
          Steps taken
        </S.Header>
        <S.ApplyPart onClick={() => dispatch(setShowPopup({
          component: <ApplyChanges />,
          exitOnBgClick: true,
        }))}
        >
          <S.Icon>
            <FontAwesomeIcon icon={faDiagramPredecessor} size="2x" />
          </S.Icon>
        </S.ApplyPart>
      </S.TopPart>
      <S.StepsContainer>
        <S.Steps>
          { editSteps?.map((step, i) => (
            <S.Step
              isSelected={currentEditStep === i}
              onClick={() => dispatch(setEditStep(i))}
              isTransparent={i > currentEditStep}
            >
              <S.PartsContainer>
                <S.LabelContainer>
                  <S.StepName>
                    {step.name}
                  </S.StepName>
                  <S.StepDesc>
                    <i>{step.description}</i>
                  </S.StepDesc>
                </S.LabelContainer>
                { i > 0 && (
                  <S.DeleteContainer onClick={() => dispatch(setShowPopup({
                    component: <DeleteStep stepToDelete={i} />,
                    exitOnBgClick: true,
                  }))}
                  >
                    <S.DeleteIcon>
                      <FontAwesomeIcon icon={faXmark} />
                    </S.DeleteIcon>
                  </S.DeleteContainer>
                )}
              </S.PartsContainer>
            </S.Step>
          ))}
        </S.Steps>
      </S.StepsContainer>
    </S.Container>
  );
};

export default FilterSteps;
