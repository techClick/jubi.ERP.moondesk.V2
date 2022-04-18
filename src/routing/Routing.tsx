import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { minRes } from 'views/styles';
import Loader from 'views/Loader/Loader';
import Navigation from 'views/App/Navigation/Navigation';

const HomePage = lazy(() => import('views/Public/HomePage/HomePage'));
const Settings = lazy(() => import('views/App/Settings/Settings'));
const ImportTypes = lazy(() => import('views/App/ImportTypes/ImportTypes'));
const DataSheet = lazy(() => import('views/App/DataSheet/DataSheet'));
const SelectSheet = lazy(() => import('views/App/SelectSheet/SelectSheet'));
const Analytics = lazy(() => import('views/App/Analytics/Analytics'));
// localStorage.clear();
localStorage.setItem('projectId', '1');
(document.body.style as any).zoom = '100%';

const Routing = function Routing() {
  return (
    <Router>
      <Navigation>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/datasheets">
              <>
                <MediaQuery maxWidth={minRes}>
                  <DataSheet />
                </MediaQuery>
                <MediaQuery minWidth={minRes + 0.0001}>
                  <DataSheet />
                </MediaQuery>
              </>
            </Route>
            <Route exact path="/app/settings">
              <Settings />
            </Route>
            <Route exact path="/app/datasheets/importtypes">
              <ImportTypes />
            </Route>
            <Route exact path="/app/datasheets/selectsheet">
              <SelectSheet />
            </Route>
            <Route exact path="/app/analytics">
              <Analytics />
            </Route>
          </Switch>
        </Suspense>
      </Navigation>
    </Router>
  );
};

export default Routing;
