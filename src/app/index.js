import React from "react";
import { render } from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './pages/Layout';

import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';

const app = document.getElementById('app');



render(
    <Router history={browserHistory}>
	  	<Route path="/" component={Layout}>
	  		<IndexRoute component={Home}></IndexRoute>
	  		<Route path="aboutMe" name="aboutMe"  component={AboutMe}></Route>
	  		<Route path="projects(/:project)" name="projects" component={Projects}></Route>
	  		<Route path="contact" name="contact" component={Contact}></Route>
	  		<Route path="*" name="noMatch" component={NoMatch}/>
	  	</Route>
    </Router>,
app);