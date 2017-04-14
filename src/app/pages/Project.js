import React from 'react';

import {Link} from 'react-router'

export default class Project extends React.Component {
	render() {
		const description = this.props.description;
		const id = this.props.id;
		const title = this.props.title;

		return (
			<div className="col-md-4">
	          <h2>{title}</h2>
	          <p>{description}</p>
	          <Link to={"projects/" + id} className="btn btn-primary">View details »</Link>
	        </div>
			);
	}
}