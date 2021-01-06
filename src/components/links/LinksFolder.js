import React, { Component } from 'react';
import Links from './links'

class linksFolder extends Component {

  handleClick = () => {
    document.getElementById('contact').style.zIndex = "10"
    document.getElementById('projects').style.zIndex = "20"
    document.getElementById('links').style.zIndex = "30"

    document.getElementById('linksButton').style.backgroundColor='tan'
    document.getElementById('contactButton').style.backgroundColor='rgb(134, 114, 88)'
    document.getElementById('projectsButton').style.backgroundColor='rgb(160, 135, 102)'
  }

  render() {
    let showContent = ""

    if(this.props.showContact === true){
      showContent = <Links/>
    } else if(this.props.showContact === false){
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

export default linksFolder;