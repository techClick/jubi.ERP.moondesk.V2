import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { Background } from 'views/styles';
import AllParts from './AllParts/AllParts';
import * as S from './Analytics.styled';
import { selectShowPopup, setShowPopup } from './redux';

const Analytics = function Analytics() {
  const showPopup = useAppSelector(selectShowPopup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowPopup({}));
  }, []);

  return (
    <S.Container>
      {showPopup.component
        && (
          <>
            <Background onClick={() => {
              if (showPopup.exitOnBgClick) {
                if (showPopup.action) showPopup.action();
                dispatch(setShowPopup({}));
              }
            }}
            />
            {showPopup.component}
          </>
        )}
      <AllParts />
    </S.Container>
  );
};

export default Analytics;
