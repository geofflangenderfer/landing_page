import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import logo from './logo.png';
import './App.css';

class Subscriber extends Component {
  render() {
    const url = "https://gmail.us20.list-manage.com/subscribe/post?u=93a24c57b92828c74706ef87e&amp;id=188b00a145";
    return (
      <div>
        <MailchimpSubscribe url={url} />
      </div>
    );
  }
}

function Html() {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <h1 style={{textAlign:"center", fontSize: "8vw"}}>
    minihacks.netlify.com
    </h1>
    <div className="landing-page">
      <div className="page-content">
        <div className="image-box">
          <img className="header-image"src={logo} alt=""/>
        </div>
        <p>Bringing the hackathon experience online</p>
        <a href="https://minihacksapp.netlify.com" target="_blank" rel="noopener noreferrer">Get Started</a>

      <div className="arrow">
        <a href="#your-hackathon-experience">&#8595;</a>
      </div>
      </div>
    </div>
    <div className="presentation">
      <h2 id="your-hackathon-experience">Your Hackathon Experience</h2>
      <ul>
        <li>Who had a good time at the hackathon?</li>
        <li>Who feels like they got better this weekend?</li>
      </ul>
      <h2 id="value-of-medium">Value of Medium</h2>
        <h4>
          Organizers get to: 
        </h4>
      <ul>
        <li>promote their brand</li> 
        <li>get product feedback</li> 
        <li>recruit new employees</li>
      </ul>
      <h4>
        Hackers get to have a lot of fun:
      </h4>
      <ul> 
        <li>nerves</li> 
        <li>excitement</li> 
        <li>working with new technology</li> 
        <li>developing highly marketable skills</li>
      </ul>
      <h2 id="the-problem-too-costly">The Problem: Too Costly</h2>
      <h4>
        Organizers: 
      </h4>
      <ul>
        <li>employees’ airfare/lodging/food</li> 
        <li>hiring logistics partners</li> 
        <li>renting space</li> 
        <li>catering food</li>
      </ul>
      <h4>
        Hackers: 
      </h4>
      <ul><li>commuting from our homes to downtown Austin: Philadelphia, Houston, Dallas, among others</li></ul>
      <h2 id="the-solution-minihacks">The Solution: MiniHacks</h2>
      <h4>
        Organizers can: 
      </h4>
      <ul><li>set up their hackathon</li> 
        <li>judge it</li> 
        <li>distribute prizes</li>
      </ul>
      <h4>
        Hackers can: 
      </h4>
      <ul>
        <li>find the right hackathon for them</li> 
        <li>register</li> 
        <li>compete</li> 
        <li>submit a project</li> 
        <li>get a prize payout</li> 
        <li>collaborate over zoom videoconferencing and slack chat without missing a beat</li>
      </ul>
      <h2 id="call-to-action">Call to Action</h2>
      <Subscriber/>
    </div>
    </>
  );
}
function App() {
  return (
    <Html />
  );
}

export default App;
