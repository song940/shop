import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Route, Link
} from "react-router-dom";
import Loadable from "react-loadable";
import Header from './components/Header';
import Navgator from './components/Navgator';
import { faGem, faDotCircle } from '@fortawesome/free-regular-svg-icons'

import './main.css';

const loading = () => <div />

const routes = [
  {
    path: "/",
    exact: true,
    component: Loadable({
      loading,
      loader: () => import('./pages/index')
    })
  },
  {
    path: "/home",
    component: Loadable({
      loading,
      loader: () => import('./pages/home')
    })
  }
];

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const links = [
  { text: 'Index', href: "/", icon: faGem },
  { text: 'Profile', href: "/home", icon: faDotCircle },
];

const App = () => {
  const { } = this.state;
  return (
    <Router>
      <Header title="Shop" />
      <div className="content">
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
      <Navgator links={ links } />
    </Router>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
