import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import Workings from './Workings';
import Projects from './Projects';
import Priyanka from './priyanka.jpg';
import googleplus from './googleplus.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';

const routes = [
  {
    path: "/",
    active: true,
    exact:true,
    main: () => <Home />
  },
  {
    path: "/about-me",
    main: () => <AboutMe />
  },
  {
    path: "/projects",
    exact: true,
    main: () => <Projects />
  },
  {
    path: "/workings",
    main: () => <Workings />
  },
  {
    path: "/contact-me",
    main: () => <ContactMe />
  },
];

class App extends Component {

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  openNav() {
   document.getElementById("mySidenav").style.width = "150px";
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
           <div style={{ display: "flex" }}>
              <div
                style={{
                  padding: "0px",
                  width: "25%",
                  background: "#5c5a5a",
                  align: "center",
                }}>
                <div className="info">
                  <div className="text-center">
                    <div className="container">
                      <img src={Priyanka} className="rounded-circle img-responsive mr-0 mt-5" alt="Priyanka" width="70%" />
                    </div>
                  </div>
                  <div className="App">
                    <h5 align="center" className="text-warning" width="100%"> Priyanka Suresh </h5>
                    <p align="center" className="text-warning"> FRONT END DEVELOPER </p>
                  </div>
                </div>
                <div className="list">
                  <div className="screen">
                    <ul align="right" style={{ listStyleType: "none", padding: 0 }}>
                      <li className="text-white">
                        <NavLink activeClassName='active' exact to="/">Home</NavLink>
                      </li>
                      <li>
                       <NavLink activeClassName='active' to="/about-me">About Me</NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName='active' to="/projects">My Projects</NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName='active' to="/workings">My Workings</NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName='active' to="/contact-me">Contact Me</NavLink>
                      </li>
                     {/* <Redirect from="/" to="home" />  */}
                     
                      <a href="https://www.linkedin.com/in/priyanka-suresh-234761b8/">
                        <img className="linkedin" alt="linkedin" title="LinkedIn" src={linkedin} width="70" /> </a>
                      <a href="https://aboutme.google.com/u/0/?referer=gplus">
                        <img className="googleplus" alt="google+" title="Google+" src={googleplus} width="65" /> </a>
                      <a href="https://twitter.com/priyanka250495">
                        <img className="twitter" alt="twitter" title="Twitter" src={twitter} width="65" /> </a>
                    </ul>
                  </div>
                </div>
                <div className="mobileView">
                   <div id="mySidenav" className="sidenav">
                    <span className="closebtn" onClick={this.closeNav.bind(this)}>&times;</span> <br/>
                    <NavLink activeClassName='active' exact to="/">Home</NavLink>
                    <NavLink activeClassName='active' to="/about-me">About Me</NavLink>
                    <NavLink activeClassName='active' to="/projects">My Projects</NavLink>
                    <NavLink activeClassName='active' to="/workings">My Workings</NavLink>
                    <NavLink activeClassName='active' to="/contact-me">Contact Me</NavLink>
                  </div>
                  <span onClick={this.openNav.bind(this)}>&#9776; open</span>
                </div>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.sidebar}
                  />
                ))}
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </div>
            </div>
                  </div>
          </div>
        </Router>
      </div>
    );
  }
}
 
export default App;