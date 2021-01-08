import React, { Component } from 'react';

class BusinessCard extends Component {

  constructor(){
    super()
    this.state = {
      cardName: "",
      cardCompany: "",
      cardTitle: "",
      cardEmail: "",
      cardPhone: "",
      cardMessage: ""
    }
  }

  flip = () => {
    const card =  document.getElementById('cardInner')
    const cardFront = document.getElementById('cardFace cardFace--front')
    const cardBack = document.getElementById('cardFace cardFace--back')    

    card.classList.toggle('isFlipped');
    card.classList.toggle('isFlipped');
    card.classList.toggle('isFlipped');    
  }

  handleFirstSubmit = (e) => {
    e.preventDefault()
    this.flip()
  }

  handleFinalSubmit = (e) => {
    e.preventDefault()
    const cardButton = document.getElementById('cardButton')
    cardButton.remove()
    this.flip()
    
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.className]: e.target.value
    })
  }

  render() {
    return (
      <div className='cardInner' id='cardInner'>
        <div id='cardFace cardFace--front' className='cardFace cardFace--front'>
          <div id='businessCard' className='businessCard'>
            <div id='businessCardMask' className='businessCardMask'>            
              <form onSubmit={this.handleFirstSubmit}>
                <input className='cardName' type='text' onChange={this.handleChange} placeholder='Full Name (required)' value={this.state.cardName}/>
                <input className='cardCompany' type='text' onChange={this.handleChange} placeholder='Company Name' value={this.state.cardCompany}/>
                <input className='cardTitle' type='text' onChange={this.handleChange} placeholder='Title'value={this.state.cardTitle}/> <p className='at'> at </p>
                <input className='cardEmail' type='text' onChange={this.handleChange} placeholder='E-mail (required)'value={this.state.cardEmail}/>
                <div className='envelopeIcon'>
                  <i className="fa fa-envelope"></i>
                </div>
                <input className='cardPhone' type='text' onChange={this.handleChange} placeholder='Phone Number'value={this.state.cardPhone}/>
                <div className='phoneIcon'>
                  <i className="fa fa-phone"></i>
                </div>              
                <input id='cardButton' className='cardButton' type='submit'  value='Done'/>                  
              </form>
            </div>
          </div>
        </div>
        <div id='cardFace cardFace--back' className='cardFace cardFace--back'>
          <div id='businessCardBack' className='businessCardBack'>            
            <h1>Message</h1>
            <form onSubmit={this.handleFinalSubmit}>
              <textarea
                className='cardMessage'
                value={this.state.cardMessage}
                onChange={this.handleChange}
                placeholder='Leave me a message.'
              /><br/>
              <input type='submit' className='finalSubmit' value='Send'/>                  
            </form>            
          </div>
        </div>       
      </div>
    );
  }
}

export default BusinessCard;


