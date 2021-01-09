import React, { Component } from 'react';

class LetsNameTheBabyCard extends Component {
  render() {
    return (
      <div className='projectCard projectCard--baby'>
        <div className='projectCardInner'>
          <div className='projectCardFace projectCardFace--front' style={{ backgroundImage: "url(/baby.png)" }}>
          </div>
          <div className='projectCardFace projectCardFace--back'>
          </div>
        </div>        
      </div>
    );
  }
}

export default LetsNameTheBabyCard;