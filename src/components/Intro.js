import React from 'react';
import Typewriter from "./Typewriter";

const intro = () => { 
  return ( 
    <div> 
      <pre className='code' id="typewriter">{`
`}<span className="var-highlight">{`let`}</span>{` adam = {
  firstName:`}<span className="string-highlight">'Adam'</span>{`,
  lastName: `}<span className="string-highlight">'Workman'</span>{`,
  location: `}<span className="string-highlight">'Ellijay Georgia'</span>{`,
  skills: {
    Javascript: [
      `}<span className="string-highlight">'React'</span>,{`
      `}<span className="string-highlight">'React Native'</span>,{`
      `}<span className="string-highlight">'Redux'</span>{`
    ],
    `}Ruby: [{`
      `}<span className="string-highlight">'Sinatra'</span>,{`
      `}<span className="string-highlight">'Rails'</span>{`
    `}]{`
  },`}{`
  passions: [`}<span className="string-highlight">{`
   `}'Learning'</span>{`,
   `}<span className="string-highlight">'Woodworking'</span>{`,
   `}<span className="string-highlight">'Music'</span>{`,
   `}<span className="string-highlight">'Family'</span>{`,
   `}<span className="string-highlight">'Writing awesome code!'</span>{`
  ]
}`}{`
          
`}<span className="var-highlight">function</span><span className='function-highlight'>{` introduction()`}</span>{` {
introCard.innerText =`}<span className="string-highlight"> 'Hi, I'm </span><span className="var-highlight2">{`$`+`{`}</span><span className="name-highlight">{`adam`}</span><span className="punctuation-highlight">{`.`}</span><span className="var-highlight2">{`firstName}`}</span><span className="var-highlight">'</span>{`
}

`}<span className='function-highlight'>{`introduction() `}</span>
      </pre>
      <Typewriter text={document.getElementById('typewriter')}/>
    </div>     
  );
};

export default intro;