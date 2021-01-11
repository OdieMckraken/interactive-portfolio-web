import React, { Component } from "react";
import FolderContent from './FolderContent'
import { connect } from 'react-redux';

class contactFolder extends Component {
	handleClick = () => {
    this.props.changeContact()
		document.getElementById("contact").style.zIndex = "30";
		document.getElementById("projects").style.zIndex = "20";
		document.getElementById("links").style.zIndex = "10";
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

const mapDispatchToProps = dispatch => {
  return {
    changeContact: () => dispatch({ type: 'OPEN_CONTACT' })
  }
}

const mapStateToProps = state => {
  return {
    showContact: state.showContact
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(contactFolder);
