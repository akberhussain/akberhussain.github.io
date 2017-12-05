var React = require('react');
// var NavBar = require('./Navigation.jsx');
var NavBar = require("Navigation")

var Main = React.createClass({

	render: function(){
		return(
			<div>
				<NavBar />
				{ /*Main Component*/}
				{this.props.children}
			</div>
		);
	}

});

module.exports = Main;