import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/auth.utils';
import { createUserProfileDocument } from './firebase/firestore.utils';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }
  unsuscribeFromAuth = null;

  componentDidMount() {
    const setUserState = async userAuth => {
      if (userAuth) {
        try {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snap => {
            this.setState({
              currentUser: {
                id: snap.id,
                ...snap.data()
              }
            });
          });
        } catch (err) {
          console.error('Failed to update user state: ', err);
        }
      } else {
        this.setState({ currentUser: userAuth });
      }
    };
    this.unsuscribeFromAuth = auth.onAuthStateChanged(setUserState);
  }

  componentWillUnmount() {
    if (this.unsuscribeFromAuth) this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
