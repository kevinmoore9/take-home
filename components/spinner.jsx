import React from 'react';

class Spinner extends React.Component {
  constructor() {
    super();
    this.state = {
      show: 0
    }
  }
  render(){
    let legend = ["Dev's guide to DF17", "Learn with Trailhead", "Heroku", "Lightning", "Einstein"];
    let images = ["https://res.cloudinary.com/hy4kyit2a/image/upload/2017-10-1280x248-dev-guide-to-dreamforce.png",
                  "https://developer.salesforce.com/resources2/home-hero/img-trailhead-bg-2.png",
                  "https://developer.salesforce.com/resources2/home-hero/img-heroku-bg.png",
                  "https://developer.salesforce.com/resources2/home-hero/img-lightning-bg.png",
                  "https://developer.salesforce.com/resources2/home-hero/img-einstein-bg.png?v=1"];
    let titles = ["Dev's guide to Dreamforce", "Learn & Earn Badges", "Heroku Enterprise", "Learn About Lightening", "Einstein Platform Services"]
    let blurbs = [ "Here's a sneak preview of what we're planning for DF17", "Learn Salesforce the fun way with hands-on learning in Trailhead",
                   "Build enterprise apps that seemlessly integrate with Salesforce using any language or framework",
                   "Join this technical webinar and learn to quickly create amazing apps with Lightening Components",
                   "Join this technical webinar and learn to build smarter apps with Einstein Platform Services"];
    let buttons = ["Get Ready", "Blaze Your Trail", "Get Ready", "Watch Now", "Watch Now"];

    return(
      <div className="spinner">
        {images.map((img, idx) => (
            <div className={ "image-container" + (this.state.show === idx ? " show" : "") }>
              <img src={img} />
              <div className="info">
                <h2>{titles[idx]}</h2>
                <p>{blurbs[idx]}</p>
                <div>{buttons[idx]}</div>
              </div>
              <div className="legend">
                {legend.map((el, idx) =>(<div className={this.state.show === idx ? "show" : null}
                                              onClick={()=> this.setState({show: idx})}>{el}</div>))}
              </div>
            </div>
        ))}
      </div>
    )
  }
}

export default Spinner;
