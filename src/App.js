import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import ShopPage from './components/pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './components/pages/SignInAnSignUpPage/SignInAndSignUpPage';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';

class App extends Component{

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount(){

    this.unsuscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot =>{
          this.setState({
            currentUser:{

              id: snapShot.id,
              ...snapShot.data()

            }
          })
        })
      }
      else{
        this.setState({currentUser:userAuth})
      }
    }


    )
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render() { 
    return(
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component= {HomePage} />
          <Route exact path='/shop' component= {ShopPage} />
          <Route exact path='/signin' component= {SignInAndSignUpPage} />

        </Switch>
      </div>
    )
  } 
}

export default App;
