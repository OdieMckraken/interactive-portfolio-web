import React, { PureComponent } from 'react';

class BusinessCard extends PureComponent {

  constructor(){
    super()
    this.state = {
      cardName: "",
      cardCompany: "",
      cardTitle: "",
      cardEmail: "",
      cardPhone: "",
      cardMessage: "",
      cardSent: false,
      cardSeal: false
    }
  }

  flip = () => {
    const card =  document.getElementById('cardInner')
    card.classList.toggle('isFlipped');       
  }

  handleFirstSubmit = (e) => {
    e.preventDefault()
    this.flip()
  }

  handleFinalSubmit = (e) => {
    const cardsURL = 'https://interactive-portfolio-api.herokuapp.com/cards'

    e.preventDefault()
    const cardButton = document.getElementById('cardButton')
    setTimeout(function() { 
      this.setState({cardSeal: true}) 
    }.bind(this), 1000)
    cardButton.remove()
    this.flip()
    this.setState({
      cardSent: true
    })
    
    fetch(cardsURL,{
      method:"POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.cardName,
        company_name: this.state.cardCompany,
        position: this.state.cardTitle,
        email: this.state.cardEmail,
        phone_number: this.state.cardPhone,
        message: this.state.cardMessage, 
        user_id: 1     
      })
    })
    .then(resp => resp.json)
    .then(console.log)
    
  }

    

  handleChange = (e) => {
    this.setState({
      [e.target.className]: e.target.value
    })
  }

  render() {
    let envelopeLeft = ""
    let envelopeRight = ""
    let envelopeBack = ""
    let envelopeTop = ""
    
    if(this.state.cardSent === true){     
        envelopeLeft = <div className='envelopeLeft'></div>
        envelopeRight = <div className='envelopeRight'></div>
        envelopeBack = <div className='envelopeBack'></div>
        envelopeTop = <div id='envelopeTop' className='envelopeTop'></div>
        
    }

    if(this.state.cardSeal === true){
      
      const top =  document.getElementById('envelopeTop')
      const card = document.getElementById('card')
      const envelope = document.getElementById('envelope')

      let thanks = `<div class='thanksCard'>
        <h1>Thank you for your interest!</h1><br/>
        <p>You should be receiving an email from me shortly with my information.</p><br/>
        <p>I look forward to connecting with you!</p>
      </div>`
      setTimeout(function() {
      top.classList.toggle('sealed')}, 2000)

      setTimeout(function() {
        card.classList.toggle('sent')}, 3000)

      setTimeout(function() {
        envelope.innerHTML = thanks}, 5000)

      setTimeout(function() {
        card.classList.toggle('sent')}, 6000)      
    }

    return (
      <div className='envelope' id='envelope'>
        {envelopeLeft}
        {envelopeRight}
        {envelopeBack}
        {envelopeTop}
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
      </div>
    );
  }
}

export default BusinessCard;


