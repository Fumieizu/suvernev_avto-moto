import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../pages/main/main';
import NotFoundPage from '../pages/not-found-page/not-found-page';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
