import React, { Component } from 'react';

class KatchupsCard extends Component {
  handleBackClick = () => {
    window.open('https://youtu.be/_KOrnDga8-k')
  }  
  handleFrontClick = () => {
    document.getElementById("katchupsCardInner").classList.toggle("projectCardInner-selected");
  }
  render() {
    return (
      <div className='projectCard projectCard--katchups' >
        <div id="katchupsCardInner" className='projectCardInner' >
          <div className='projectCardFace projectCardFace--front-katchups' style={{ backgroundImage: "url(/katchups.png)" }} onClick={this.handleFrontClick}>
          </div>
          <div className='projectCardFace projectCardFace--back-katchups' onClick={this.handleBackClick} >            
            <div className='textBox'>
              <p> Do you and (enter name of friends or significant other)
                ever have a hard time agreeing on what to eat? Do you wish that
                there was an easier way to decide on a restaurant?
              </p>
              <p>
                katchups gives you an easy and convenient way to choose 
                a restaurant that you will both enjoy! When you sign into katchups,
                you will see a list of your friends on the right. Just pick a friend and 
                get ready for the magic. After you pick a date, time and location, you
                and your friend will be given a list of 20 restaurants in the chosen area, that are 
                open at the desired time. You will each go through the list liking and disliking each restaurant
                until a match is found... voila!   
              </p>
              <p>
                katchups was built using a rails API and a ReactJS
                frontend. This is my current project and is being updated daily.
              </p>
              <p>
                Click to see a demo! 
              </p>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default KatchupsCard;