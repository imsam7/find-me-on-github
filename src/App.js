import React from 'react';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory as history } from 'react-router'
import Search from './layouts/Search';
import ProfileContainer from './containers/ProfileContainer';
import FollowersContainer from './containers/FollowersContainer';
import RespositioriesContainer from './containers/RespositioriesContainer';
import FollowingContainer from './containers/FollowingContainer';

class App extends React.Component {
    render() {
        return (
            <div className="main-app">
                <Router history={history}>
                    <Route exact path="/" component={Search} />
                    <Route path="/user/:username" component={ProfileContainer} />
                    <Route exact path='/Repositories/:username' component={RespositioriesContainer} />
                    <Route path='/Followers/:username' component={FollowersContainer} />
                    <Route path='/Following/:username' component={FollowingContainer} />
                </Router>
            </div >
        );
    }
};

export default App;