import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🐾</span>
              <span className="logo-text">NutriPaws Premium</span>
            </div>
            <p className="footer-description">
              Premium pet nutrition crafted with love and backed by science. 
              Giving your beloved companions the exceptional nutrition they deserve.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Dog Food</a></li>
                <li><a href="#products">Cat Food</a></li>
                <li><a href="#products">Puppy Formula</a></li>
                <li><a href="#products">Kitten Formula</a></li>
                <li><a href="#products">Senior Pet Food</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#nutrition">Nutrition Guide</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#quality">Quality Promise</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>1-800-NUTRIPAWS</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>hello@nutripaws.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>New York, NY</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <span>Mon-Fri, 8AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; {currentYear} NutriPaws Premium. All rights reserved.</p>
              <div className="legal-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>
            
            <div className="footer-certifications">
              <div className="certification">
                <span className="cert-icon">🛡️</span>
                <span>FDA Approved</span>
              </div>
              <div className="certification">
                <span className="cert-icon">✅</span>
                <span>AAFCO Certified</span>
              </div>
              <div className="certification">
                <span className="cert-icon">🌱</span>
                <span>Natural Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer