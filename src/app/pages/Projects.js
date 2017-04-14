import React from 'react';

import Project from './Project';
import * as ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore';


export default class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.getProjects = this.getProjects.bind(this);
		this.state = {
			projects : ProjectStore.getAll(),
		};
	}

	componentWillMount() {
		ProjectStore.on("change", this.getProjects);
	}

	componentWillUnmount() {
		ProjectStore.removeListener("change", this.getProjects);
	}

	getProjects() {
		this.setState({
			projects: ProjectStore.getAll(),
		});
	}

	createProject() {
		ProjectActions.createProject("Test" + Date.now(),Date.now());
	}

	reloadProjects() {
		ProjectActions.reloadProjects();
	}

	render() {
		const { params } = this.props;		
		const { article } = params;

		const { projects } = this.state;

		const ProjectComponents = projects.map((project) => {
			return <Project key={project.id} title={project.title} description={project.description}/>;
		});

		const myProject = article === undefined ? "My projects" : article;

		return (
			<div>
				<div className="row">
					<div className="col-lg-12">
						<div className="well text-center">
							<h1>{myProject}</h1>
							<input />
							<button onClick={this.createProject.bind(this)} className="btn btn-success">Create</button>
							<button onClick={this.reloadProjects.bind(this)} className="btn btn-warning">Load</button>
						</div>
						<div className="row">{ProjectComponents}</div>
					</div>
				</div>
			</div>
			);
	}
}