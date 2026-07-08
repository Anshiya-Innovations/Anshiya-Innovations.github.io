import React, { useState } from 'react';
import featureGraphic from '../../assets/feature-graphic.png';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Software',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const services = [
    "AI Integration & Automation",
    "SAP BTP",
    "Cyber Security",
    "Security Compliance & Audit",
    "Cloud Solutions",
    "Business Automations",
    "Employee Training Program",
    "Internship for Students",
    "Mobile App Development"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Custom Software',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="container grid-2 appointment-container">
        {/* Left Side: Text and Graphic */}
        <div className="appointment-content-left">
          <h2 className="appointment-title">Make an Appointment</h2>
          <p className="appointment-status-text">(24/7 Available)</p>
          <p className="appointment-description-para">
            Ready to discuss your next big project? Our experts are standing by to provide you with a detailed consultation and roadmap.
          </p>
          <div className="appointment-image-wrapper">
            <img 
              src={featureGraphic} 
              alt="Collaborative IT Meeting" 
              className="appointment-img"
            />
          </div>
        </div>

        {/* Right Side: Appointment Form */}
        <div className="appointment-form-wrapper">
          {submitStatus === 'success' ? (
            <div className="submit-success-card">
              <div className="success-icon">&#10003;</div>
              <h3>Request Submitted!</h3>
              <p>Thank you for reaching out. A technology expert from our team will contact you shortly to confirm your scheduled slot.</p>
              <button onClick={() => setSubmitStatus(null)} className="btn-primary">
                Book Another Slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="appointment-form">
              {submitStatus === 'error' && (
                <div className="submit-error-msg">
                  Please fill out all required fields (*).
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Contact No</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Select Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Write Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`appointment-submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Request...' : <>Make an Appointment <span className="arrow-btn-span">&rarr;</span></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Appointment;
