import React from 'react';

import skills from '../elements/skills.jsx';
import typeColorMapping from '../elements/typeColorMapping.jsx';


class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture_url: this.props.picture_url,
      text: this.props.text || "Undefined",
      appLink: this.props.appLink || "https://codepen.io/andrelewin/full/wreyYw/",
      codeLink: this.props.codeLink || "https://codepen.io/andrelewin/pen/wreyYw/",
      tags: this.props.tags,
      nbCardsPerLine: Math.ceil(getWidth()/600),
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }


  // An Event Listener must be used since there are no OnWidth
  // It updates the state, so there is a re-rendering with the correct nbCardsPerLine
  updateDimensions() {
    // A card has a min-width of 600px
    this.setState({nbCardsPerLine: Math.ceil(getWidth()/600)});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }


  render() {
    const tagList = this.state.tags.map((tag) => {

      // Find the skill based on the name of the tag
      // This allows to get the type of the skill, and its associated color
      const skill = skills.find(skill => skill.name === tag);
      const colorClass = typeColorMapping[skill.type];

      return (
        <span key={tag} className={"tag " + colorClass}>{tag}</span>
      );
    });

    const cardStyle = {
      width: 100/this.state.nbCardsPerLine+"%",
      "boxSizing": "border-box",
      border: "2px solid #dbdbdb",
    };

    // Important note: displaying the gallery is disabled since it jumbles the cards, for some reason
    /*
      <img className="bordered pointer-hover" src={this.state.picture_url} alt="Projects's picture"
        onClick={this.props.handleProjectImageClick(this.props.id)}
      />
     */
    return (
      <React.Fragment>
        { !this.state.isJustDeleted && (

          <div style={cardStyle} className="card">
            <div className="card-content">
              <img className="bordered" src={this.state.picture_url} alt="Projects's picture"/>
              <hr/>
              <div className="subtitle" style={{"textAlign": "center"}}>
                <b>{this.props.name}</b>
              </div>
              <hr/>
              <div>{this.props.text}</div>
            </div>

            <div className="tags">
              {tagList}
            </div>

            <footer className="card-footer">
              <span className="card-footer-item button is-link"
                    onClick={() => {window.open(this.state.appLink, '_blank' )}}
                    style={{"borderRadius": "0", "border": "0"}}>
                <i className="fas fa-play" />
                &nbsp;Play
              </span>
              <span className="card-footer-item button is-info"
                    onClick={() => {window.open(this.state.codeLink, '_blank' )}}
                    style={{"borderRadius": "0", "border": "0"}}>
                <i className="fas fa-code" />
                &nbsp;Code
              </span>
            </footer>

          </div>
        )}
      </React.Fragment>
    );
  }
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

export default Project;