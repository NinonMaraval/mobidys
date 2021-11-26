import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  // Link,
} from 'react-router-dom';
import Page from '../Page';

function MainRouter() {
  let { page } = useParams();
  return (
    <div>
      {page}
      <Router>
        <Switch>
          <Route exact path='/'></Route>
          <Route path='/page/:page'>
            <Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MainRouter;
