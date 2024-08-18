import React from 'react';

function Blog() {
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

  const blogListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px', // Increased gap between blog posts
  };

  const blogCardStyle = (index) => ({
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

  const blogImageStyle = {
    width: '50%', // Half of the card width
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover'
  };

  const blogContentStyle = {
    width: '50%', // Half of the card width
    padding: '20px'
  };

  const blogTitleStyle = {
    fontSize: '1.5em',
    margin: '10px 0',
    color: '#FFA500' // Orange color for the title
  };

  const blogDescriptionStyle = {
    fontSize: '1em',
    color: '#333' // Black color for the description text
  };

  const blogs = [
    { 
      image: 'https://watermark.lovepik.com/photo/20211209/large/lovepik-elderly-people-walking-and-chatting-in-the-park-picture_501700433.jpg', 
      title: 'Abdominal Examination in a Modern Healthcare Setup', 
      description: 'An image of a medical scenario where an Asian female patient is receiving an abdominal examination from a Black male doctor. Both individuals are in a well-lit, modern healthcare setup. The doctor, wearing blue scrubs and a stethoscope around his neck, is carefully examining the patient who is lying down on the examination table.' 
    },
    { 
      image: 'https://img.lovepik.com/photo/50171/4957_lovepik-the-elderly-sing-together-in-the-park-photo-image_wh860.jpg', 
      title: 'Middle-Eastern Male Doctor Assisting Caucasian Female Patient', 
      description: 'A Middle-Eastern male doctor with a stethoscope around his neck stands with a commanding presence. A few feet away, a Caucasian female patient is on all fours on the ground. She is looking up at the doctor with a pleading expression as she raises one hand towards him, clearly seeking his medical assistance.' 
    },
    { 
      image: 'https://st4.depositphotos.com/1000291/21755/i/450/depositphotos_217556110-stock-photo-family-with-many-children-outdoors.jpg', 
      title: 'Professional Foot Evaluation by Expert Doctor', 
      description: 'A South Asian foot doctor in a clinic with his Middle-Eastern patient. They are in the treatment room, the doctor is evaluating the condition of the patients foot. His confident and professional demeanor showing his expertise. A Caucasian female assistant is with them aiding in the procedure. The environment is teeming with medical equipment.' 
    }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Blog</h1>
      <div style={blogListStyle}>
        {blogs.map((blog, index) => (
          <div key={index} style={blogCardStyle(index)}>
            <img src={blog.image} alt={blog.title} style={blogImageStyle} />
            <div style={blogContentStyle}>
              <div style={blogTitleStyle}>{blog.title}</div>
              <div style={blogDescriptionStyle}>{blog.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
