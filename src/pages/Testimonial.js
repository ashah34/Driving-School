import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Testimonialpage() {

    const testimonials = [
        {
          quote:
            "I had an excellent experience with this driving school. The instructors were patient, professional, and focused on building confidence and road safety skills.",
          author: "Nitin Sahu",
           time:"1 weeks ago"
        },
        {
          quote:
            "The driving lessons were thorough and easy to understand. I passed my test confidently thanks to their expert guidance.",
          author: "Amit Kumar",
          time:"2 weeks ago"
        },
        {
            quote:
              "Good experience of learning car from bahuchar motor driving Ravi Bhai is full supportive almost learn car driving",
            author: "Monali Gajera",
              time:"1 week ago"
          },
          {
            quote:
              "Helpful people and teaches you to drive car quickly. Also gives helpful advice regarding two and four-wheeler driving.",
            author: "Rudraraj Patel",
              time:"3 weeks ago"
          },
          {
            quote:
              "Ravi bhai helped me a lot and gave me perfect guidance of learning and driving a car within a span of 15 days ….overall great experience",
            author: "Anushka Patel",
              time:"5 months ago"
          },
        // Add more testimonials here
      ];

    return (
        <>
            <Header />
            <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Testimonial</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="/home">Home</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-xxl py-3">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                        {/* <h6 className="text-primary text-uppercase mb-2">Testimonial</h6> */}
                        <h1 className="display-6 mb-4">What Our Clients Say!</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="testimonial-carousel owl-carousel">
                                {testimonials.map((testimonial, index) => (
                                    <div className="testimonial-item text-center border p-4 mb-4 rounded shadow-sm" key={index} style={{border: '1px solid #ddd', borderRadius: '10px'}}>
                                        <div className="position-relative mb-5">
                                            <img className="img-fluid rounded-circle mx-auto" src="assets/img/person-icon.png" alt="testimonial-1" />
                                            <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: "60px", height: "60px"}}>
                                                <i className="fa fa-quote-left fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <p className="fs-5">{testimonial.quote}</p>
                                        <hr className="w-25 mx-auto" />
                                        <h5>{testimonial.author}</h5>
                                        {/* {testimonial.time && <span>{testimonial.time}</span>} */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Testimonialpage;
