var React = require('react');

var Work = React.createClass({

	render: function(){
		return (
			<div className ="container">
	        	<div className = "row">
					<div className ="col-md-8 offset-md-2">
						<ul>
							<div className = "listItems">
								<strong><li><a className = "style-1" href = "https://visithyderabad.herokuapp.com" target = '_blank'>Visit Hyderabad Site</a></li></strong>
								<p className = "detailsParagraph">This site is updated monthly and keeps record of every place in Hyderabad Pakistan and allows you to add your business or a place in a desired catagory and make it visible to the world, also registered users can leave a review on any page/place of their choice. <br/><strong>Tech Stack:</strong> <em>NodeJs, MongoDB, Express, Ejs</em></p>												
							</div>
							<div className = "listItems">
								<strong><li><a className = "style-1" href = "https://visitblog.herokuapp.com" target = '_blank'>Blog Site</a></li></strong>
								<p className = "detailsParagraph">This site lets you write blogs to the website with pictures and make it available for the world to read. <br/><strong>Tech Stack:</strong> <em>NodeJs, MongoDB, Express, Ejs</em></p>												
							</div>
							<div className = "listItems">
								<strong><li><a className = "style-1" href = "https://sugpat.azurewebsites.net" target = '_blank'>Diabetic Monitoring System</a></li></strong>
								<p className = "detailsParagraph">The system aims towards hospitals and patients alike. The system helps patients maintain their diabetic level records Keep track of their progress, schedule appointments with thier doctor and provide notifications incase of specific alerts.<br/><strong>Tech Stack:</strong> <em>NodeJs, MongoDB, Express, Ejs</em></p>												
							</div>
							<div className = "listItems">
								<strong><li><a className = "style-1" href = "https://akberhussain/github.io" target = '_blank'>Account Profile</a></li></strong>
								<p className = "detailsParagraph">The This is a simple one-page website that promotes you and let people know about your work in various feilds and technologies<br/><strong>Tech Stack:</strong> <em>React Js, Bootstrap</em></p>												
							</div>

						</ul>
					</div>	
				</div>
				<hr/>
			        <p className = "text-center myPara">Site created using VsCode, React And Bootstrap. Inspired by <a className = "style-1" href = "https://sumairhamza.github.io" target = "_blank">Sumair Hamza</a></p>	
			</div>	
		);
	}
});

module.exports = Work;