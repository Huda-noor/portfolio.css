import React from 'react'
import './Contact.css' // Link to CSS file

const Contact = () => {
  return (
    <div id="Contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-map">
            <iframe
              width="100%"
              height="100%"
              className="map-frame"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.app.goo.gl/gK4rRmePhpJuSGtx8"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="contact-details">
              <div className="address">
                <h2 className="contact-title">ADDRESS</h2>
                <p>Shamsi Society Near Malir Halt Karachi</p>
              </div>
              <div className="contact-info">
                <h2 className="contact-title">EMAIL</h2>
                <a href="mailto:sweethudanoor@gmail.com" className="contact-email">sweethudanoor@gmail.com</a>
                <h2 className="contact-title">PHONE</h2>
                <p>+92-3170109477</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <h2 className="form-title">Contact</h2>
            <p className="form-description">Feel Free To Contact Me</p>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-textarea" />
            </div>
            <button className="form-button">Send Message</button>
            <p className="form-note">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
