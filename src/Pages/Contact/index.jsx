import React from 'react';
import './contact.css';


function Contact() {
    
    return (
        <div className="contact-page">

            <main className="contact-content">
                <h2>Contact</h2>

                <div className="contact-info">
                    <h3>Address</h3>
                    <p>123 Main St</p>
                    <p>Springfield, IL 62701</p>
                    <p>United States</p>

                    <h3>Phone</h3>
                    <p>Five 1: 555-555-5555</p>
                    <p>Five 2: 555-555-5555</p>
                    <p>Mobile 1: 555-555-5556</p>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" ></textarea>
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
            </main>

</div>
    );
}

export default Contact;