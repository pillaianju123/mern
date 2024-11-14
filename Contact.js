
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div 
      style={{ 
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vm3OUp4~zAC0rmOqsWQWZcLEwtnY-Ui6y8f9KwUUMUeh~MfnUJv~1OqoLil2jpShQ8ysiBK7ATOZNC9r3eqJXygIrgpWW7Cu~Kcn3wVL7rFrscczjQ~PwZhG9tNROmi5WuU8AnkiA5X5ZlIZ0LCV~tf6T8E3WLcGrbGjpqnHNznc73UWKMB4fPQQC-2tIBGHEP6wOJ~n14VGTC7tBHtpxbq-Mc77GsJfoQTAOF3UnX2frLTaXR8fmObONoKRKt5h0xEOf2xci8t0sNKQQ2ntV7vvXtik0trvqFXUhoUA3~PnLCfnnlfPWeL4HYg9UI96Y2rPWqjDz9~Llt4tmhLPhw__')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '40px 0',
      }}
    >
      <div className="container" style={{ backgroundColor: 'light blue', padding: '40px 20px', borderRadius: '8px', maxWidth: '800px', margin: '0 auto', color: ' white' }}>
        <h2 className="text-center mb-4">Contact Us</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>

        <div className="contact-info mt-5">
          <h5 className="text-center">Get in Touch</h5>
          <p className="text-center">Phone: (123) 456-7890</p>
          <p className="text-center">Email: info@deepnsoft.com</p>
        </div>

        <div className="social-icons text-center mt-4">
          <a href="https://facebook.com" className="me-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x text-white"></i>
          </a>
          <a href="https://twitter.com" className="me-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x text-white"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

