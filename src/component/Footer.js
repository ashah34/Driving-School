import React from "react";
import { INFO } from "../constant";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow ">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">{INFO.mTitle}</h4>
              <p>{INFO.mDesc}</p>
            </div>
            <div className="col-lg-6 col-md-6">
              <h4 className="text-white mb-4">Get In Touch</h4>
              {/* <ul className="mb-2 list-unstyled">
  <li>
    <i className="fa fa-map-marker-alt me-3"></i>
    <a href="https://www.google.com/maps/dir//FF-4,+Devarshi+Complex,+Ajanta+Ellora+Rd,+nr.+TULIP+BUNGLOWS,+Thaltej,+Ahmedabad,+Gujarat+380054,+India/@23.056231,72.443181,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e8512f29ecf1b:0x2b0c590d1ac50cf8!2m2!1d72.5255826!2d23.0562524?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
      FF-4, Devarshi Complex
    </a>
  </li>
  <li> <a href="https://www.google.com/maps/dir//FF-4,+Devarshi+Complex,+Ajanta+Ellora+Rd,+nr.+TULIP+BUNGLOWS,+Thaltej,+Ahmedabad,+Gujarat+380054,+India/@23.056231,72.443181,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e8512f29ecf1b:0x2b0c590d1ac50cf8!2m2!1d72.5255826!2d23.0562524?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
  Nr. Tulip Bungalows
    </a></li>
  <li> <a href="https://www.google.com/maps/dir//FF-4,+Devarshi+Complex,+Ajanta+Ellora+Rd,+nr.+TULIP+BUNGLOWS,+Thaltej,+Ahmedabad,+Gujarat+380054,+India/@23.056231,72.443181,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e8512f29ecf1b:0x2b0c590d1ac50cf8!2m2!1d72.5255826!2d23.0562524?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
  Thaltej, Ahmedabad, Gujarat 380054, India
    </a></li>
</ul> */}
<ul className="mb-2 list-unstyled">
  <li>
    <i className="fa fa-map-marker-alt me-3"></i>
    <a rel="noreferrer" href="https://www.google.com/maps/dir//FF-4,+Devarshi+Complex,+Ajanta+Ellora+Rd,+nr.+TULIP+BUNGLOWS,+Thaltej,+Ahmedabad,+Gujarat+380054,+India/@23.056231,72.443181,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e8512f29ecf1b:0x2b0c590d1ac50cf8!2m2!1d72.5255826!2d23.0562524?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" style={{ color: 'white' }}>
      FF-4, Devarshi Complex, Nr. Tulip Bungalows, Thaltej, Ahmedabad, Gujarat 380054, India
    </a>
  </li>
</ul>


              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>
                <a href={`tel:99799 77005`} className="text-white">
                  {INFO.phoneNumber}
                </a>
              </p>
              <p class="mb-2 ">
                <i class="fa fa-envelope me-3"></i>
                <a
                  href="mailto:jaybahucharmotordriving7005@gmail.com"
                  className="text-white"
                >
                  {INFO.email}
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              {/* <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="/courses">
                Our Courses
              </a> */}

           
              <NavLink to="/home" className="nav-item nav-link" activeClassName="active"  style={{ color: 'white' }} >Home</NavLink>
              <NavLink to="/about" className="nav-item nav-link" activeClassName="active" style={{ color: 'white' }}>About</NavLink>
                <NavLink to="/services" className="nav-item nav-link" activeClassName="active" style={{ color: 'white' }}>Our Services</NavLink>
                    <NavLink to="/courses" className="nav-item nav-link" activeClassName="active" style={{ color: 'white' }}>Courses</NavLink>
                   
            </div>

            {/* <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <h6 className="text-white mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light me-1" href="/home"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light me-1" href="/home"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light me-1" href="/home"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-light me-0" href="/home"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>

      <div className="container-fluid copyright text-light py-4 wow ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center  mb-3 mb-md-0">
              &copy;
               {/* <a href="/home"> */}
               {INFO.cp +"   " + INFO.title + " "}
               {/* </a>, */}
              All rights Reserved.
            </div>

          </div>
        </div>
      </div>

      {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a> */}
      <button
  className="btn btn-lg btn-primary btn-lg-square back-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  ↑
</button>

    </>
  );
}

export default Footer;
