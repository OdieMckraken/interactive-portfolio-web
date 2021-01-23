import React, { Component } from 'react';

class KatchupsCard extends Component {
  render() {
    return (
      <div className='projectCard projectCard--katchups' >
        <div className='projectCardInner' >
          <div className='projectCardFace projectCardFace--front-katchups' style={{ backgroundImage: "url(/katchups.png)" }}>
          </div>
          <div className='projectCardFace projectCardFace--back-katchups' >            
            <div className='textBox'>
              <p> Do you and (enter name of friends or significant other)
                ever have a hard time agreeing on what to eat? Do you wish that
                there was an easier way to decide on a restaurant?
              </p>
              <p>
                katchups gives you and easy and convenient way to choose 
                a restaurant that you will both enjoy! When you sign into katchups,
                you will see a list of your friends on the right. Just pick a friend and 
                get ready for the magic. After you pick a date, time and location, you
                and your friend will be given a list of 20 restaurants in the chosen area, that are 
                open at the desired time. You will each go through the list liking and disliking each restaurant
                until a match is found... voila!   
              </p>
              <p>
                katchups was built using a rails API and a vanilla javascipt 
                frontend. It is currently undergoing a large refactor and not all of the
                features will be functional.
              </p>
            </div> 
                       
              <a href="https://amworkman.github.io/katchups-front/" target="_blank" rel="noreferrer"><img border="0" src="/katchups-logo.png" width="200vw" height="55vw"/></a>            
          </div>
        </div>        
      </div>
    );
  }
}

export default KatchupsCard;