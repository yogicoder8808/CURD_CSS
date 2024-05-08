import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'

const Form = ({ onSubmit }) => {
  const navigate = useNavigate();
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    profilePhoto: null,
    phoneNumber: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSubmitting) {
      setIsSubmitting(true); // Prevent further submissions
      try {
        await onSubmit(formData); // Assuming onSubmit is an async function
        setFormData(initialFormData); // Reset form fields
        navigate('/');
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false); // Re-enable the submit button
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Profile Photo:
        <input
          type="file"
          name="profilePhoto"
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled = {isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
    </form>
  );
};

export default Form;
