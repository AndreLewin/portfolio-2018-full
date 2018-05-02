import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.displayEmail = this.displayEmail.bind(this);
  }

  displayEmail() {
    $("#m-part-1-header").text("erdna");
    $("#m-part-2-header").text("selrahc");
    $("#m-part-3-header").text("niwel");
    $('#email-display-header').css({"visibility": "visible", "position": "static"});
  }

  render() {
    return (
      <nav className="navbar is-black" id="header">
        <div className="navbar-brand">
          <div className="navbar-item">
            <b>André Lewin</b>
          </div>
          <div className="navbar-item push-right">
            <div className="field is-grouped">
              {/* Mail displayed with triple obfuscation:
               1) Separate HTML elements
               2) Value sent with JQuery only after a click
               3) Some spans are reversed with a CSS class
               */}
              <div id="email-display-header" style={{"visibility": "hidden", "position": "absolute"}} className="control">
                <div disabled className="button is-danger">
                  <span id="m-part-1-header" className="reversed">
                    and
                  </span>
                  .
                  <span id="m-part-2-header" className="reversed">
                    char
                  </span>
                  .
                  <span id="m-part-3-header" className="reversed">
                    char
                  </span>
                  <span id="m-part-4-header">
                    &#x40;
                  </span>
                  gm
                  <span id="m-part-5-header">
                    ail
                  </span>
                  .
                  <span id="m-part-6-header">
                    com
                  </span>
                </div>
              </div>
              <p className="control">
                <a className="button is-danger" onClick={this.displayEmail}>
                  <span className="icon">
                    <i className="fas fa-envelope"/>
                  </span>
                  <span className="button-text">
                    Show email
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-link" href="https://www.linkedin.com/in/andr%C3%A9-lewin-35435411a/" target="_blank">
                  <span className="icon">
                    <i className="fab fa-linkedin"/>
                  </span>
                  <span className="button-text">
                    LinkedIn
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button" href="https://github.com/AndreLewin/portfolio-2018-full" target="_blank">
                  <span className="icon">
                    <i className="fab fa-github"/>
                  </span>
                  <span className="button-text">
                    GitHub
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}


export default Header;