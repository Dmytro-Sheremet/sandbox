import React, { Component } from 'react';
import axios from 'axios';
export default class Users extends Component {
	constructor() {
		super();
		this.state = {
			filter: '',
			users: [],
		};
	}

	async componentDidMount() {
		const res = await axios
			.get('http://jsonplaceholder.typicode.com/users')
			.catch(error => console.log(error));
		this.setState({ users: res.data });
	}

	handleChange = event => {
		this.setState({ filter: event.target.value });
	};

	render() {
		const { users, filter } = this.state;

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

		const filteredUsers = users.filter(deepFilter(filter));

		return (
			<div>
				<div className='input-group mb-3'>
					<input
						className='form-control'
						value={filter}
						onChange={this.handleChange}
						type='text'
						placeholder='filter parameters'
					/>
				</div>

				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Skills</th>
						</tr>
					</thead>
					<tbody>
						{filteredUsers.map((user, index) => (
							<tr key={user.id}>
								<th scope='row'>{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.company.bs.split(' ').join(', ')}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
