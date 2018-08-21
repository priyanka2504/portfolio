import React, { Component } from 'react';
import './App.css';
import sixth from './sixth.mov';
import eleventh from './eleventh.mov';
import thirteenth from './thirteenth.mov';
import fourteenth from './fourteenth.mov';
import sixteenth from './sixteenth.mov';
import seventeenth from './seventeenth.mov';
import Background from './bg.jpg';

class Workings extends Component {

    close6() {
        var modal = document.getElementById('myModal6');
        modal.style.display = "none";
    }

    sixth() {
        var modal = document.getElementById('myModal6');
        modal.style.display = "block";
    }

    close11() {
        var modal = document.getElementById('myModal11');
        modal.style.display = "none";
    }

    eleventh() {
        var modal = document.getElementById('myModal11');
        modal.style.display = "block";
    }

    close13() {
        var modal = document.getElementById('myModal13');
        modal.style.display = "none";
    }

    thirteenth() {
        var modal = document.getElementById('myModal13');
        modal.style.display = "block";
    }

    close14() {
        var modal = document.getElementById('myModal14');
        modal.style.display = "none";
    }

    fourteenth() {
        var modal = document.getElementById('myModal14');
        modal.style.display = "block";
    }

    close16() {
        var modal = document.getElementById('myModal16');
        modal.style.display = "none";
    }

    sixteenth() {
        var modal = document.getElementById('myModal16');
        modal.style.display = "block";
    }

    close17() {
        var modal = document.getElementById('myModal17');
        modal.style.display = "none";
    }

    seventeenth() {
        var modal = document.getElementById('myModal17');
        modal.style.display = "block";
    }

    render() {
        return (
            <div>
               
                <div className="workings" width="100%">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="hovereffect" onClick={this.sixth.bind(this)}>
                                    <video ref="sixth" data-toggle="modal" data-target="#exampleModal" width="280" height="280" controls>
                                        <source src={sixth} width="280" height="280" type="video/mp4" />
                                    </video>
                                    <div id="sixth" className="overlay">
                                        <p> Create tasks using Gulp (Task Runner). </p>
                                    </div>
                                </div>

                                <div id="myModal6" className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={this.close6.bind(this)}>&times;</span>
                                        <video ref="sixth" data-toggle="modal" data-target="#exampleModal" controls>
                                            <source src={sixth} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="hovereffect" onClick={this.eleventh.bind(this)}>
                                    <video ref="eleventh" data-toggle="modal" data-target="#exampleModal" width="280" height="280" controls>
                                        <source src={eleventh} width="280" height="280" type="video/mp4" />
                                    </video>
                                    <div id="eleventh" className="overlay">
                                        <p> An API is created and all fetch methods are performed and tested using Postman </p>
                                    </div>
                                </div>
                                <div id="myModal11" className="modal">

                                    <div className="modal-content">
                                        <span className="close" onClick={this.close11.bind(this)}>&times;</span>
                                        <video ref="eleventh" data-toggle="modal" data-target="#exampleModal" controls>
                                            <source src={eleventh} type="video/mp4" />
                                        </video>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="hovereffect" onClick={this.thirteenth.bind(this)}>
                                    <video ref="thirteenth" data-toggle="modal" data-target="#exampleModal" width="280" height="280" controls>
                                        <source src={thirteenth} width="280" height="280" type="video/mp4" />
                                    </video>

                                    <div id="thirteenth" className="overlay">
                                        <p> Vending Machine with 6 items and initial quantity, which decreases on each purchase. </p>
                                    </div>
                                </div>
                                <div id="myModal13" className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={this.close13.bind(this)}>&times;</span>
                                        <video ref="thirteenth" data-toggle="modal" data-target="#exampleModal" controls>
                                            <source src={thirteenth} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="hovereffect" onClick={this.fourteenth.bind(this)}>
                                    <video ref="fourteenth" data-toggle="modal" data-target="#exampleModal" width="280" height="280" controls>
                                        <source src={fourteenth} width="280" height="280" type="video/mp4" />
                                    </video>
                                    <div id="fourteenth" className="overlay">
                                        <p> Employee details are got using a form and displayed on the next page in a table with buttons to view, edit and delete. </p>
                                    </div>
                                </div>
                                <div id="myModal14" className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={this.close14.bind(this)}>&times;</span>
                                        <video ref="fourteenth" data-toggle="modal" data-target="#exampleModal" controls>
                                            <source src={fourteenth} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="hovereffect" onClick={this.sixteenth.bind(this)}>
                                    <video ref="sixteenth" data-toggle="modal" data-target="#exampleModal" width="280" height="280" controls>
                                        <source src={sixteenth} width="280" height="280" type="video/mp4" />
                                    </video>
                                    <div id="sixteenth" className="overlay">
                                        <p> A POST response is sent from GoogleAPI based on POST request. </p>
                                    </div>
                                </div>
                                <div id="myModal16" className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={this.close16.bind(this)}>&times;</span>
                                        <video ref="sixteenth" data-toggle="modal" data-target="#exampleModal" controls>
                                            <source src={sixteenth} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="hovereffect" onClick={this.seventeenth.bind(this)}>
                                    <video ref="seventeenth" data-toggle="modal" data-target="#exampleModal" width="280" height="280" controls>
                                        <source src={seventeenth} width="280" height="280" type="video/mp4" />
                                    </video>
                                    <div id="seventeenth" className="overlay">
                                        <p> Hotel room reservation in whichi booked rooms are displayed and customers can choose room acoordingly. </p>
                                    </div>
                                </div>
                                <div id="myModal17" className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={this.close17.bind(this)}>&times;</span>
                                        <video ref="seventeenth" data-toggle="modal" data-target="#exampleModal" controls>
                                            <source src={seventeenth} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Workings;
