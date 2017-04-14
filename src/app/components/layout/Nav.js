import React from 'react';
import {Link} from 'react-router'

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed : true,
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }

  render() {
    const {collapsed} = this.state
    const navClass= collapsed ? "collapse" : "";
    const mainSiteTitle = "Testing ReactJS";

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{mainSiteTitle}</a>
          </div>
          <div id="navbar" className={"navbar-collapse " + navClass}>
            <ul className="nav navbar-nav">
              <li><Link activeClassName="active" to="projects" onClick={this.toggleCollapse.bind(this)}>Projects</Link></li>
              <li><Link activeClassName="active" to="aboutMe" onClick={this.toggleCollapse.bind(this)}>About Me</Link></li>
              <li><Link activeClassName="active" to="contact" onClick={this.toggleCollapse.bind(this)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}

