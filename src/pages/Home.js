import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { INFO } from '../constant';
 
function Homepage() {
    
   
    return (
      <>
        <Header />
        <div className="container-fluid p-0 wow fadeIn"    >
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="assets/img/carousel-1.jpg" alt="Image-carousel" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <h1 className="display-2 text-light mb-5 animated slideInDown">Learn To Drive With Confidence</h1>
                                        {/* <a href="/home" className="btn btn-primary py-sm-3 px-sm-5">Learn More</a> */}
                                        <a href="/courses" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                                        <a href="/services" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Services</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="assets/img/carousel-2.jpg" alt="carousel-2" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <h1 className="display-2 text-light mb-5 animated slideInDown">Safe Driving Is Our Top Priority</h1>
                                        {/* <a href="/home" className="btn btn-primary py-sm-3 px-sm-5">Learn More</a> */}
                                        <a href="/courses" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                                        <a href="/services" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Services</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    <div className="col-lg-4 wow fadeIn"    >
                        <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: '150px'}}>
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square bg-primary">
                                    <i className="fa fa-car text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5>Easy Driving Learn </h5>
                                    <span>Learning to drive can feel overwhelming at first, but breaking it down into smaller steps can make the process much easier.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: '150px'}}>
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square bg-primary">
                                    <i className="fa fa-users text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5>Experienced Instructor</h5>
                                    <span>We instruct on skills related to operating & maintaining vehicles, including driving safety.  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: '150px'}}>
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square bg-primary">
                                    <i className="fa fa-file-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5>Get Licence</h5>
                                    <span>Schedule and take the driving skills test, observes your ability to operate the vehicle safely.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/* ABOUT */}
        <div className="container-xxl py-3" id="about">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6    "    >
                        <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                            <img className="position-absolute w-100 h-100" src="assets/img/about-1.jpg" alt="" style={{objectFit: 'cover'}} />
                            <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/about-2.jpg" alt="" style={{width: '200px',height: '200px'}} />
                        </div>
                    </div>
                    <div className="col-lg-6    " data-wow-delay="0.5s">
                        <div className="h-100">
                            <h6 className="text-primary text-uppercase mb-2">About Us</h6>
  <h1 className="display-6 mb-4">We Help Students To Pass Test & Get A License On The First Try</h1>
  <p style={{ fontSize: "18px" }}>{INFO.about}</p>
  {/* <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p> */}
                            <div className="row g-2 mb-4 pb-2">
                                {/* <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2"></i>Fully Licensed
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-check text-primary me-2"></i>Online Tracking
                                </div> */}
                                <div className="col-sm-6">
                                   <h6> <i className="fa fa-check text-primary me-2"></i>Afordable Fee </h6>
                                </div>
                                <div className="col-sm-6">
                                    <h6><i className="fa fa-check text-primary me-2"></i>Best Trainers</h6>
                                </div>
                            </div>
                            <div className="row g-4">
                               
                            <div className="col-sm-6">
                            <a 
                                className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-3" 
                                href="tel:+919979977005"
                                onclick="return true;"> 
                                {/* <!-- Added a simple click handler to ensure the link works as expected --> */}
                                <span className="flex-shrink-0 btn-square bg-primary p-2">
                                <i className="fa fa-phone-alt text-white"></i>
                                </span>
                                <span className="px-4 fs-5">+9199799 77005</span>
                            </a>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
{/* COURSE */}
        <div className="container-xxl courses my-6 py-6 pb-0">
            <div className="container">
                <div className="text-center mx-auto mb-5    "     style={{maxWidth: "500px"}}>
                    <h6 className="text-primary text-uppercase mb-2">Tranding Courses</h6>
                    <h1 className="display-6 mb-4">Our Courses Upskill You With Driving Training</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {/* <div className="col-lg-4 col-md-6    "    >
                        <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                            <div className="text-center p-4 pt-0">
                                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">$99</div>
                                <h5 className="mb-3">Automatic Car Lessons</h5>
                                <p>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                                <ol className="breadcrumb justify-content-center mb-0">
                                    <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2"></i>Beginner</li>
                                    <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary me-2"></i>3 Week</li>
                                </ol>
                            </div>
                            <div className="position-relative mt-auto">
                                <img className="img-fluid" src="assets/img/courses-1.jpg" alt="courses-1" />
                                <div className="courses-overlay">
                                    <a className="btn btn-outline-primary border-2" href="/courses">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                     <div className="col-lg-4 col-md-6    " data-wow-delay="0.5s">
                        <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100 border border-2 border-secondary">
                            <div className="text-center p-4 pt-0">
                                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4 fw-bold">₹ 5000</div>
                                <h5 className="mb-3">Driving Lesson on SUV Car</h5>
                                 <p style={{ fontSize: "18px" }}>{INFO.suv}</p>
                                <ol className="breadcrumb justify-content-center mb-0">
                                    {/* <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2"></i>Beginner</li> */}
                                    <li className="breadcrumb-item medium fw-bold"><i className="fa fa-calendar-alt text-primary me-2"></i>15 DAYS / 30 MIN</li>
                                </ol>
                            </div>
                            <div className="position-relative mt-auto">
                                <img className="img-fluid" src="assets/img/courses-3.jpg" alt="courses-3" />
                                <div className="courses-overlay">
                                    {/* <a className="btn btn-outline-primary border-2" href="/courses">Read More</a> */}
                                </div>
                            </div>
                            {/* <!-- WhatsApp Button --> */}
                  <div className="text-center mt-4">
                  <button
                                                                className="btn btn-primary py-1 px-2 mb-2 fs-5"
                                                                type="button"
                                                                onClick={() => {
                                                                    const message = `Hello, I would like to know more about the SUV car driving lesson.`; // Your custom message
                                                                    const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
                                                                    window.open(`https://wa.me/919979977005?text=${encodedMessage}`, '_blank');
                                                                }}>  {INFO.eNow}
                    </button>
                  </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6    " data-wow-delay="0.3s">
                        <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100 border border-2 border-secondary">
                            <div className="text-center p-4 pt-0">
                                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4 fw-bold">₹ 4500</div>
                                <h5 className="mb-3">Driving Lesson on Hatchback Car</h5>
