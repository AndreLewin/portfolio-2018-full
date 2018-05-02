import React from 'react';
import 'balloon-css';

import skills from '../elements/skills.jsx';
import typeColorMapping from '../elements/typeColorMapping.jsx';


class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: skills,
    };

  }

  render() {
    // Some skills can change the parent skill state, that will show related projects
    // When a skill has no hover property, that means it has no related project, show the text instead
    const buttons = skills.map((skill, index) => {
      return (
        <span className={"button " + typeColorMapping[skill.type]
              + ((typeof skill.hover !== "undefined") ? " is-normal is-outlined " : " ") }
              data-balloon-pos="down"
              data-balloon={skill.hover}
              data-balloon-length="medium"
              onClick={(typeof skill.hover === "undefined") ? this.props.handleSkillClick(skill.name) : undefined}
              title={this.hover} key={index}>{skill.name}</span>
      );
    });

    return (
      <section className="hero is-medium" id="buttons">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle" style={{"textAlign": "center"}}>
              Here are some of my skills. Press one to display the most relevant projects below.
            </h2>
            <div className="buttons wrap-centered">
              {buttons}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
