import React from 'react';

const PRODUCTS = {
        "Overview": ["Platform", "App Exchange", "Lightning Platform", "Heroku", "Mobile"],
        "Salesforce Apps": ["Analytics Cloud", "Community Cloud", "Marketing Cloud", "Pardot", "Quip"],
        "Build Faster, Smarter & Together": ["Lightning", "Einstein", "Salesfore DX"]
      };
const RESOURCES = {
        "Learn": ["Getting Started", "Documentation", "Trailhead", "Books and Cheat Sheets", "On-demand Webinars", "Certification", "Blogs"],
        "Tools": ["Salesforce Extensions for VS Code", "Salesforce CLI", "Lightening Design System", "Source Code Scanner", "More Tools and Toolkits"]
}
const COMMUNITY = {
        "": ["Developer Forms", "Events Calendar", "Developer MVPs", "Developer Groups", "Developer Success Stories", "Blogs"]
}
const BLOG = {
        "": ["All Blogs", "Developer Relations", "Engineering", "Lightening Platform Labs", "Tech Docs"]
}
const TRAILHEAD = {
        "Trailhead": ["Trails", "Modules", "Projects", "Superbadges", "Trailblazers", "Get Help", "Join the Community"]
}
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      show: null
    }
  }
  renderDropDown(title) {
    let elements = [];
    let headers = Object.keys(title);
    for (let i = 0; i < headers.length; i++) {
      elements.push(
        <ul onMouseLeave={() => this.setState({show: null})}>
          {headers[i]}
          {title[headers[i]].map(el=>(<li>{el}</li>))}
        </ul>
      )
    }
    return <div className={"dropdown" + ((this.state.show === title) ? " show" : "")}>{elements}</div>;
  }

  render() {

    return (
      <div className="header">
        <img src="https://developer.salesforce.com/resources2/images/salesforce-header-logo.png"/>

          <ul className="dropdowns">
            <li onMouseEnter={()=>this.setState({show: PRODUCTS})}>PRODUCTS { this.renderDropDown(PRODUCTS) }</li>
            <li onMouseEnter={()=>this.setState({show: RESOURCES})}>RESOURCES { this.renderDropDown(RESOURCES) }</li>
            <li onMouseEnter={()=>this.setState({show: COMMUNITY})}>COMMUNITY {this.renderDropDown(COMMUNITY)}</li>
            <li onMouseEnter={()=>this.setState({show: BLOG})}>BLOG { this.renderDropDown(BLOG)}</li>
            <li onMouseEnter={()=>this.setState({show: TRAILHEAD})}>TRAILHEAD {this.renderDropDown(TRAILHEAD)}</li>
          </ul>
          <div className="right">
            <form><input className="search" placeholder="Search"/></form>
            <div className="login">Login</div>
            <div className="signup">Sign Up</div>
          </div>
      </div>
    )
  }

}
export default Header;
