import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { INFO } from '../constant';
 
function Aboutpage() {
    return (
    <>
        <Header />
    
        <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <h1 className="display-4 text-white animated slideInDown mb-4">About Us</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a className="text-white" href="/home">Home</a></li>
                        <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-3">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: "400px"}}>
                            <img className="position-absolute w-100 h-100" src="assets/img/about-1.jpg" alt="about-1" style={{objectFit: "cover"}} />
                            <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/about-2.jpg" alt="about-2" style={{width: "200px", height: "200px"}} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="h-100">
                            {/* <h6 className="text-primary text-uppercase mb-2">About Us</h6> */}
                            <h1 className="display-6 mb-4">OUR HISTORY AND PRINCIPLES</h1>
                            <big>{INFO.about}</big><br></br>
                            <br></br><big>Lessons will be arranged at your convenience and we can pick you up and drop you off at the start and the end of the lesson at any local location you desire, be it home, work, school, college  you choose (Please inform your Instructor in advance)! You will retain the same instructor where possible, should you choose to, throughout your series of lessons to maintain continuity and so that you can develop a relationship of trust with your driving instructor.</big>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="container-xxl py-6">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                    <h6 className="text-primary text-uppercase mb-2"></h6>
                    <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
                </div>
                <div className="row g-0 team-items">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item position-relative">
                            <div className="position-relative">
                                <img className="img-fluid" src="assets/img/team-1.jpg" alt="team-1" />
                                <div className="team-social text-center">
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="mt-2">Full Name</h5>
                                <span>Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item position-relative">
                            <div className="position-relative">
                                <img className="img-fluid" src="assets/img/team-2.jpg" alt="team-2" />
                                <div className="team-social text-center">
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="mt-2">Full Name</h5>
                                <span>Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item position-relative">
                            <div className="position-relative">
                                <img className="img-fluid" src="assets/img/team-3.jpg" alt="team-3" />
                                <div className="team-social text-center">
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="mt-2">Full Name</h5>
                                <span>Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item position-relative">
                            <div className="position-relative">
                                <img className="img-fluid" src="assets/img/team-4.jpg" alt="team-4" />
                                <div className="team-social text-center">
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-outline-primary border-2 m-1" href="/about"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="mt-2">Full Name</h5>
                                <span>Trainer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <Footer />

    </>
)}

export default Aboutpage