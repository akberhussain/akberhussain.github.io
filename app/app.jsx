var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

// var Main = require('./components/Main.jsx');
var Main = require("Main");
var Home = require("Home");
var About = require("About");
var Work = require("Work");

ReactDOM.render(
    <Router history = {hashHistory}>
  		<Route path="/" component = {Main} >
  			
  				<Route path= "about" component={About} />
	  			<Route path= "work" component={Work} />
  			<IndexRoute component={Home}/>
  		
  		</Route>
  	</Router>,
  document.getElementById('app')
);
