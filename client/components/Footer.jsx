import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.displayEmail = this.displayEmail.bind(this);
  }

  displayEmail() {
    console.log("aaaa");
    $("#m-part-1-footer").text("erdna");
    $("#m-part-2-footer").text("selrahc");
    $("#m-part-3-footer").text("niwel");
    $('#email-display-footer').css({"visibility": "visible", "position": "static"});
  }

  render() {
    return (
      <footer className="navbar is-black" id="header">
        <div className="navbar-brand">
          <div className="navbar-item">
            <a href="#top">
              <span className="footer-name">André Lewin (2018)</span>
            </a>
          </div>
          {/*
          <div className="navbar-item">
            <a className="button is-dark" href="mailto:test@io.com">
              <span className="icon">
                <i className="fas fa-download"/>
              </span>
              <span className="button-text">
                Curriculum Vitae
              </span>
            </a>
          </div>
          */}
          <div className="navbar-item push-right">
            <div className="field is-grouped">
              {/* Mail displayed with triple obfuscation:
               1) Separate HTML elements
               2) Value sent with JQuery only after a click
               3) Some spans are reversed by a CSS class
               */}
              <div id="email-display-footer" style={{"visibility": "hidden", "position": "absolute"}} className="control">
                <div disabled className="button is-dark">
                  <span id="m-part-1-footer" className="reversed">
                    and
                  </span>
                  .
                  <span id="m-part-2-footer" className="reversed">
                    char
                  </span>
                  .
                  <span id="m-part-3-footer" className="reversed">
                    char
                  </span>
                  <span id="m-part-4-footer">
                    &#x40;
                  </span>
                  gm
                  <span id="m-part-5-footer">
                    ail
                  </span>
                  .
                  <span id="m-part-6-footer">
                    com
                  </span>
                </div>
              </div>
              <p className="control">
                <a className="button is-dark" onClick={this.displayEmail}>
                  <span className="icon">
                    <i className="fas fa-envelope"/>
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-dark" href="https://www.linkedin.com/in/andr%C3%A9-lewin-35435411a/" target="_blank">
                  <span className="icon">
                    <i className="fab fa-linkedin"/>
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-dark" href="https://github.com/AndreLewin" target="_blank">
                  <span className="icon">
                    <i className="fab fa-github"/>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
