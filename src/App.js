import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Shop from './Componets/Shop/Shop';
import Review from './Componets/Review/Review';
import Manage from './Componets/Manage/Manage';
import NoMatch from './Componets/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/manage">
              <Manage></Manage>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