<p style={{ fontSize: "18px" }}>{INFO.hatchbk}</p>
                                <ol className="breadcrumb justify-content-center mb-0">
                                    {/* <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2"></i>Beginner</li> */}
                                    <li className="breadcrumb-item medium fw-bold"><i className="fa fa-calendar-alt text-primary me-2"></i>15 DAYS / 30 MIN</li>
                                </ol>
                            </div>
                            <div className="position-relative mt-auto">
                                <img className="img-fluid" src="assets/img/courses-2.jpg" alt="courses-2" />
                                <div className="courses-overlay">
                                    {/* <a className="btn btn-outline-primary border-2" href="/courses">Read More</a> */}
                                </div>
                            </div>
                             {/* <!-- WhatsApp Button --> */}
                  <div className="text-center mt-4">
                  <button
                                                                className="btn btn-primary py-1 px-2 mb-2 fs-5"
                                                                type="button"
                                                                onClick={() => {
                                                                    const message = `Hello, I would like to know more about the Hatchback car driving lesson.`; // Your custom message
                                                                    const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
                                                                    window.open(`https://wa.me/919979977005?text=${encodedMessage}`, '_blank');
                                                                }}>  {INFO.eNow}
                    </button>
                  </div>
                        </div>
                    </div>
                   
                 
                </div>
            </div>
        </div>
{/* FEATURE */}
        <div className="container-xxl py-3">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6    "    >
                        <h6 className="text-primary text-uppercase mb-2">Why Choose Us!</h6>
                        <h1 className="display-6 mb-4">Best Driving Training Agency In Your City</h1>
                        <p style={{ fontSize: "18px" }} className="mb-5">{INFO.bdDesc}</p>
                        <div className="row gy-5 gx-4">
                            <div className="col-sm-6 wow fadeIn"    >
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Fully Licensed</h5>
                                </div>
                                {/* <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span> */}
                            </div>
                            {/* <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Online Tracking</h5>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                            </div> */}
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Afordable Fee</h5>
                                </div>
                                {/* <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span> */}
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Best Trainers</h5>
                                </div>
                                {/* <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span> */}
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary me-3">
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Flexible Timing</h5>
                                </div>
                                {/* <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6    " data-wow-delay="0.5s">
                        <div className="position-relative overflow-hidden pe-5 pt-5 h-100" style={{minHeight: "400px"}}>
                            <img className="position-absolute w-100 h-100" src="assets/img/a1.jpg" alt="" style={{objectFit: "cover"}} />
                            <img className="position-absolute top-0 end-0 bg-white ps-3 pb-3" src="assets/img/a1.jpg" alt="" style={{width: "200px", height: "200px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

{/* SERVICES */}

        <div className="container-xxl py-5" style={{ backgroundColor: '#ffff' }} >
                <div className="container">
                    <div className="text-center mx-auto mb-5    "     style={{maxWidth: "500px"}}>
                        <h5 className="text-primary text-uppercase mb-2">Our Services</h5> 
                        <h6><big>Explore Our Comprehensive Range of Services</big></h6>
                    </div>
                    <div className="row justify-content-center gap-4">
                        <div className="col-lg-3 col-md-6     services-boader"    >
                            <div className="position-relative">
                            <div className="position-relative" style={{ height: '300px' }}>
                            <img
                                className="img-fluid position-absolute"
                                src="assets/img/allmotor.jpg"
                                alt="team-1"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                                    </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">{INFO.ourServicesCardTitle1}</h5>
                                    <big>{INFO.ourServicesCardText1}</big>
                                    <button
                                            className="btn btn-dark w-100 py-3 mt-3"
                                            type="button"
                                            onClick={() => {
                                                const message = `Hello, I would like to know more about ${INFO.ourServicesCardTitle1 }.`; // Your custom message
                                                const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
                                                window.open(`https://wa.me/919979977005?text=${encodedMessage}`, '_blank');
                                            }}>  {INFO.eNow}
