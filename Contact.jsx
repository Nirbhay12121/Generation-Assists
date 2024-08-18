// src/component/ContactUs/Contact.jsx
import React, { useState } from 'react';

const cardStyle = {
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  padding: '20px',
  textAlign: 'center',
  width: 'calc(33.333% - 20px)', // Adjust width to fit three items per row
  boxSizing: 'border-box',
  margin: '10px'
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: '30px'
};

const formContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333'
};

const inputRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '15px',
  marginBottom: '20px'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '4px',
  border: '2px solid #FFA500', // Orange border color
  outline: 'none',
  fontSize: '16px',
  color: '#333',
  marginBottom: '10px',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease'
};

const textareaStyle = {
  ...inputStyle,
  height: '100px'
};

const buttonStyle = {
  padding: '12px 20px',
  backgroundColor: '#FFA500', // Orange background color
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease'
};

const buttonHoverStyle = {
  backgroundColor: '#FF4500' // Darker orange on hover
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', color: 'orange' }}>Get in touch with us</h2>
        <div style={containerStyle}>
          <div style={cardStyle}>
            <h3 style={{ color: 'orange' }}>VISIT OUR MUMBAI OFFICE AT</h3>
            <p>Classic Care Assist Private Limited, A/204, Dynasty Business Park, Near JB Nagar Metro Station, Chakala, Andheri (East), Mumbai 400 059.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ color: 'orange' }}>VISIT OUR DELHI NCR OFFICE AT</h3>
            <p>Classic Care Assist Private Limited, 10th Floor, 1014, Vipul Business Park, Sector 48, Sohna Road, Gurugram, Haryana - 122018</p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ color: 'orange' }}>VISIT OUR CHANDIGARH OFFICE AT</h3>
            <p>Plot no 209, iron market, sector 29-D, Chandigarh -160030</p>
          </div>
        </div>
        <div style={cardStyle}>
          <h3 style={{ color: 'orange' }}>OR MESSAGE US</h3>
          <p>Email: <a href="mailto:info@elcare.co">info@elcare.co</a></p>
          <p>Phone: +91-8045914567</p>
        </div>
      </div>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center', color: 'orange' }}>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={inputRowStyle}>
            <div style={{ flex: '1' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: 'orange' }}>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = buttonHoverStyle.backgroundColor}
                onBlur={(e) => e.target.style.borderColor = inputStyle.borderColor}
              />
            </div>
            <div style={{ flex: '1' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: 'orange' }}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = buttonHoverStyle.backgroundColor}
                onBlur={(e) => e.target.style.borderColor = inputStyle.borderColor}
              />
            </div>
            <div style={{ flex: '1' }}>
              <label htmlFor="mobileNo" style={{ display: 'block', marginBottom: '5px', color: 'orange' }}>Mobile No:</label>
              <input
                type="tel"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = buttonHoverStyle.backgroundColor}
                onBlur={(e) => e.target.style.borderColor = inputStyle.borderColor}
              />
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: 'orange' }}>Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={textareaStyle}
              onFocus={(e) => e.target.style.borderColor = buttonHoverStyle.backgroundColor}
              onBlur={(e) => e.target.style.borderColor = inputStyle.borderColor}
            />
          </div>
         
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
