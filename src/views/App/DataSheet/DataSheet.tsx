import React, { useEffect, useState } from 'react';
import { Background } from 'views/styles';
import { useAppSelector } from 'redux/hooks';
import { useHistory } from 'react-router-dom';
import { getCurrentTab } from 'views/App/utils/utils';
import { useDispatch } from 'react-redux';
import { selectShowPopup, selectShowSheet, setShowPopup } from './redux';
import SheetParts from './components/SheetParts';

const ImportCols = function ImportCols() {
  const showPopup = useAppSelector(selectShowPopup);
  const showSheet = useAppSelector(selectShowSheet);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const thisTab = getCurrentTab();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setInitialLoad(false);
    dispatch(setShowPopup({}));
  }, []);

  if (!showSheet) {
    history.replace('/app/importtypes');
    return null;
  }

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
      <SheetParts />
    </>
  );
};

export default ImportCols;
