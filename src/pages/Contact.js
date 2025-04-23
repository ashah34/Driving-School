import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { INFO } from "../constant";

function Contactpage() {
    const phoneNumber = ''
    const ClickToContact= () =>{
    
    }
  return (
    <>
      <Header />
      <div
        className="container-fluid page-header py-6 my-6 mt-0">
        <div className="container text-center">
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/home">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-3">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6  "
              
              style={{ minHeight: "450px" }}
            >
              <div className="position-relative h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291625.1245853585!2d72.41493399983852!3d23.020474096845316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sThaltej%2C%20Ahmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1736749197714!5m2!1sen!2sin"
                  frameborder="0"
                  style={{ minHeight: "450px", border: "0" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  title="Google Maps view of Thaltej,"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6  " data-wow-delay="0.5s">
              <h1 className="display-6 mb-4"> Contact Us</h1>
              <p className="mb-4 fs-5"> {INFO.contactDesc}</p>
              <form onSubmit={ClickToContact()}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                      <label for="name">Your Name</label>
                      <div className="invalid-feedback">
                        Please provide your name.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0 bg-light"
                        id="email"
                        placeholder="Your Email"
                        
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      />
                      <label for="email">Your Email</label>
                      <div className="invalid-feedback">
                        Please provide a valid email address.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control border-0 bg-light"
                        id="phone"
                        placeholder="Your Mobile"
                        required
                        pattern="^[0-9]{10}$"
                        minLength="0"
                        maxLength="15"
                      />
                      <label for="phone">Your Mobile</label>
                      <div className="invalid-feedback">
                        Please provide a valid phone number (10 digits).
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0 bg-light"
                        placeholder="Leave a message here"
                        id="message"
                        // style="height: 150px;"
                        
                      ></textarea>
                      <label for="message">Message</label>
                      <div className="invalid-feedback">
                        Please leave a message.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                  {/* <!-- Add WhatsApp link using the contact number --> */}
<button
  className="btn btn-primary py-3 px-5 fs-5"
  type="button"
  onClick={() => {
    const clientPhone = document.getElementById('phone').value;
    const clientName = document.getElementById('name').value;

    if (clientPhone && /^[0-9]{10}$/.test(clientPhone)) {
        const message = `Hello Ravi,\nCould you kindly contact me at your earliest convenience on this number ${clientPhone} \n ${clientName}  \n Thank you!`;
        // const message = `Hello Ravi,%0ACould you kindly contact me at your earliest convenience on this number ${clientPhone}?%0A${clientName}%0AThank you!`;
        // const message = `Hello Ravi,Could you kindly contact me at your earliest convenience on this number ${clientPhone} . Thank you!`;
        const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
      window.open(`https://wa.me/919979977005?text=${encodedMessage}`, '_blank');
    } else {
      alert('Please provide a valid 10-digit phone number');
    }
    // Clear the phone field
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';// Clear the phone field
    document.getElementById('name').value = '';// Clear the phone field
    document.getElementById('message').value = '';
  }}
>
  SEND !
</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactpage;
