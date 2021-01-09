import React, { Component } from "react";
import FolderContent from './FolderContent'

class contactFolder extends Component {
	handleClick = () => {
    this.props.changeContact()
		document.getElementById("contact").style.zIndex = "30";
		document.getElementById("projects").style.zIndex = "20";
		document.getElementById("links").style.zIndex = "10";

		document.getElementById("contactButton").style.backgroundColor = "tan";
		document.getElementById("projectsButton").style.backgroundColor =
			"rgb(160, 135, 102)";
		document.getElementById("linksButton").style.backgroundColor =
			"rgb(134, 114, 88)";
  };
  
  

	render() {
    let content = ""

    if(this.props.showContact === true){
      content = <FolderContent/>}
    if(this.props.showContact === false){
      content = ""}

		return (
      <div className="contactFolder" id="contact">
				<button	id="contactButton" className="contactButton" onClick={this.handleClick.bind(this)}>
					Contact
				</button>

        {content}
        
			</div>
		);
	}
}

export default contactFolder;
