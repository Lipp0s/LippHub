import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #ff9000;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 4px;
  border: none;
  background-color: #1a1a1a;
  color: white;
  
  &:focus {
    outline: 2px solid #ff9000;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 4px;
  border: none;
  background-color: #1a1a1a;
  color: white;
  min-height: 150px;
  
  &:focus {
    outline: 2px solid #ff9000;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #ff9000;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background-color: #ff7000;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mvgkazpk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input 
          type="text" 
          placeholder="Subject" 
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <TextArea 
          placeholder="Your message..." 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button>
        {status === 'success' && <p style={{color: '#4CAF50'}}>Message sent successfully!</p>}
        {status === 'error' && <p style={{color: '#f44336'}}>Failed to send message. Please try again.</p>}
      </Form>
    </ContactContainer>
  );
};

export default Contact;