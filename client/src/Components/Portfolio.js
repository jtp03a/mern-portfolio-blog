import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

function Portfolio(props) {
    return (
        <div className="section section-light">
            <div className="section-content" id={props.id}>
                <div className="card m-auto" id="portfolioCard">
                    <div className="card-header" id="cardHeader">
                        <h1>{props.title}</h1>
                        <p>Hover mouse over slide to pause</p>
                    </div>
                    <div className="card-body">
                        <Carousel>
                            {/* Add or remove carousel.item blocks depending on how many work items you want to show in this section  */}
                            <Carousel.Item className="workCarousel" interval={50000}>
                                <h4>Skills</h4>
                                <div className="container d-flex justify-content-center">
                                    <div className="row ">
                                        <div className="col">
                                            <ul className="list-group">
                                                <li className="list-group-item">Javascript<br></br>&#9733;&#9733;&#9733;&#9734;&#9734;</li>
                                                <li className="list-group-item">HTML<br></br> &#9733;&#9733;&#9733;&#9733;&#9734;</li>
                                                <li className="list-group-item ">CSS<br></br> &#9733;&#9733;&#9734;&#9734;&#9734;</li>
                                                <li className="list-group-item">Bootstrap<br></br> &#9733;&#9733;&#9734;&#9734;&#9734;</li>
                                                <li className="list-group-item">React<br></br> &#9733;&#9733;&#9733;&#9734;&#9734;</li>
                                                <li className="list-group-item">Express.js<br></br> &#9733;&#9733;&#9733;&#9734;&#9734;</li>
                                                <li className="list-group-item ">Node.js<br></br> &#9733;&#9733;&#9733;&#9734;&#9734;</li>
                                                <li className="list-group-item">MongoDB<br></br> &#9733;&#9733;&#9734;&#9734;&#9734;</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul>
                                                <li className="list-group-item">Kubernetes<br></br>&#9733;&#9733;&#9734;&#9734;&#9734;</li>
                                                <li className="list-group-item">Docker<br></br>&#9733;&#9733;&#9734;&#9734;&#9734;</li>
                                                <li className="list-group-item">SonarQube<br></br>&#9733;&#9733;&#9734;&#9734;&#9734;</li>
                                                <li className="list-group-item">TDD<br></br>&#9733;&#9733;&#9734;&#9734;&#9734;</li>
                                                <li className="list-group-item">Jira<br></br>&#9733;&#9733;&#9734;&#9734;&#9734;</li>
                                                <li className="list-group-item">Confluence<br></br>&#9733;&#9734;&#9734;&#9734;&#9734;</li>
                                                <li className="list-group-item">Scrum<br></br>&#9733;&#9733;&#9733;&#9734;&#9734;</li>
                                                <li className="list-group-item">SQL<br></br>&#9733;&#9733;&#9733;&#9734;&#9734;</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="workCarousel" interval={50000}>
                            <h4>Work</h4>
                                <div className="container d-flex justify-content-center">
                                    <div className="row ">
                                        <div className="col">
                                            <ul className="list-group">
                                                <li className="list-group-item">July 2020-Jan 2021 - Lead Developer - USAF</li>
                                                <li className="list-group-item">Nov 2018-Present - Cybersecurity Test Lead - USAF</li>
                                                <li className="list-group-item">Jan 2018-Nov 2018 - Cybersecurity Student - USAF</li>
                                                <li className="list-group-item">Jul 2018-Dec 2018 - Developer - USAF</li>
                                                <li className="list-group-item">Sep 2015-Jul 2018 - Lead Intel Analyst - USAF</li>
                                                <li className="list-group-item">Sep 2012-Sep 2015 - Linguist - USAF</li>
                                                <li className="list-group-item">Mar 2011-Sep 2012 - Linguist Student - USAF</li>
                                                <li className="list-group-item">Jan 2009-Mar 2011 - Software Engineer<br></br>Hendrick Medical Center, Abilene TX</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Portfolio;