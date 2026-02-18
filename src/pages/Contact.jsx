import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact">
      {/* Header */}
      <section className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have questions? We'd love to hear from you</p>
      </section>

      <div className="contact-container">
        {/* Contact Information */}
        <section className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-items">
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>
                  123 Fitness Avenue
                  <br />
                  Health City, HC 12345
                </p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>
                  (555) 123-4567
                  <br />
                  (555) 987-6543
                </p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>
                  info@fitlifegym.com
                  <br />
                  support@fitlifegym.com
                </p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🕐</span>
              <div>
                <h4>Business Hours</h4>
                <p>
                  Monday - Friday: 5:30 AM - 10:00 PM
                  <br />
                  Saturday - Sunday: 7:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                f
              </a>
              <a href="#" className="social-icon">
                in
              </a>
              <a href="#" className="social-icon">
                🐦
              </a>
              <a href="#" className="social-icon">
                📷
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Send us a Message</h2>
          {submitted && (
            <div className="success-message">✓ Message sent successfully!</div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="membership">Membership Inquiry</option>
                <option value="classes">Class Information</option>
                <option value="training">Personal Training</option>
                <option value="event">Event Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h4>❓ Do you offer free trial classes?</h4>
            <p>
              Yes! We offer a free trial day for new members to explore our
              facilities and classes.
            </p>
          </div>
          <div className="faq-item">
            <h4>❓ What are your membership options?</h4>
            <p>
              We offer monthly, quarterly, and annual membership plans with
              flexible payment options.
            </p>
          </div>
          <div className="faq-item">
            <h4>❓ Can I cancel my membership anytime?</h4>
            <p>
              Yes, monthly memberships can be cancelled with 30 days notice, no
              hidden fees.
            </p>
          </div>
          <div className="faq-item">
            <h4>❓ Do you have parking?</h4>
            <p>
              Yes, we offer free parking for all members with 500+ parking
              spaces.
            </p>
          </div>
          <div className="faq-item">
            <h4>❓ Are there lockers available?</h4>
            <p>
              Yes, secure lockers are available for all members. Premium lockers
              available for rental.
            </p>
          </div>
          <div className="faq-item">
            <h4>❓ Do you offer childcare services?</h4>
            <p>
              Yes, we have a dedicated childcare facility for members' children
              aged 6 weeks to 10 years.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          <iframe
            title="FitLife Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjYiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
