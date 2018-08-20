import React, { Component } from 'react';
import projects from './bg.jpg';
import { Jumbotron } from 'react-bootstrap';
import './App.css';

class Projects extends Component {

    render() {
        return (
            <div>

                <div className="admin-bg">
                    <img src={projects} alt="background" className="bg" />
                </div>

                
                    <div className="row">
                        <div className='col-md-8 order-md-5 mb-5'>
                            <Jumbotron>
                                <h4 className="text-danger"> <b> Check out the various apps that I have worked on ! </b> </h4>
                                <div className="scroll">
                                    <table className="table table-bordered table-collapsed ">
                                    <thead>
                                        <tr className="text-success">
                                            <th> # </th>
                                            <th> Project Title </th>
                                            <th> Technologies Used </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="text-primary">
                                            <td> 1 </td>
                                            <td> User Contact form  </td>
                                            <td> HTML, CSS and JavaScript </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 2 </td>
                                            <td> CRUD operations with user contact form  </td>
                                            <td> HTML, CSS and JavaScript </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 3 </td>
                                            <td> To-do list  </td>
                                            <td> HTML, CSS and JavaScript </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 4 </td>
                                            <td> RestAPI  </td>
                                            <td> HTML, CSS and JavaScript </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 5 </td>
                                            <td> Spotify Search  </td>
                                            <td> HTML, CSS and JavaScript </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 6 </td>
                                            <td> Gulp   </td>
                                            <td> ES6 </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 7 </td>
                                            <td> Changing initial state   </td>
                                            <td> ReactJS and Redux </td>
                                        </tr>

                                        <tr className="text-primary">
                                            <td> 8 </td>
                                            <td>  User Contact form   </td>
                                            <td> ReactJS and Redux </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 9 </td>
                                            <td>  User form  </td>
                                            <td> ReactJS and Redux </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 10 </td>
                                            <td>  Creating an API  </td>
                                            <td> ES6, nodeJS and Express </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 11 </td>
                                            <td>  Create API and perform CRUD operations  </td>
                                            <td> ES6, nodeJS, Express and Postman </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 12 </td>
                                            <td> User Details </td>
                                            <td> ReactJS, ES6, nodeJS and Express </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 13 </td>
                                            <td> Vending Machine </td>
                                            <td> HTML, CSS, JavaScript and Bootstrap </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 14 </td>
                                            <td> Task Skillset Repository </td>
                                            <td> ReactJS, Redux, react-bootstrap </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 15 </td>
                                            <td> Push data into mongoDB </td>
                                            <td> ES6, nodeJS, Express and mongoDB </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 16 </td>
                                            <td> Send POST response from GoogleAPI  </td>
                                            <td> ES6, nodeJS and Express </td>
                                        </tr>
                                        <tr className="text-primary">
                                            <td> 17 </td>
                                            <td> Hotel room reservation </td>
                                            <td> ReactJS, Redux, Bootstrap and reactstrap </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Jumbotron>
                        </div>
                 
                </div>
            </div>
        )
    }
}

export default Projects;

