import React from 'react';

import Header from './Header.jsx';
import Presentation from './Presentation.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';
import Gallery from './Gallery.jsx';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSkill: "javascript", // default skill showed
      nbImageClicked: 0,
      isGalleryOpen: false,
    };

    this.handleSkillClick = this.handleSkillClick.bind(this);
    this.handleProjectImageClick = this.handleProjectImageClick.bind(this);
    this.handleCloseGallery = this.handleCloseGallery.bind(this);
  }

  handleSkillClick(skillName) {
    return () => {
      this.setState({currentSkill: skillName});
    }
  }

  handleProjectImageClick(nbImageClicked) {
    return () => {
      this.setState({nbImageClicked: nbImageClicked, isGalleryOpen: true});
    }
  }

  handleCloseGallery() {
    this.setState({isGalleryOpen: false});
  }

  render() {
    return (
      <div className="Site">{/* class Site used for sticky Footer*/}
        <Header/>
        <Presentation/>
        <Skills handleSkillClick={this.handleSkillClick}/>
        <Projects
          currentSkill={this.state.currentSkill}
          handleProjectImageClick={this.handleProjectImageClick}/>
        <Footer />
        <Gallery
          nbImageClicked={this.state.nbImageClicked}
          isGalleryOpen={this.state.isGalleryOpen}
          handleCloseGallery={this.handleCloseGallery}
        />
      </div>
    );
  }
}

export default Portfolio;
