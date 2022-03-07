import React, { useEffect, useState } from 'react';
import { Background } from 'views/styles';
import { useAppSelector } from 'redux/hooks';
import { getCurrentTab } from 'views/App/utils/utils';
import { useDispatch } from 'react-redux';
import * as S from './DataSheet.styled';
import { selectShowPopup, selectShowSheet, setShowPopup } from './redux';

const ImportCols = function ImportCols() {
  const showPopup = useAppSelector(selectShowPopup);
  const showSheet = useAppSelector(selectShowSheet);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const thisTab = getCurrentTab();
  const dispatch = useDispatch();

  useEffect(() => {
    setInitialLoad(false);
    dispatch(setShowPopup({}));
  }, []);

  return (
    <>
      {showPopup[thisTab] && !initialLoad
        && (
          <>
            <Background onClick={() => (
              showPopup.exitOnBgClick && dispatch(setShowPopup({}))
            )}
            />
            {showPopup.component}
          </>
        )}
      <S.Container>
        <S.WhiteCard id="importColsWhiteCard">
        </S.WhiteCard>
      </S.Container>
    </>
  );
};

export default ImportCols;
