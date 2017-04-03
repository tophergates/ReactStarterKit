import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import HomePage from './components/pages/HomePage';
import BooksPage from './components/pages/BooksPage';
import NotFoundPage from './components/pages/NotFoundPage';

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='/redux' component={BooksPage} />
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  )
}
