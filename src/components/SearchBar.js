import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<form className='form-inline'>
				<div className='form-group mx-sm-3 mb-2'>
					<input
						type='document'
						className='form-control'
						placeholder='Document'
					/>
				</div>
				<button type='submit' className='btn btn-primary mb-2'>
					Search
				</button>
			</form>
		);
	}
}
