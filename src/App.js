import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Users from './views/Users';
import NotFound from './views/NotFound';
import NavBar from './views/NavBar';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<NavBar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/users' component={Users} />} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}
