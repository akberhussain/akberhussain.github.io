var React = require('react');

var Contact = React.createClass({

	render: function(){
		return (
			<div>
				<div className ="container">
	        		<div className = "row">
						<div className ="col-md-4 offset-md-2">
			                <div className= "img-thumbnail">
			                    <img className= "img-responsive myImage" src = "myimages/me.jpg"/>
			                </div>
			            </div>
			            <div className ="col-md-4">
			                <div className="media-body">
			                	<br/>
							    <h3 className="mt-0">Akber Hussain</h3>
			                	<br/>
							    <h5 className="mt-0">Contact</h5>
							    <p>03003083099</p>
							    <h5 className="mt-0">Address</h5>
							    <p>House# C119, Sharif Square Hussainabad, Hyderabad.</p>
							    <h5 className="mt-0">Facebook</h5>
							    <a className = "style-1 myStyle" href = "https://www.facebook.com/akberlaghari" target = '_blank'>Akber Hussain</a>
							    <h5 className="mt-0">Github</h5>
							    <a className = "style-1 myStyle" href = "https://www.github.com/akberhussain" target = '_blank'>Akber Hussain</a>
							 </div>
			            </div>
			        </div>
			    </div>
			     <hr/>
			        <p className = "text-center myPara">Site created using VsCode, React And Bootstrap. Inspired by <a className = "style-1" href = "https://sumairhamza.github.io" target = "_blank">Sumair Hamza</a></p>
		    </div>
			
		);
	}
});

module.exports = Contact;