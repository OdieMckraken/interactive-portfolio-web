import React, { Component } from 'react';

class ScratchCard extends Component {
  render() {
    return (
      <div className='projectCard projectCard--scratch'>
        <div className='projectCardInner'>
          <div className='projectCardFace projectCardFace--front'  style={{ backgroundImage: "url(/scratch.png)" }}>
          </div>
          <div className='projectCardFace projectCardFace--back'>
          </div>
        </div>        
      </div>
    );
  }
}

export default ScratchCard;