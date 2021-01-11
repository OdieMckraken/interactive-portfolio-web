import React, { Component } from 'react';

class Linkedin extends Component {
  render() {
    return (
      <div className='linkLogo linkLogo--linkedin'>
        <a href='https://www.linkedin.com/in/adam-m-workman/' target="_blank" rel="noreferrer"><img className='linkImg' src='/linkedin-logo.png' width='100%' height='auto'/></a>
      </div>
    );
  }
}

export default Linkedin;