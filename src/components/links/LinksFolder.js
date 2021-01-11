import React, { Component } from 'react';
import FolderContent from './FolderContent'
import { connect } from 'react-redux';

class linksFolder extends Component {

  handleClick = () => {
    this.props.changeLinks()
    document.getElementById('contact').style.zIndex = "10"
    document.getElementById('projects').style.zIndex = "20"
    document.getElementById('links').style.zIndex = "30"
  }

  render() {
    let showContent = ""

    if(this.props.showLinks === true){
      showContent = <FolderContent/>
    } else if(this.props.showLinks === false){
      showContent = ''
    }

    return (
      <div className='linksFolder' id='links'>
        <button id='linksButton' className='linksButton' onClick={this.handleClick}>links</button>
        <div id='linksContent' className='linksContent'>
          {showContent}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLinks: () => dispatch({ type: 'OPEN_LINKS' })
  }
}

const mapStateToProps = state => {
  return {
    showLinks: state.showLinks
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(linksFolder)