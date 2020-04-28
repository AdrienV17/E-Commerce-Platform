import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import ShopPage from './components/pages/ShopPage/ShopPage';
import Header from './components/Header/Header';

class App extends Component{
  render() {
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component= {HomePage} />
          <Route exact path='/shop' component= {ShopPage} />
          
        </Switch>
      </div>
    )
  } 
}

export default App;
