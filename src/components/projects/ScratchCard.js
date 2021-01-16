import React, { Component } from 'react';

class ScratchCard extends Component {
  render() {
    return (
      <div className='projectCard projectCard--scratch'>
        <div className='projectCardInner'>
          <div className='projectCardFace projectCardFace--front-scratch'  style={{ backgroundImage: "url(/scratch.png)" }}>
          </div>
          <div className='projectCardFace projectCardFace--back-scratch'>            
              <h1>SCRATCH</h1>
            <div className='textBox'>
              <p> I have a TON of vinyl records.
                Some of them were gifted to me by my friends and family,
                some were bought, and some have seemed to have been added to my collection by magic,
                because I have no idea where they came from.  
              </p>
              <p>
                I have always wondered the worth of my record collection...
                So I built an app. Scratch lets you search for an album by name,
                artist, catalog number... pretty much anything. It will pull information
                from the Discogs API and give you all kinds of useful identifiers.
                Once you have identified your album, it will give you the current
                going rate for matching albums that are currently for sale on Discogs.
                You can add all of your records to your "collection", and Scratch will tell you
                how much your collection is worth, based on the records currently for sale 
                on Discogs.
              </p>
              <p>
                This program was built with Sinatra. It features user authentication,
                the use of an external API, and a database where the user can 
                create, read, update, and delete information associated with that user. 
              </p>         
            </div>
            <a href="https://pure-lake-85624.herokuapp.com/" target="_blank" rel="noreferrer"><img border="0" alt="W3Schools" src="/scratch-logo.png" width="190vw" height="35vw"/></a>
          </div>
        </div>        
      </div>
    );
  }
}

export default ScratchCard;