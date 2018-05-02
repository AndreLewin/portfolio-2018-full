import React from 'react';


class Presentation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero is-medium is-light">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div>
                  <h1 className="title">
                    Hi, I'm <b>André Lewin</b>!
                  </h1>
                  <hr/>
                  <h2 className="subtitle">
                    I am a <b>Web Developer</b> from Île-de-France. I want to solve people's problems, and development is the fastest way I found to have a positive impact.
                  </h2>
                  <h2 className="subtitle">
                    I studied at IUT d'Orsay from the Paris-Saclay University where I acquired a DUT Informatique, a two-year degree in Computer Science. This includes a ten-week internship as a Junior Web Developer, using the PHP Framework Symfony.
                  </h2>
                  <h2 className="subtitle">
                    Curious, I am mostly self-taught. I did many projects for the <b>Javascript Full-Stack</b> curriculum of <a href="https://www.freecodecamp.org/">Free Code Camp</a>, where I received certifications in Front-End, Data Visualization and Back-End development, using tools from the <b>React / Node environment</b>.
                  </h2>
                  <h2 className="subtitle">
                    Presently, I'm looking for a job.
                  </h2>
                  <a className="button is-dark" href="https://drive.google.com/open?id=1_idP1-PSlFAH22Oj5BlIfuBYPSx72Byt" target="_blank">
                    <span className="icon">
                      <i className="fas fa-download"/>
                    </span>
                    <span className="button-text">
                      Download my Curriculum Vitae
                    </span>
                  </a>
                </div>
              </div>

              <div id="picture-column" className="column">
                <img className="picture" src='./me.jpg' alt="A picture of me"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Presentation;
