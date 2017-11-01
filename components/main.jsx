import React from 'react';

class Main extends React.Component {
  render() {
    return(
      <div className="main">
        <div className="left">
          <div className="trailblazer">Be a <strong>Trailblazer</strong> - Build apps your customers love</div>
          <p className="blazer-text">The Salesforce Platform is the best way to create and scale trusted apps that customers want to use every day. Build powerful applications fast with Lightning Components, smarter with Einstein, and together with Salesforce DX. <strong>Learn more about the Salesforce platform.</strong></p>
          <div className="icons">
            <div className="row">
              <div className="force">
                <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-60x60-cloud.png?v=1"/>
                <div>
                  <h2>Force.com</h2>
                  <p>Build secure enterprise cloud apps 5x faster, with less code</p>
                </div>

              </div>
              <div className="lightning">
                <img src="https://res.cloudinary.com/hy4kyit2a/image/upload/lightning-homepage-blue-icon.png"/>
                <div>
                  <h2>Lightning</h2>
                  <p>Build apps faster using reusable components and powerful tools</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="heroku">
                <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-60x60-heroku.png?v=1"/>
                <div>
                  <h2>Heroku</h2>
                  <p>Build scalable apps with open languages and frameworks</p>
                </div>
              </div>
              <div className="einstein">
                <img src="https://res.cloudinary.com/hy4kyit2a/image/upload/einstein-homepage-icon.png"/>
                <div>
                  <h2>Einstein</h2>
                  <p>Build smarter apps with the world's most intelligent CRM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="community">
            Community
            <div>
              <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-35x35-events.png?v=2"/>
              <div>
                <h3>Upcoming Events</h3>
                <p>Register for upcoming Events and Webinars</p>
              </div>
            </div>
            <div>
              <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-35x35-questions.png?v=2"/>
              <div>
                <h3>Ask Questions</h3>
                <p>Get help when you need it from Salesforce & community experts</p>
              </div>
            </div>
            <div>
              <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-35x35-devgroup.png?v=2"/>
              <div>
                <h3>Join Your Local Dev Group</h3>
                <p>Meet other developers & get best practices for building on the Salesforce platform</p>
              </div>
            </div>
          </div>
          <div className="resources">
            Resources & Tools
            <div>
              <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-35x35-tutorials.png?v=2"/>
              <div>
                <h3>Get Free Tutorials</h3>
                <p>Trailhead is the fun and free way to learn Salesforce</p>
              </div>
            </div>
            <div>
              <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-35x35-forcecom-ide.png?v=2"/>
              <div>
                <h3>Force.com IDE</h3>
                <p>Develop and destroy Force.com apps with our free Eclipse IDE</p>
              </div>
            </div>
            <div>
              <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-35x35-blog.png?v=2"/>
              <div>
                <h3>Latest Blog Posts</h3>
                <p>Get the latest news and articles</p>
              </div>
            </div>
            <div>
              <img src="http://developer.salesforce.com/resources2/images/homepage/home-col-35x35-s1.png?v=1"/>
              <div>
                <h3>Getting Started</h3>
                <p>Get free tools & learn how to build your first app</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
