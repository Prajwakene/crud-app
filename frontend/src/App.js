import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import UserList from './components/Users/UserList';
import CreateUser from './components/Users/CreateUser';
import EditUser from './components/Users/EditUser';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/create" exact component={CreateUser} />
          <Route path="/edit/:id" exact component={EditUser} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Registration} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
