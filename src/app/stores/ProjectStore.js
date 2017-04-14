import { EventEmitter } from 'events';

import Dispatcher from '../Dispatcher';

class ProjectStore extends EventEmitter {
	constructor(props) {
		super(props);
		this.projects = [
			{
				id: 757274000745,
				title: "First project",
				description: "This is my very first project developped during my DUT. It's a very simple Calculator in Assembly",
			},
			{
			    id: 438934351321,
				title: "Second project",
				description: "Second project during my first year of DUT. It was a simple Sudoku game using C",
			},
			{
	            id: 809314750212,
				title: "Third project",
				description: "My Third project during my first year of DUT. A simple Website using HTML, CSS, Javacript and PHP",
			},
			{
	            id: 809314750211,
				title: "Forth project",
				description: "lele",
			},
		];
	}

	createProject(title,description) {
		const id = Date.now();
		this.projects.push({
			id,
			title,
			description,
		});

		this.emit("change");
	}

	getAll() {
		return this.projects;
	}

	receiveProjects(projects) {
		this.projects = projects;
		this.emit("change");
	}

	handleActions(action) {
		switch(action.type) {
			case "CREATE_PROJECT": {
				this.createProject(action.title, action.description);
				break
			}
			case "RECEIVED_PROJECTS": {
				this.receiveProjects(action.projects);
				break
			}
			default: {

			}
		}
	}
}

const projectStore = new ProjectStore();
Dispatcher.register(projectStore.handleActions.bind(projectStore));

export default projectStore;

