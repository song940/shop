import React from 'react';
import { Link } from 'react-router-dom';
import List from '../../components/List';

import './index.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <List>
        <List.Item><Link to="/order"><i className="fa fa-flask" aria-hidden="true"></i> Order</Link></List.Item>
        <List.Item><Link to="/order"><i className="fa fa-flask" aria-hidden="true"></i> Help</Link></List.Item>
        <List.Item><Link to="/order"><i className="fa fa-flask" aria-hidden="true"></i> About</Link></List.Item>
      </List>
    </div>
  );
};

export default Home;