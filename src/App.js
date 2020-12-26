import React from 'react';
import Header from './components/Header';
import Container from './components/container/index';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";

const App = () => {
	return (
		<>
			<Header/>
			<Container/>
		</>
	)
}

export default App;
