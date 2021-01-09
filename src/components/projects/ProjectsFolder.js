import React, { Component } from 'react';
import FolderContent from './FolderContent';

class projectsFolder extends Component {

  handleClick = () => {
    this.props.changeProjects()
    document.getElementById('contact').style.zIndex = "20"
    document.getElementById('projects').style.zIndex = "30"
    document.getElementById('links').style.zIndex = "10"

    document.getElementById('projectsButton').style.backgroundColor='tan'
    document.getElementById('contactButton').style.backgroundColor='rgb(160, 135, 102)'
    document.getElementById('linksButton').style.backgroundColor='rgb(134, 114, 88)'
  }

  render() {
    let content = ""

    if(this.props.showProjects === true){
      content = <FolderContent/>}
    if(this.props.showProjects === false){
      content = ""}

    return (
      <div className='projectsFolder' id='projects'>
        <button id='projectsButton' className='projectsButton' onClick={this.handleClick}>projects</button>
        {content}
      </div>
    );
  }
}

export default projectsFolder;