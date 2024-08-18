// src/component/Services/Service.jsx
import React from 'react';

function Services() {
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
    color: '#333',
    marginBottom: '20px',
    fontSize: '2.5em'
  };

  const serviceListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-between'
  };

  const serviceCardStyle = {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    width: 'calc(33.333% - 20px)', // Adjust width to fit three items per row
    boxSizing: 'border-box',
    textAlign: 'center'
  };

  const serviceTitleStyle = {
    fontSize: '1.2em',
    marginBottom: '10px',
    color: '#FFA500' // Orange color for the title
  };

  const serviceDescriptionStyle = {
    fontSize: '1em',
    color: 'black' // Orange color for the description text
  };

  const services = [
    { 
      title: 'Yoga & Fitness Webinars', 
      description: 'Our Yoga & Fitness Webinars are designed to offer comprehensive wellness solutions from the comfort of your home. Engage with certified yoga instructors and fitness experts through live online sessions that cover a variety of practices including yoga, pilates, meditation, and general fitness. These webinars are tailored to meet the needs of all skill levels, whether you are a beginner looking to start your wellness journey or an experienced practitioner aiming to deepen your practice. Join us to improve your physical health, mental well-being, and overall lifestyle through guided exercises and wellness tips.'
    },
    { 
      title: 'Vaccinations at Home', 
      description: 'With our Vaccinations at Home service, you can conveniently receive your necessary vaccinations without leaving your home. Our certified healthcare professionals will visit your residence to administer vaccines, ensuring that you and your family stay protected against various illnesses. This service is especially beneficial for those with busy schedules, elderly individuals, or anyone who prefers the comfort and safety of their own home. We provide a range of vaccinations, including routine childhood immunizations and seasonal flu shots, with a focus on safety, professionalism, and personalized care.'
    },
    { 
      title: 'Telemedicine Consultation', 
      description: 'Our Telemedicine Consultation service allows you to connect with healthcare providers via secure video calls, eliminating the need for in-person visits. This convenient service is ideal for discussing symptoms, receiving diagnoses, and obtaining medical advice from the comfort of your home. Our team of medical professionals includes specialists from various fields, ensuring you get expert care tailored to your specific needs. Telemedicine consultations are designed to provide flexibility, reduce wait times, and offer accessible healthcare solutions, making it easier to manage your health and well-being remotely.'
    },
    { 
      title: 'Specialized Care Services', 
      description: 'Our Specialized Care Services offer targeted medical attention for complex health conditions that require expert knowledge and treatment. This service includes access to specialists across various fields, such as cardiology, oncology, neurology, and more. We provide personalized care plans that address specific health issues, combining advanced diagnostic techniques with customized treatment approaches. Whether you need ongoing management of a chronic condition or evaluation for a rare disease, our specialized care team is dedicated to delivering high-quality, patient-centered care to meet your unique health needs.'
    },
    { 
      title: 'Psychiatrist Counselling', 
      description: 'Psychiatrist Counselling is a critical service for those seeking mental health support from qualified professionals. Our psychiatric counseling services include comprehensive evaluations, diagnosis, and therapeutic interventions for various mental health conditions such as depression, anxiety, bipolar disorder, and more. Our experienced psychiatrists provide compassionate, evidence-based care to help you navigate emotional and psychological challenges. Through one-on-one sessions, we offer strategies for managing symptoms, improving mental well-being, and developing coping mechanisms, ensuring you receive the support needed to achieve a healthier, balanced life.'
    },
    { 
      title: 'Physiotherapy', 
      description: 'Our Physiotherapy services are designed to assist with the rehabilitation and recovery of physical injuries and conditions. Our licensed physiotherapists provide personalized treatment plans that include manual therapy, exercise regimens, and modalities to alleviate pain, improve mobility, and restore function. Whether you are recovering from surgery, managing chronic pain, or seeking to enhance physical performance, our physiotherapy services aim to address your specific needs and goals. We focus on evidence-based techniques to promote healing, prevent injury, and support overall physical health and well-being.'
    },
    { 
      title: 'Medicine Delivery at Home', 
      description: 'Our Medicine Delivery at Home service offers the convenience of having your prescriptions and over-the-counter medications delivered directly to your doorstep. This service is ideal for those who have difficulty visiting pharmacies or prefer the ease of home delivery. Our team ensures timely and accurate delivery of medications, with a focus on maintaining the highest standards of safety and customer service. We offer a wide range of medications, including chronic disease management drugs, and provide clear instructions and support to help you manage your health effectively from home.'
    },
    { 
      title: 'Diet & Nutrition Consultation', 
      description: 'Our Diet & Nutrition Consultation service provides expert guidance on healthy eating and nutrition to support your overall well-being. Our registered dietitians work with you to create customized meal plans and dietary strategies that align with your health goals, whether you aim to lose weight, manage a medical condition, or simply improve your eating habits. We offer comprehensive assessments, nutritional education, and ongoing support to help you make informed food choices, optimize your nutrient intake, and achieve a balanced, healthy lifestyle tailored to your individual needs.'
    },
    { 
      title: 'Medical Equipment', 
      description: 'Our Medical Equipment service offers a wide range of high-quality medical devices and supplies for home use. We provide essential equipment such as blood pressure monitors, glucose meters, nebulizers, and mobility aids, ensuring you have access to the tools needed for effective health management. Our team assists with selecting the appropriate equipment based on your medical needs and offers support with setup and usage instructions. Whether for chronic condition management or post-surgical recovery, our medical equipment service aims to enhance your quality of life and promote better health outcomes at home.'
    },
    { 
      title: 'Lab Tests at Home', 
      description: 'Our Lab Tests at Home service allows you to conduct necessary medical tests without leaving your home. We offer a range of diagnostic tests, including blood work, urine analysis, and more, with sample collection conducted by trained professionals at your convenience. This service is designed to provide a hassle-free experience, ensuring accurate results while saving you time and effort. We prioritize your comfort and confidentiality, with test results delivered directly to you and follow-up support available from our healthcare team to discuss findings and next steps.'
    },
    { 
      title: 'ICU Setup', 
      description: 'Our ICU Setup service provides comprehensive solutions for setting up intensive care facilities at home for patients requiring critical care. We offer advanced medical equipment, including ventilators, monitoring systems, and support staff to deliver high-level care in a familiar and comfortable environment. Our team ensures that all necessary protocols and safety standards are met, working closely with healthcare providers to create a tailored care plan. This service aims to provide a seamless transition from hospital to home, ensuring that patients receive continuous, expert care and support during their recovery.'
    },
    { 
      title: 'Critical Care Consult', 
      description: 'The Critical Care Consult service offers expert medical advice and management for patients experiencing severe or life-threatening conditions. Our team of critical care specialists provides in-depth evaluations, treatment recommendations, and ongoing support for complex health issues that require intensive monitoring and intervention. This service is designed to address acute medical crises, offering timely consultations to guide treatment decisions and coordinate care. Whether in a hospital setting or at home, our critical care consultants are committed to delivering high-quality, patient-centered care to improve outcomes and manage critical health needs effectively.'
    },
    { 
      title: 'Covid-19 Care', 
      description: 'Our Covid-19 Care service provides comprehensive support for individuals affected by COVID-19. We offer a range of services, including medical evaluations, testing, and remote consultations with healthcare professionals specializing in infectious diseases. Our care team monitors symptoms, provides treatment recommendations, and offers guidance on managing the virus effectively. We also provide support for long-term recovery and rehabilitation, addressing any ongoing health issues related to COVID-19. Our goal is to ensure that you receive the best possible care and resources to navigate the challenges of the pandemic and recover safely.'
    },
    { 
      title: 'Care Angel (Nursing)', 
      description: 'The Care Angel (Nursing) service provides compassionate and professional nursing care for individuals in need of assistance with daily activities, medical care, or recovery from illness or surgery. Our skilled nurses offer a range of services, including wound care, medication management, personal care, and support with medical treatments. We focus on delivering personalized, patient-centered care to enhance comfort, dignity, and quality of life. Whether you require temporary or ongoing support, our Care Angels are dedicated to providing the highest level of care in a supportive and empathetic manner.'
    },
    { 
      title: 'Annual Health Checkup', 
      description: 'Our Annual Health Checkup service offers a thorough evaluation of your overall health to detect potential issues before they become serious. This comprehensive checkup includes various tests and screenings, such as blood work, physical examinations, and health assessments, tailored to your age, medical history, and risk factors. Our goal is to provide early detection and prevention strategies to help you maintain optimal health and address any concerns proactively. Regular health checkups are essential for monitoring changes in your health, setting wellness goals, and ensuring a proactive approach to health management.'
    }
  ];

  return (
    <div style={containerStyle}>
<h1 style={{ color: 'orange', textAlign: 'center' }}>HealthCare Services</h1>
<div style={serviceListStyle}>
        {services.map((service, index) => (
          <div key={index} style={serviceCardStyle}>
            <div style={serviceTitleStyle}>{service.title}</div>
            <div style={serviceDescriptionStyle}>{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
