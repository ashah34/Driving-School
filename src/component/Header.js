import React from 'react';
import { NavLink } from "react-router-dom";
import { INFO } from '../constant';

function Header() {
    return (
        <>
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
        <div className="container-fluid bg-dark text-light p-0">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <small className="fa fa-map-marker-alt text-primary me-2"></small>
                        <b>{INFO.addresss}</b>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center">
                        <small className="far fa-clock text-primary me-2"></small>
                        <small>{INFO.timing}</small>
                        </div>
                </div>
                <div className="col-lg-5 px-2 text-end">
                <div className="h-100 d-inline-flex align-items-center me-4">
    <small className="fa fa-phone-alt text-primary me-2"></small>
    <small>
        <strong>
            <a href={`tel:${INFO.phoneNumber}`} className="text-decoration-none text-primary">
                {INFO.phoneNumber}
            </a>
        </strong>
    </small>
</div>

                    {/* <div className="h-100 d-inline-flex align-items-center mx-n2">
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.facebook.com/YourPageName" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook-f"></i>
</a>
<a className="btn btn-square btn-link rounded-0" href="https://www.instagram.com/YourProfileName" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram"></i>
</a>
                    </div> */}
                </div>
            </div>
        </div>


<nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
  <NavLink to="/home" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
    {/* <h2 className="m-0"><i className="fa fa-car text-primary me-2"></i>Drivin</h2> */}
    <h3 className="m-0"><img src="assets/img/jbms.JPG" alt="Car Icon"   className="me-2" style={{ height: '50px' }} />
    Drivin</h3>

  </NavLink>
  <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
      <NavLink to="/home" className="nav-item nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
      <NavLink to="/services" className="nav-item nav-link" activeClassName="active">Our Services</NavLink>
      <NavLink to="/courses" className="nav-item nav-link" activeClassName="active">Courses</NavLink>
      <NavLink to="/testimonial" className="nav-item nav-link" activeClassName="active">Testimonial</NavLink>

      {/* <div className="nav-item dropdown">
        <a href="/home" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
        <div className="dropdown-menu bg-light m-0">
          <NavLink to="/feature" className="dropdown-item" activeClassName="active">Features</NavLink>
          {/* <NavLink to="/testimonial" className="dropdown-item" activeClassName="active">Testimonial</NavLink> */}
        {/* </div> */}
      {/* </div> */} 
      <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact Us</NavLink>
    </div>
  </div>
</nav>

        </>

    )
} 

export default Header