import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import fbConnection from '../helpers/data/connection';

import MyNavBar from '../components/pages/MyNavBar/MyNavBar';
import Home from '../components/pages/Home/Home';
import EditBirb from '../components/pages/EditBirb/EditBirb';
import NewBirb from '../components/pages/NewBirb/NewBirb';
import SingleBirb from '../components/pages/SingleBirb/SingleBirb';
import Auth from '../components/pages/Auth/Auth';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
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
       <BrowserRouter>
        <React.Fragment>
          <MyNavBar authed={authed}/>
          <div className="container">
            <Switch>
              <PrivateRoute path="/home" component={Home} authed={authed} />
              <PrivateRoute path="/new" component={NewBirb} authed={authed} />
              <PrivateRoute path="/edit/:birbId" component={EditBirb} authed={authed} />
              <PrivateRoute path="/birbs/:birdId" component={SingleBirb} authed={authed} />
              <PublicRoute path="/auth" component={Auth} authed={authed} />
              <Redirect from="*" to="/home" />
            </Switch>
          </div>
        </React.Fragment>
       </BrowserRouter>
       </div>
    );
  }
}

export default App;
