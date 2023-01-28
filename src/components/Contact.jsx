import React from 'react';
import '../styles/Contact.css'

const Contact = ({ locations }) => {
    return (
        <main id="contact">
            <h1 className="text-center border-bottom border-secondary border-3 w-100 p-3">Contact Us</h1>
            {locations.map((location, index) => (
                <div id="contact-card" key={location._id} className="card mx-auto w-75 mb-3">
                    <div className="row flex-shrink-1 g-0">
                        <h2 className="card-header p-3 fs-3 col-sm-4 bg-success-subtle fw-semibold">{location.location}</h2>
                        <div className="col-sm-8">
                            <address className="card-body">
                                <p className="card-text mb-2 fs-4">Address: {location.address} {location.postcode}</p>
                                <p className="card-text mb-2 fs-4">Phone: {location.phone}</p>
                                <p className="card-text mb-2 fs-4">Email: {location.email}</p>
                            </address>
                        </div>
                    </div>
                </div>
            ))}
            </main>
    )
}

export default Contact