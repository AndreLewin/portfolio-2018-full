import React from 'react';
import Masonry from 'react-masonry-component';

import Project from './Project.jsx';
import projects from '../elements/projects.jsx';


class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // Remove the projects unrelated to the currentSkill (javascript by default)
    const filteredProjects = projects.filter((project) => { return project.tags.includes(this.props.currentSkill) });

    const projectList = filteredProjects.map((project, index) => {
      return (
        <Project
          key={project.name}
          picture_url={project.picture_url}
          text={project.text}
          name={project.name}
          appLink={project.appLink}
          codeLink={project.codeLink}
          tags={project.tags}
          id={index}
          handleProjectImageClick={this.props.handleProjectImageClick}
        />
      );
    });

    return (
      <div>
        <Masonry
          // options={{ fitWidth: true }}
          // style={{margin: "0 auto"}}
        >
          {projectList}
        </Masonry>
      </div>
    );
  }
}

export default Projects;
