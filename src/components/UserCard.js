import React, { Component } from 'react';

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showTask: false,
		};
	}

	toggleShowTask = () => {
		this.setState({ showTask: !this.state.showTask });
	};

	render() {
		const {
			name,
			username,
			email,
			phone,
			website,
			address,
			company,
		} = this.props.user;

		const fullInfo = (
			<ul
				className='list-group'
				onClick={this.toggleShowTask}
				style={{ cursor: 'pointer' }}
			>
				<li className='list-group-item row'>
					<ul>
						<li>{name}</li>
						<li>{username}</li>
						<li>{email}</li>
						<li>{phone}</li>
						<li>{website}</li>
						<li>{address.city}</li>
						<li>{address.street}</li>
						<li>{company.name}</li>
						<li>{company.bs.split(' ').join(', ')}</li>
						<li>{company.catchPhrase.split(' ').join(', ')}</li>
					</ul>
				</li>
			</ul>
		);

		const shortInfo = (
			<ul
				className='list-group'
				onClick={this.toggleShowTask}
				style={{ cursor: 'pointer' }}
			>
				<li className='list-group-item'>{name}</li>
			</ul>
		);

		return <>{this.state.showTask ? fullInfo : shortInfo}</>;
	}
}
