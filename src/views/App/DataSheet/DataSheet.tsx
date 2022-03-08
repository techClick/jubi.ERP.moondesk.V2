import React, { useEffect, useState } from 'react';
import { Background } from 'views/styles';
import { useAppSelector } from 'redux/hooks';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectShowPopup, selectSheets, setShowPopup } from './redux';
import SheetParts from './components/SheetParts';

const ImportCols = function ImportCols() {
  const showPopup = useAppSelector(selectShowPopup);
  const showSheet = useAppSelector(selectSheets).length > 0;
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
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
      {showPopup.component && !initialLoad
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
