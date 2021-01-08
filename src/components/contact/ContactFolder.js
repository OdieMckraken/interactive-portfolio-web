import React, { Component } from 'react';
import ContactText from './ContactText';
import $ from 'jquery'; 
import BusinessCard from './BusinessCard';



class contactFolder extends Component {
  
  handleClick = () => {    
    document.getElementById('contact').style.zIndex="30"
    document.getElementById('projects').style.zIndex="20"
    document.getElementById('links').style.zIndex="10"

    document.getElementById('contactButton').style.backgroundColor='tan'
    document.getElementById('projectsButton').style.backgroundColor='rgb(160, 135, 102)'
    document.getElementById('linksButton').style.backgroundColor='rgb(134, 114, 88)'

    let content = document.getElementById('contactText')
    let clone = content.cloneNode(true)
    content.parentNode.replaceChild(clone, content)

    let card = document.getElementById('businessCard')
    let cardClone = card.cloneNode(true)
    card.parentNode.replaceChild(cardClone, card)
  }

  render() {
    return (
      <div className='contactFolder' id='contact'>
        <button id='contactButton' className='contactButton' onClick={this.handleClick}>Contact</button>
        <div id='contactText' className='contactText'>
          <ContactText/> 
        </div>
          <div className='card'>
            <BusinessCard/>  
          </div>
      </div>
    );
  }
}

export default contactFolder;