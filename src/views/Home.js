import React, { Component } from 'react';
import axios from 'axios';
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formPlaceholder: 'add search params',
			searchRes: [],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e) {
		e.preventDefault();
		const res = await axios
			.get('http://jsonplaceholder.typicode.com/users')
			.catch(error => console.log(error));
		this.setState({ users: res.data });

		const deepFilter = text => value => {
			if (!value) return false;
			const valueType = typeof value;

			if (valueType === 'string') {
				return value.toLowerCase().indexOf(text.toLowerCase()) > -1;
			}
			if (Array.isArray(value)) {
				return value.some(deepFilter(text));
			}
			if (valueType === 'object') {
				return Object.values(value).some(deepFilter(text));
			}
			return false;
		};

		if (this.input.value && res.data.length !== 0) {
			this.setState({
				searchRes: res.data.filter(deepFilter(this.input.value)),
			});
		}
	}

	render() {
		const { searchRes, formPlaceholder } = this.state;

		const data = searchRes.map((user, index) => (
			<li key={index} className='list-group-item'>
				{user.name}
			</li>
		));
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className='input-group mb-3'>
						<input
							type='text'
							className='form-control'
							placeholder={formPlaceholder}
							ref={input => (this.input = input)}
						/>
						<div className='input-group-append'>
							<button className='btn btn-primary' type='submit'>
								Button
							</button>
						</div>
					</div>
				</form>
				<ul className='list-group'>{data}</ul>
			</div>
		);
	}
}
