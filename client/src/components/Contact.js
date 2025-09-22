import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xnnbepod"); 

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section section">
        <div className="section-content">
            <div className="contact-container">
                <h2 className="section-title">Thanks for your message!</h2>
                <p className="contact-intro">I'll get back to you shortly.</p>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section section">
      <div className="section-content">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-container">
            <p className="contact-intro">
              Have a question or want to work together? Leave your details below.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className="submit-button" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;