import React from 'react';

function Testimonials() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px'
  };

  const cardStyle = {
    width: '100%',
    height: '100%',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)'
  };

  const imageStyle = {
    width: '30%',
    height: '50%',
    borderRadius: '8px 8px 0 0'
  };

  const titleStyle = {
    margin: '10px 0',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#555'
  };

  const testimonials = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Testimonial 1',
      description: 'Description for Testimonial 1'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Testimonial 2',
      description: 'Description for Testimonial 2'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Testimonial 3',
      description: 'Description for Testimonial 3'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'Testimonial 4',
      description: 'Description for Testimonial 4'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150',
      title: 'Testimonial 5',
      description: 'Description for Testimonial 5'
    }
  ];

  return (
    <div style={containerStyle}>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          style={cardStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = ''}
        >
          <img src={testimonial.image} alt={testimonial.title} style={imageStyle} />
          <h3 style={titleStyle}>{testimonial.title}</h3>
          <p style={descriptionStyle}>{testimonial.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
