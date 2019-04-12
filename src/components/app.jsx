import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Logo from './logo';
import HomeContainer from '../containers/home';
import AuthContainer from '../containers/auth';
import CreateContainer from '../containers/create';
import UpdateContainer from '../containers/update';
import Footer from "./footer";
import PageNotFound from './pageNotFound';


export default class App extends Component {
    componentDidMount() {
        this.props.history.push('/');
    }

    render() {
    return (
      <div className="App container">
        <Logo />
          <Switch>
              <Route path='/' exact component={this.props.isAuth === 'success' ? HomeContainer : AuthContainer} />
              <Route path='/create' component={CreateContainer} />
              <Route path='/update/:id' component={UpdateContainer} />
              <Route component={PageNotFound} />
          </Switch>
        <Footer/>
      </div>
    );
  }
}
