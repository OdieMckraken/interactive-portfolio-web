import React, { Component } from 'react';

class KatchupsCard extends Component {
  render() {
    return (
      <div className='projectCard projectCard--katchups'>
        <div className='projectCardInner'>
          <div className='projectCardFace projectCardFace--front' style={{ backgroundImage: "url(/katchups.png)" }}>
          </div>
          <div className='projectCardFace projectCardFace--back'>
          </div>
        </div>        
      </div>
    );
  }
}

export default KatchupsCard;