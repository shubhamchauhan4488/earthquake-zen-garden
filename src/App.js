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

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home sourceData={sourceData} />
          </Route>
          <Route path="/profile">
            <Profile profileData={sourceData.profile} />
          </Route>
          <Route path="/detail/:id" >
            <EarthquakeDetail sourceData={sourceData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;