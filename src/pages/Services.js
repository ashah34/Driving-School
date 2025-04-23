import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { INFO } from '../constant';
 
function Productpage() {
    return (
        <>
              <Header />
            <div className="container-fluid page-header py-6 my-2 mt-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Our Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="/home">Home</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Our Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-xxl py-3">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                        {/* <h6 className="text-primary text-uppercase mb-2">Our Sevices</h6> */}
                        {/* <h1 className="display-6 mb-4">{staticData.ourServiceTitle}</h1> */}
                    </div>
                    <div className="row justify-content-center gap-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp services-boader" data-wow-delay="0.1s">
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
                        <div className="col-lg-3 col-md-6 wow fadeInUp services-boader" data-wow-delay="0.1s">
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
                        <div className="col-lg-3 col-md-6 wow fadeInUp services-boader" data-wow-delay="0.1s">
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
            <Footer />


    </>
)}

export default Productpage