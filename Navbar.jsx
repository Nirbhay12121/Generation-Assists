import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  const logoStyle = {
    position: 'absolute',
    left: '20px',
    display: 'flex',
    alignItems: 'center'
  };

  const logoTextStyle = {
    color: 'white',
    marginLeft: '10px',
    marginRight: '10px'
  };

  const logoHighlightStyle = {
    color: 'orange'
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0
  };

  const navLinkStyle = {
    position: 'relative',
    margin: '0 15px'
  };

  const navLinkAnchorStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px'
  };

  const navLinkAnchorHoverStyle = {
    color: 'orange'
  };

  const navLinkActiveStyle = {
    color: 'orange',
    textDecoration: 'none',
    fontSize: '16px'
  };

  const dropdownStyle = {
    display: isDropdownOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#333',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    zIndex: 1
  };

  const dropdownItemStyle = {
    margin: 0
  };

  const dropdownAnchorStyle = {
    color: 'white',
    padding: '10px 20px',
    display: 'block',
    textDecoration: 'none'
  };

  const dropdownAnchorHoverStyle = {
    backgroundColor: 'orange'
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrt2xK-lw2n9PSbylbUNN0hn7l2-rW5xyOnA&s"
          alt="Generation Assists Logo"
          style={{ height: '40px' }}
        />
        <strong style={logoTextStyle}>
          <strong style={logoHighlightStyle}>Generation</strong> Assists
        </strong>
      </div>
      <ul style={navLinksStyle}>
        <li style={navLinkStyle}>
          <Link
            to="/home"
            style={location.pathname === '/home' ? navLinkActiveStyle : navLinkAnchorStyle}
            onMouseEnter={(e) => e.target.style.color = navLinkAnchorHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/home' ? navLinkActiveStyle.color : navLinkAnchorStyle.color}
          >
            Home
          </Link>
        </li>
        <li style={navLinkStyle}>
          <Link
            to="/about"
            style={location.pathname === '/about' ? navLinkActiveStyle : navLinkAnchorStyle}
            onMouseEnter={(e) => e.target.style.color = navLinkAnchorHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/about' ? navLinkActiveStyle.color : navLinkAnchorStyle.color}
          >
            About
          </Link>
        </li>
        <li style={navLinkStyle}>
          <Link
            to="/services"
            style={location.pathname === '/services' ? navLinkActiveStyle : navLinkAnchorStyle}
            onMouseEnter={(e) => e.target.style.color = navLinkAnchorHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/services' ? navLinkActiveStyle.color : navLinkAnchorStyle.color}
          >
            Services
          </Link>
        </li>
        <li style={navLinkStyle}>
          <Link
            to="/elcare-plans"
            style={location.pathname === '/elcare-plans' ? navLinkActiveStyle : navLinkAnchorStyle}
            onMouseEnter={(e) => e.target.style.color = navLinkAnchorHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/elcare-plans' ? navLinkActiveStyle.color : navLinkAnchorStyle.color}
          >
            Elcare Plans
          </Link>
        </li>
        <li style={navLinkStyle}>
          <Link
            to="/blog"
            style={location.pathname === '/blog' ? navLinkActiveStyle : navLinkAnchorStyle}
            onMouseEnter={(e) => e.target.style.color = navLinkAnchorHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/blog' ? navLinkActiveStyle.color : navLinkAnchorStyle.color}
          >
            Blogs
          </Link>
        </li>
        <li style={navLinkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link
            to="/community"
            style={location.pathname === '/community' ? navLinkActiveStyle : navLinkAnchorStyle}
            onMouseEnter={(e) => e.target.style.color = navLinkAnchorHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/community' ? navLinkActiveStyle.color : navLinkAnchorStyle.color}
          >
            Community
          </Link>
          <ul style={dropdownStyle}>
            <li style={dropdownItemStyle}>
              <Link
                to="/events"
                style={dropdownAnchorStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = dropdownAnchorHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}
              >
                Events
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link
                to="/careers"
                style={dropdownAnchorStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = dropdownAnchorHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}
              >
                Careers
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link
                to="/testimonials"
                style={dropdownAnchorStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = dropdownAnchorHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}
              >
                Testimonials
              </Link>
            </li>
            <li style={dropdownItemStyle}>
              <Link
                to="/faqs"
                style={dropdownAnchorStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = dropdownAnchorHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </li>
        <li style={navLinkStyle}>
          <Link
            to="/contactus"
            style={location.pathname === '/contactus' ? navLinkActiveStyle : navLinkAnchorStyle}
            onMouseEnter={(e) => e.target.style.color = navLinkAnchorHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/contactus' ? navLinkActiveStyle.color : navLinkAnchorStyle.color}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
