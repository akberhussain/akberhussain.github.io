var React = require('react');
var NavBar = React.createClass({

	render: function(){
		return (
			<div>
				<div className="container navContent" >
				  <div className="row justify-content-md-center">			    
				    <div className="col col-md-8">

				    	<nav className="navbar navbar-expand-lg navbar-light bg-light">
								  <a className="navbar-brand" href="#/">Akber Hussain</a>
								  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								    <span className="navbar-toggler-icon"></span>
								  </button>

								  <div className="collapse navbar-collapse" id="navbarSupportedContent">
								    <ul className="navbar-nav mr-auto">
								      <li className="nav-item ">
								        <a className="nav-link" href="#/">Home</a>
								      </li>
								      <li className="nav-item">
								        <a className="nav-link" href="#/about">About</a>
								      </li>
								      <li className="nav-item">
								        <a className="nav-link" href="#/work">Work</a>
								      </li>
								      <li className="nav-item">
								        <a className="nav-link" href="https://github.com/akberhussain" target='_blank'>Github</a>
								      </li>
								    </ul>
								  </div>
								</nav>

				    </div>
				  </div>
				</div>
				
			</div>
		);
	}
});

module.exports = NavBar;