</button>
                                   </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6     services-boader"    >
                            <div className="position-relative">
                            <div className="position-relative" style={{ height: '300px' }}>
                            <img
                                className="img-fluid position-absolute"
                                src="assets/img/tv.jpg"
                                alt="team-1"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                                    </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">{INFO.ourServicesCardTitle2}</h5>
                                    <big>{INFO.ourServicesCardText2}</big>
                                    <button
                                            className="btn btn-dark w-100 py-3 mt-3"
                                            type="button"
                                            onClick={() => {
                                                const message = `Hello, I would like to know more about ${INFO.ourServicesCardTitle2 }.`; // Your custom message
                                                const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
                                                window.open(`https://wa.me/919979977005?text=${encodedMessage}`, '_blank');
                                            }}>  {INFO.eNow}
</button>
                                   </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6     services-boader"    >
                            <div className="position-relative">
                            <div className="position-relative" style={{ height: '300px' }}>
                            <img
                                className="img-fluid position-absolute"
                                src="assets/img/13.jpg"
                                alt="team-1"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                                    </div>

                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">{INFO.ourServicesCardTitle3}</h5>
                                    <big>
  {INFO.ourServicesCardText3.split(', ').map((service, index) => (
    <span key={index}>
      {service}
      <br />
    </span>
  ))}
</big>                                    <button
                                            className="btn btn-dark w-100 py-3 mt-3"
                                            type="button"
                                            onClick={() => {
                                                const message = `Hello, I would like to know more about ${INFO.ourServicesCardTitle3 }.`; // Your custom message
                                                const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
                                                window.open(`https://wa.me/919979977005?text=${encodedMessage}`, '_blank');
                                            }}>  {INFO.eNow}
</button>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TESTINOMIAL */}
           

        <Footer />
      </>
    );
  }
  
export default Homepage  