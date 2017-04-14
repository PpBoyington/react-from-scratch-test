import React from 'react';

import Nav from '../components/layout/Nav';

export default class Layout extends React.Component {
	render() {
		const mainSiteTitle = this.props.mainSiteTitle
		return (
			<div className="container">
				<div className="row">
					<Nav history={this.props.history} location={this.props.location} mainSiteTitle={mainSiteTitle}/>
					<div className="container">
						{this.props.children}
					</div>
				</div>
			</div>
			);
	}
}