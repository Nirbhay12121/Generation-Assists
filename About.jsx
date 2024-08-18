import React from 'react';

function About() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6'
  };

  const headerStyle = {
    textAlign: 'center',
    color: 'orange',
    marginBottom: '20px',
    fontSize: '2.5em'
  };

  const cardListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px', // Space between each card
  };

  const cardStyle = (index) => ({
    display: 'flex',
    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Alternate image position
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    padding: '20px',
    gap: '20px', // Space between image and text
  });

  const imageStyle = {
    width: '50%', // Half of the card width
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover'
  };

  const contentStyle = {
    width: '50%', // Half of the card width
    padding: '20px'
  };

  const cardTitleStyle = {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#FFA500'
  };

  const cardDescriptionStyle = {
    fontSize: '1em',
    color: '#666'
  };

  const cards = [
    { 
      image: 'https://i.pinimg.com/originals/a2/ee/fd/a2eefd508dd5a81ce69311c3323846ff.jpg',
      title: 'What is Generation Assists?', 
      description: 'Generation Assists is a pioneering organization dedicated to providing comprehensive solutions and support to individuals and businesses. Our mission is to empower our clients with the tools, knowledge, and resources they need to achieve their goals and thrive in their respective fields.'
    },
    { 
      image: 'https://png.pngtree.com/background/20230424/original/pngtree-family-photo-with-balloons-asian-family-living-in-japan-picture-image_2458685.jpg', 
      title: 'Who is Generation Assists?', 
      description: 'Generation Assists is comprised of a team of experienced professionals from diverse backgrounds, including technology, business, and education. We are passionate about making a positive impact and committed to delivering exceptional service to our clients. Our team works collaboratively to develop innovative solutions tailored to meet the unique needs of each client.'
    },
    { 
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-older-man-is-eating-something-image_2532713.jpg', 
      title: 'Why do we need Generation Assists?', 
      description: 'In today\'s fast-paced and constantly evolving world, having a reliable partner to guide and assist you can make all the difference. Generation Assists provides the expertise and support needed to navigate challenges, seize opportunities, and achieve success. Whether you are an individual seeking personal growth or a business aiming to expand, we are here to help you every step of the way.'
    },
    { 
      image: 'https://png.pngtree.com/background/20230424/original/pngtree-family-of-asian-people-celebrating-together-in-a-home-picture-image_2458686.jpg', // Example image URL
      title: 'How does Generation Assists work?', 
      description: 'Generation Assists operates through a client-centric approach, focusing on understanding the specific needs and goals of our clients. Our process includes: Assessment: We begin by conducting a thorough assessment to identify the unique challenges and opportunities faced by our clients. Strategy Development: Based on the assessment, we develop a customized strategy that outlines the steps and actions needed to achieve the desired outcomes. Implementation: Our team works closely with clients to implement the strategy, providing hands-on support and guidance throughout the process. Evaluation: We continuously monitor and evaluate progress, making adjustments as needed to ensure optimal results.'
    }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>About Us</h1>
      <div style={cardListStyle}>
        {cards.map((card, index) => (
          <div key={index} style={cardStyle(index)}>
            <img src={card.image} alt={card.title} style={imageStyle} />
            <div style={contentStyle}>
              <div style={cardTitleStyle}>{card.title}</div>
              <div style={cardDescriptionStyle}>{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
