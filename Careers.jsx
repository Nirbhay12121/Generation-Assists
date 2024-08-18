import React from 'react';

function Careers() {
  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    border:'none', //'1px solid #ccc'
    outline:'none',
    borderBottom: '2px solid orange'
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'orange',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer'
  };

  const fileInputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    border:'none', //'1px solid #ccc'
    outline:'none',
    borderBottom: '2px solid orange'
  };

  return (
    <div style={formStyle}>
        <form>
      <h2 style={{color:'orange', textAlign:'center'}}>Join Us</h2>
      
        <label style={labelStyle} htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="phoneNumber">Phone Number *</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="specializaton_id">Select Specialization *</label>
        <input 
            type= '<option value></option>'
            id='specializaton_id'
            name='specializaton_id'
            style={inputStyle}
            required
         />
        
        
        

        <label style={labelStyle} htmlFor="resume">Upload Resume (*PDF)</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf"
          style={fileInputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default Careers;
