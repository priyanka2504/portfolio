import React, { Component } from 'react';
import Background from './bg.jpg';
import './App.css';
import technologies from './technologies.JPG';

class AboutMe extends Component {
    render() {
        return (

            <div>
              

                <div className="AboutMe">


                    <h5 className="text-dark"><b> I work as a Project Engineer in Wipro Technologies in Chennai.
                    I have been active in this field for over 6 months.
                    I am a very enthusiastic developer who has worked on various technologies.
                    As I am still young and learning in this industry,
I am always on a lookout for new and exciting challenges to build real world applications.</b> </h5>

                    <h5 className="text-dark"> <b> These are the Technologies that I know and have worked on: </b> </h5>


                   
                   <div className="technologies">
                        <img src={technologies} alt="technologies" width="85%" height="400" />
                    </div>
                  </div>
             

            </div>

        )

    }

}



export default AboutMe;
