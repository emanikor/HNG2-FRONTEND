import React, { useState } from 'react';
import "./contactus.css";

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Message sent:', form);
  };

  return (
    
    <div className="contactus-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contactus-form">
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={form.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit" className="contactus-button">Send Message</button>
      </form>
      <div>

      </div>
    </div>
  );
}

export default ContactUs;
