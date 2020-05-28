import React, { Component } from 'react';
import { Route,Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import ShopPage from './components/pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './components/pages/SignInAnSignUpPage/SignInAndSignUpPage';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends Component{


  unsuscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props
    this.unsuscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else{
       setCurrentUser(userAuth);
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
        <Header/>
        <Switch>
          <Route exact path='/' component= {HomePage} />
          <Route exact path='/shop' component= {ShopPage} />
          <Route 
            exact 
            path='/signin' 
            render={() =>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />

        </Switch>
      </div>
    )
  } 
}
const mapStateToProps = ({ user }) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
