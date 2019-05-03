import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './views/Home';
import Documents from './views/Documents';
import NotFound from './views/NotFound';
import NavBar from './views/NavBar';

export default class App extends Component {
	state = {
		data: '',
	};

	async componentDidMount() {
		const res = await axios
			.get('http://jsonplaceholder.typicode.com/users')
			.catch(error => console.log(error));
		this.setState({ data: res.data });
	}

	render() {
		return (
			<Router>
				<NavBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						exact
						path='/documents'
						render={() => <Documents props={this.state.data} />}
					/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

{
	/* <Route
	path='/dashboard'
	render={props => <Dashboard {...props} isAuthed={true} />}
/>; */
}
