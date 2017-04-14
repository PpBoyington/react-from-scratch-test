import React from 'react';

export default class Home extends React.Component {
	render() {
		const mainSiteTitle = "Testing ReactJS";

		return (
			<div>
			<h1>Welcome to my ReactJS testing website !</h1>
			<div className="col-md-7">
				<p>This website was created in order to learn the ReactJS Framework. It is still under construction so you might get lost and end up in blank pages. 
				In case that happens, click the Home button which is with the message "{mainSiteTitle}".</p>
			</div>
			</div>
			);
	}
}