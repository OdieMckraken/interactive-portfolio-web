import React, { Component } from 'react';

class LetsNameTheBabyCard extends Component {
  handleBackClick = () => {
    window.open('http://letsnamethebaby.com/')  } 

  handleFrontClick = () => {
    document.getElementById("babyCardInner").classList.toggle("projectCardInner-selected");
  } 
  render() {
    return (
      <div className='projectCard projectCard--baby'>
        <div id="babyCardInner" className='projectCardInner'>
          <div className='projectCardFace projectCardFace--front-baby' style={{ backgroundImage: "url(/baby.png)" }} onClick={this.handleFrontClick}>
          </div>
          <div className='projectCardFace projectCardFace--back-baby' onClick={this.handleBackClick} > 
            <div className='textBox'>
              <p> In August of 2020 I found out that I would soon be a father.
                  Over the next several months, Heather and I would be making 
                  some very important decisions. Like, what to name our child!
              </p>
              <p>
                Let's Name the baby helps expecting parents decide on a name for the little one.
                Together you and your significant other create a team name and
                password. From there you enter your names, choose your roles,
                and click the button that corresponds to the gender of your baby...
                if you don't know the gender, thats alright, there is a "baby" button 
                that will give you access to both the male and female names. You each get 
                to choose up to 10 of your favorite names, and when you're ready,
                the app will show you your matching names!
              </p>
              <p>
                This app uses a large database and may take some time to load.
                This, will be addressed in the future.
              </p>
              <p>
                Click to check it out! 
              </p>          
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default LetsNameTheBabyCard;