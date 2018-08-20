import React, { Component } from 'react';
import Background from './bg.jpg';
import './App.css';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div align="center">
               <div className="admin-bg">
                    <img src={Background} alt="background" className="bg" />
                </div>
                <div className="home">
                <Jumbotron >
                    <h1 className="text-primary"> <b> Hey, I am Priyanka ! :) </b> </h1>
                    <h2 className="text-primary"> <b> Welcome to my portfolio </b> </h2>
                </Jumbotron>

                </div>

                <div>
                </div>

            </div>
        )
    }
}

export default Home;