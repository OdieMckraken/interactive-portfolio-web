import React, { Component } from 'react';

class BusinessCard extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted!")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='cardName' type='text' placeholder='Full Name (required)' autoFocus='true'/>
          <input className='cardCompany' type='text' placeholder='Company Name'/>
          <input className='cardTitle' type='text' placeholder='Title'/>
          <input className='cardEmail' type='text' placeholder='E-mail (required)'/>
          <input className='cardPhone' type='text' placeholder='Phone Number'/>
          <input className='cardButton' type='submit' value='Done'/>          
        </form>
        
      </div>
    );
  }
}

export default BusinessCard;