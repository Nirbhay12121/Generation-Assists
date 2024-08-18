import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: true,
  };

  const cardStyle = {
    position: 'relative',
    width: '50%',
    height: '100vh',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '10px',
  };

  const imageStyle = {
    width: '100%',
    height: '80vh',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const contentDivStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f9f9f9',
    padding: '40px 20px',
    fontSize: '1.5em',
    color: '#333',
    borderRadius: '10px',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
    marginTop: '20px',
    height: '50vh',
  };

  const textStyle = {
    textAlign:'center',
    backgroundImage: 'url("https://i.pinimg.com/originals/4d/f4/7c/4df47cb7b166d5e730d58a7fd813a3f3.jpg")',
    backgroundSize: 'cover', // Ensures the image covers the entire text area
    backgroundPosition: 'center',
    padding: '20px',
    borderRadius: '5px',
    width: '50%', // Ensures the background image covers the entire width of the text
    height: '50vh', // Ensures the background image covers the entire height of the text
  };

  return (
    <div style={{ padding: '20px' }}>
      <Slider {...sliderSettings}>
        <div style={cardStyle}>
          <img
            src="https://vinusimages.co/wp-content/uploads/2018/08/EG7A5177.jpg"
            alt="Beautiful Landscape"
            style={imageStyle}
          />
        </div>
        <div style={cardStyle}>
          <img
            src="https://images.pexels.com/photos/1423413/pexels-photo-1423413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Family Moment"
            style={imageStyle}
          />
        </div>
        <div style={cardStyle}>
          <img
            src="https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Family Portrait"
            style={imageStyle}
          />
        </div>
        <div style={cardStyle}>
          <img
            src="https://images.pexels.com/photos/5637766/pexels-photo-5637766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cultural Portrait"
            style={imageStyle}
          />
        </div>
      </Slider>

      <div style={contentDivStyle}>
        <p style={textStyle}>
          Carenting is showering our elderly with the same unconditional love, care, and attention that parents shower on their children.
        </p>
      </div>
    </div>
  );
}

export default Home;
