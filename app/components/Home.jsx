var React = require('react');


var Home = React.createClass({

	render: function(){
		return (
			<div>
				<div className ="container">
	        		<div className = "row">
						<div className ="col-md-6 offset-md-3">
			                <div className= "img-thumbnail">
			                    <img className= "img-responsive myImage" src = "myimages/szab.jpg"/>
			                </div>
			            </div>
			        </div>
			    </div>    
			       <hr/>
			        <p className = "text-center myPara">Site created using VsCode, React And Bootstrap</p>            
			</div>                
		);
	}
});

module.exports = Home;