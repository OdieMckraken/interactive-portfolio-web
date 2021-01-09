import React, { Component } from 'react';

class CovidTrackerCard extends Component {
  render() {
    return (
      <div className='projectCard projectCard--covid'>
        <div className='projectCardInner'>
          <div className='projectCardFace projectCardFace--front' style={{ backgroundImage: "url(/covid-tracker.png)" }}>
          </div>
          <div className='projectCardFace projectCardFace--back'>
          </div>
        </div>        
      </div>
    );
  }
}

export default CovidTrackerCard;