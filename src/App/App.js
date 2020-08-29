import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import MyNavBar from '../components/pages/MyNavBar/MyNavBar';
import Home from '../components/pages/Home/Home';
import EditBirb from '../components/pages/EditBirb/EditBirb';
import NewBirb from '../components/pages/NewBirb/NewBirb';
import SingleBirb from '../components/pages/SingleBirb/SingleBirb';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNavBar authed={authed} />
        <Home />
        <EditBirb />
        <NewBirb />
        <SingleBirb />
      </div>
    );
  }
}

export default App;
