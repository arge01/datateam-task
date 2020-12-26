import React from 'react';
import Header from './components/Header';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Home from './router/Home';
import ProjectTwo from './router/ProjectTwo';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/project-2">
					<ProjectTwo/>
				</Route>
				<Route exact path="/">
					<Home/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
