import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Users from './users/Users';
import NewTask from './todos/NewTask';
import Navbar from './utils/Navbar';
import Todos from './todos/Todos';
import Home from './Home';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Grid>
          <Route exact path="/" render={Home}/>
          <Route path="/team-members/:userId/todos" component={Todos}/>
          <Route exact path="/team-members/" component={Users}/>
          <Route path="/new-task" component={NewTask}/>
        </Grid>
      </div>
    );
  }
}

export default App;
