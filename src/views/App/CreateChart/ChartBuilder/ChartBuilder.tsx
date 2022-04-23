import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { SelectedBuild } from 'types/types';
import { selectSelectedSheet, selectSheets } from 'views/App/DataSheet/redux';
import { selectAllBuild, selectSelectedBuild, setAllBuild, setChartSheetName1, setSelectedBuild } from '../redux';
import * as S from './ChartBuilder.styled';

const ChartBuilder = function ChartBuilder() {
  const allBuild: any = useAppSelector(selectAllBuild);
  const selectedBuild = useAppSelector(selectSelectedBuild);
  const selectedSheet = useAppSelector(selectSelectedSheet);
  const sheet = useAppSelector(selectSheets)[selectedSheet];
  const dispatch = useDispatch();
  const { chartType }: any = useParams();

  const onSelectBuild = (build: SelectedBuild) => {
    dispatch(setChartSheetName1(sheet.name));
    dispatch(setSelectedBuild(build));
  };

  const onCancelBuild = (build: SelectedBuild) => {
    const otherBuild: string = ['item', 'value'].filter((buildTmp) => buildTmp !== build)[0];
    if (selectedBuild === build) {
      dispatch(setSelectedBuild(null));
    }
    dispatch(setAllBuild({ ...allBuild, [build || '']: undefined }));
    if (!allBuild[otherBuild]) {
      dispatch(setChartSheetName1(null));
    }
  };

  return (
    <S.Container>
      <S.Header>{`New ${chartType.toLowerCase()}`}</S.Header>
      <S.PickerPart>
        <S.ItemPartContainer>
          <S.BlueBorder
            notVisible={selectedBuild !== 'item'}
          >
            {' '}
          </S.BlueBorder>
          <S.ItemShadowBack
            onClick={() => {
              onSelectBuild('item');
            }}
          >
            {' '}
          </S.ItemShadowBack>
          <S.ItemLabelCont>
            { allBuild.item ? (
              <S.Label>{allBuild.item}</S.Label>
            ) : (
              <>Set Item</>
            )}
            <S.XMarkContainer
              onClick={() => {
                onCancelBuild('item');
              }}
            >
              <S.XMark>
                <FontAwesomeIcon icon={faXmark} size="2x" />
              </S.XMark>
            </S.XMarkContainer>
          </S.ItemLabelCont>
        </S.ItemPartContainer>
        <S.ValuePartContainer>
          <S.BlueBorder
            notVisible={selectedBuild !== 'value'}
          >
            {' '}
          </S.BlueBorder>
          <S.ValueShadowBack
            onClick={() => {
              onSelectBuild('value');
            }}
          >
            {' '}
          </S.ValueShadowBack>
          <S.ValueLabelCont>
            { allBuild.value ? (
              <S.Label>{allBuild.value}</S.Label>
            ) : (
              <>Set Value</>
            )}
            <S.XMarkContainer
              onClick={() => {
                onCancelBuild('value');
              }}
            >
              <S.XMark>
                <FontAwesomeIcon icon={faXmark} size="2x" />
              </S.XMark>
            </S.XMarkContainer>
          </S.ValueLabelCont>
        </S.ValuePartContainer>
      </S.PickerPart>
    </S.Container>
  );
};

export default ChartBuilder;
