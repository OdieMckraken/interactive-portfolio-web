import React from 'react';
import Typewriter from "./typewriter";

const intro = () => {
  return (    
      <pre className='intro' id="typewriter">
        <span className="var-highlight">{`let`}</span> {`adam = {
  firstName:`}<span className="string-highlight">'Adam'</span>{`,
  lastName: `}<span className="string-highlight">'Workman'</span>{`,
  location: `}<span className="string-highlight">'Ellijay Georgia'</span>{`,
  skills: {
    `}<span className="string-highlight">Javascript</span>:[{`
    `}]{`,
    `}<span className="string-highlight">Ruby</span>:[{`
    `}]{`
  },`}{`
  passions: [`}<span className="string-highlight">{`
   `}'Music'</span>{`,
   `}<span className="string-highlight">'Woodworking'</span>{`,
   `}<span className="string-highlight">'Family'</span>{`,
   `}<span className="string-highlight">'Writing awesome code!'</span>{`
  ]
}
          
function introduction() {
  introCard.innerText = 'Hi, I'm `+`$`+`{adam.firstName}'
}

introduction() `}
      </pre>
  );
};

export default intro;