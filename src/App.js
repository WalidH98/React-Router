
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import "./App.css"

class App extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <BrowserRouter>
              <NavLink exact to="/" activeClassName="selected"> Accueil </NavLink>
              <NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </BrowserRouter>
            </header>
          </div>
            
        );
    }
}

export default App;