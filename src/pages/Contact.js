import React from 'react';
import './Contact.css';

const Contact = () => {


  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contato</h1>
        <p>Tem alguma dúvida ou sugestão?</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>shirai789@proton.me</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📱</div>
            <h3>Sociais</h3>
            <div className="social-links">
              <a href="https://x.com/dgxxx_yo" target="_blank" rel="noopener noreferrer">X</a>
              <a href="https://discord.com/shirai.i" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
          </div>


        </div>


      </div>


    </div>
  );
};

export default Contact;
