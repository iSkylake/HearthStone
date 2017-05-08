const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');
const Main = require('Main');

ReactDOM.render(
	<BrowserRouter>
		<Main/>
	</BrowserRouter>,
	document.getElementById('app')
);