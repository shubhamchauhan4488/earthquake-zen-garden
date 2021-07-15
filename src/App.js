import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { sourceData } from './sourceData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import EarthquakeDetail from './components/EarthquakeDetail';
import { SourceContext } from './context/sourceContext';

const App = () => {
  const earthquakeData = sourceData.data.features.filter(feat => feat.properties.type === 'earthquake');

  return (
    <>
      <Router>
        <SourceContext.Provider value={{ profileData: sourceData.profile }}>
          <Header />
        </SourceContext.Provider>

        <Switch>
          <SourceContext.Provider value={{ earthquakeData, profileData: sourceData.profile, metadata: sourceData.data.metadata }}>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/detail/:id">
              <EarthquakeDetail />
            </Route>

          </SourceContext.Provider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
