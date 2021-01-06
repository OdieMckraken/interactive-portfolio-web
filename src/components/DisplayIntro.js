import React, { Component } from 'react';
import ContactFolder from './contact/ContactFolder'
import ProjectsFolder from './projects/ProjectsFolder'
import LinksFolder from './links/LinksFolder'



class DisplayIntro extends Component {

  constructor(){
    super()

    this.state = {
      showContact: true,
      showProjects: false,
      showLinks: false
    }
  }

  showContact = () => {
    this.setState ({
      showContact: true,
      showProjects: false,
      showLinks: false
    })

  }

  showProjects = () => {
    this.setState ({
      showContact: false,
      showProjects: true,
      showLinks: false
    })
  }

  showLinks = () => {
    this.setState ({
      showContact: false,
      showProjects: false,
      showLinks: true
    })
  }    
  
  render() {
    let introIMG = ""
    let moreInfo = ""
    let showContactFolder = ""
    let showProjectsFolder = ""
    let showLinksFolder = ""

    if(this.props.stopCode === true){
      introIMG = <img className='nameIMG' src='/name.png' alt='' width="100%"/> 
      moreInfo = <img className='moreInfo' src='/learn-more.png' alt='' width="25%"/>
      showContactFolder = <ContactFolder
        showContact={this.state.showContact}
        showProjects={this.state.showProjects}
        showLinks={this.state.showLinks}
        changeContact={this.showContact}
        changeProjects={this.showProjects}
        changeLinks={this.showLinks}
      />
      showProjectsFolder = <ProjectsFolder
        showContact={this.state.showContact}
        showProjects={this.state.showProjects}
        showLinks={this.state.showLinks}
        changeContact={this.showContact}
        changeProjects={this.showProjects}
        changeLinks={this.showLinks}
      />
      showLinksFolder = <LinksFolder
        showContact={this.state.showContact}
        showProjects={this.state.showProjects}
        showLinks={this.state.showLinks}
        changeContact={this.showContact}
        changeProjects={this.showProjects}
        changeLinks={this.showLinks}
      />
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
