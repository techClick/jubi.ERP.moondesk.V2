import React, { useEffect, useState } from 'react';
import { Background } from 'views/styles';
import { useAppSelector } from 'redux/hooks';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectShowPopup, selectSheets, setShowPopup } from './redux';
import SheetParts from './components/SheetParts';

const ImportCols = function ImportCols() {
  const showPopup = useAppSelector(selectShowPopup);
  const sheets = useAppSelector(selectSheets);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setShowPopup({}));
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (sheets.length === 0) {
      history.replace('/app/datasheets/importtypes');
    }
  }, [sheets]);

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
