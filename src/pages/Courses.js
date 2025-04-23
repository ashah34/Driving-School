import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { INFO } from "../constant";

function Coursespage() {
  return (
    <>
      <Header />

      <div class="container-fluid page-header py-6 my-6 mt-0 wow fadeIn">
        <div class="container text-center">
          <h1 class="display-4 text-white animated slideInDown mb-4">
            Courses
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <a class="text-white" href="/home">
                  Home
                </a>
              </li>
              <li
                class="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Courses
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="container-xxl py-3">
        <div className="container-xxl courses my-2 py-3 pb-0">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <h6 className="text-primary text-uppercase mb-2">
                Tranding Courses
              </h6>
              <h1 className="display-6 mb-4">
                Our Courses Upskill You With Driving Training
              </h1>
            </div>
            <div className="row g-4 justify-content-center">
            
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100 border border-2 border-secondary">
                  <div className="text-center p-4 pt-0">
                    <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4 fw-bold">
                      ₹ 5000
                    </div>
                    <h5 className="mb-3">Driving Lesson on SUV Car</h5>
                    <big>{INFO.suv}</big>
                    <ol className="breadcrumb justify-content-center mb-0 mt-4">
                      {/* <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2"></i>Beginner</li> */}
                      <li className="breadcrumb-item medium fw-bold">
                        <i className="fa fa-calendar-alt text-primary me-2"></i>
                        15 DAYS / 30 MIN
                      </li>
                    </ol>
                  </div>
                  <div className="position-relative mt-auto">
                    <img
                      className="img-fluid"
                      src="assets/img/c22.jpg"
                      alt="courses-3"
                    />
                  </div>
                  {/* <!-- WhatsApp Button --> */}
                  <div className="text-center mt-4">
                  
                      <button
                                                                className="btn btn-primary py-1 px-2 mb-2 fs-5"
                                                                type="button"
                                                                onClick={() => {
                                                                    const message = `Hello, I would like to know more about the SUV driving lesson.`; // Your custom message
                                                                    const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
                                                                    window.open(`https://wa.me/919979977005?text=${encodedMessage}`, '_blank');
                                                                }}>  {INFO.eNow}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100 border border-2 border-secondary">
                  <div className="text-center p-4 pt-0">
                    <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4 fw-bold">
                      ₹ 4500
                    </div>
                    <h5 className="mb-3">Driving Lesson on Hatchback Car</h5>
                    <big>{INFO.hatchbk}</big>
                    <ol className="breadcrumb justify-content-center mb-0 mt-4">
                      {/* <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2"></i>Beginner</li> */}
                      <li className="breadcrumb-item medium fw-bold">
                        <i className="fa fa-calendar-alt text-primary me-2"></i>
                        15 DAYS / 30 MIN
                      </li>
                    </ol>
                  </div>
                  <div className="position-relative mt-auto">
                    <img
                      className="img-fluid"
                      src="assets/img/c11.jpg"
                      alt="courses-2"
                    />
                  </div>
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
      </div>
      <Footer />
    </>
  );
}

export default Coursespage;
