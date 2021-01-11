import React, { Component } from 'react';
import ContactFolder from './contact/ContactFolder'
import ProjectsFolder from './projects/ProjectsFolder'
import LinksFolder from './links/LinksFolder'

class DisplayIntro extends Component {  
  
  render() {
    let introIMG = ""
    let moreInfo = ""
    let showContactFolder = ""
    let showProjectsFolder = ""
    let showLinksFolder = ""

    if(this.props.stopCode === true){
      introIMG = <img className='nameIMG' src='/name.png' alt='' width="100%"/> 
      moreInfo = <img className='moreInfo' src='/learn-more.png' alt='' width="25%"/>
      showContactFolder = <ContactFolder/>
      showProjectsFolder = <ProjectsFolder/>
      showLinksFolder = <LinksFolder/>
    }

    return (
      <div>
        <pre className='intro'>
          {introIMG}
          {moreInfo}
        </pre>
        {showContactFolder}
        {showProjectsFolder}
        {showLinksFolder}
      </div>
    );
  }
}

export default DisplayIntro;
