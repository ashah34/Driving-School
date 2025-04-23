import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
 
function Teampage() {
    return (
        <>
            <Header />
            <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Our Team</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="/home">Home</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
            </div>
            
            <Footer />

        </>
    )
}

export default Teampage