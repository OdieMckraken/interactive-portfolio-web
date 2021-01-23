import React, { Component } from 'react';

class CovidTrackerCard extends Component {
  render() {
    return (
      <div className='projectCard projectCard--covid'>
        <div className='projectCardInner'>
          <div className='projectCardFace projectCardFace--front-covid' style={{ backgroundImage: "url(/covid-tracker.png)" }}>
          </div>
          <div className='projectCardFace projectCardFace--back-covid'>            
            <div className='textBox'>
              <p> Covid-19 has become a huge part of our lives.
                It has influence over nearly all of our decisions.
                it has changed the way our society works, and it has 
                made us more aware than ever of how fragile our lives really are. 
              </p>
              <p>
                With Covid-19 Tracker, you can check on the current
                status of the pandemic in any country. You can view the country
                with the highest number of confirmed cases, or the highest number of new cases.
                You can see a list of all the countries that have no new cases.
                You can get the stats of a random country, or search for the country 
                You are most interested in. There is even a hidden surprise!
              </p>
              <p>
                This was the fist program that I built with ruby.
                It is simple and functional.
              </p>
              <p>
                You can check it out here 
              </p>          
            </div>
            <a href="https://github.com/Amworkman/covid_tracker" target="_blank" rel="noreferrer"><img border="0" src="/GitHub-Mark-Light-64px.png" width="50vw" height="50vw"/></a>
          </div>
        </div>        
      </div>
    );
  }
}

export default CovidTrackerCard;