import React, { Component } from 'react';
import FolderContent from './FolderContent';
import { connect } from 'react-redux';

class projectsFolder extends Component {

  handleClick = () => {
    this.props.changeProjects()
    document.getElementById('contact').style.zIndex = "20"
    document.getElementById('projects').style.zIndex = "30"
    document.getElementById('links').style.zIndex = "10"
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

const mapDispatchToProps = dispatch => {
  return {
    changeProjects: () => dispatch({ type: 'OPEN_PROJECTS' })
  }
}

const mapStateToProps = state => {
  return {
    showProjects: state.showProjects
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(projectsFolder)