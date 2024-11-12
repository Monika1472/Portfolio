import React, { useState } from 'react';
import './index.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const templateParams = {
        from_name: fullName,
        from_email: emailId,
        message: description,
      };
      emailjs
      .send(
        'service_ipulsvr', // Replace with your EmailJS Service ID
        'template_moni', // Replace with your EmailJS Template ID
        templateParams,
        '4O_uvHXLjnH4rWuFv' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
          console.log('Success:', result.text);
          handleReset();
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email.');
        }
      );
      console.log('Full name:', fullName, 'Email ID:', emailId, 'Description:', description);
      handleReset();
    }
  };

  const handleReset = () => {
    setFullName('');
    setEmailId('');
    setDescription('');
    setErrors({});
  };

  const handleValidation = () => {
    let valid = true;
    const newErrors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!fullName.trim()) {
      newErrors.fullName = 'Name is required';
      valid = false;
    } else if (!nameRegex.test(fullName)) {
      newErrors.fullName = 'Numbers and special characters are not allowed';
      valid = false;
    }

    if (!emailId.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(emailId)) {
      newErrors.email = 'Invalid Email Format';
      valid = false;
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
      valid = false;
    } else if (description.length > 600) {
      newErrors.description = 'Description should not exceed 600 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className='Contact-info'>
      <h1><b><center>Contact</center></b></h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Name:*</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}

          <label htmlFor="email">Email ID:*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Enter your email ID"
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="description">Description:*</label>
          <textarea
            name="description"
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description"
          />
          {errors.description && <span className="error">{errors.description}</span>}

          <div className="button-group">
            <button type="button" onClick={handleReset}>Reset</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Contact;
