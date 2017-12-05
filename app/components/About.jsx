var React = require('react');

var About = React.createClass({

	render: function(){
		return (
			<div>
				<div className ="container">
	        		<div className = "row">
						<div className ="col-md-4 offset-md-4">
			                <div className= "img-thumbnail">
			                    <img className= "img-responsive myImage" src = "myimages/me1.jpg"/>
			                </div>
			            </div>
			        </div>
			        <p className = "text-center">I am a Computer Scientist with interest in Web Development, currently working in emerging and wonderful stack called MERN (MongoDB, Express, React & Node JS).</p>
			    </div>
			     <hr/>
			        <p className = "text-center myPara">Site created using VsCode, React And Bootstrap</p>
		    </div>
			
		);
	}
});

module.exports = About;