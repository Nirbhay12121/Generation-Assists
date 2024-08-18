import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1a1a1a', // Darker background for better contrast
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'left',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const columnStyle = {
    flex: '1',
    margin: '20px',
    minWidth: '250px', // Minimum width to ensure readability
  };

  const titleStyle = {
    color: '#ffcc00',
    marginBottom: '20px',
    fontSize: '1.2em',
  };

  const linkListStyle = {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
  };

  const linkStyle = {
    flex: '1 1 45%', // Better spacing and alignment of links
    marginBottom: '10px',
    color: '#b3b3b3', // Softer color for links
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const addressStyle = {
    lineHeight: '1.6',
  };

  const dividerStyle = {
    textAlign: 'center',
    marginTop: '20px',
    borderTop: '1px solid #333',
    padding: '10px 0',
  };

  const linkHoverStyle = {
    color: '#ffcc00',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h4 style={titleStyle}>DOWNLOAD OUR APP</h4>
          <p>Elcare - Caring for Elders</p>
        </div>

        <div style={columnStyle}>
          <h4 style={titleStyle}>COMMUNITY</h4>
          <ul style={linkListStyle}>
            {['Events', 'Careers', 'Testimonials', 'Faqs'].map((item) => (
              <li key={item} style={{ flex: '1 1 50%', marginBottom: '10px' }}>
                <a href={`#${item.toLowerCase()}`} style={linkStyle}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={columnStyle}>
          <h4 style={titleStyle}>QUICK LINKS</h4>
          <ul style={linkListStyle}>
            {['Home', 'About Us', 'Blogs', 'Careers', 'Services', 'Elcare Plans', 'Contact Us'].map((item) => (
              <li key={item} style={{ flex: '1 1 50%', marginBottom: '10px' }}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} style={linkStyle}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={columnStyle}>
          <h4 style={titleStyle}>CONTACT US</h4>
          <address style={addressStyle}>
            ABCD, <br />
            4th Floor , Pragati Parisar, <br />
            Nehru Nagar , Near Karuna Dham , Bhopal , <br />
            Madhya Pradesh - 122018<br />
            <a href="mailto:info@elcare.co" style={{ ...linkStyle, ...linkHoverStyle }}>gen@assists.co</a><br />
            +91-123456789
          </address>
        </div>
      </div>

      <div style={dividerStyle}>
        <p>Copyright 2021 M/s Classic Care Assist Pvt. Ltd. All Rights Reserved.</p>
        <p>
          <a href="#terms" style={{ ...linkStyle, ...linkHoverStyle }}>Terms & Conditions</a> | 
          <a href="#privacy" style={{ ...linkStyle, ...linkHoverStyle }}>Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
