import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-fade-left">
            <h2>Why Choose NutriPaws Premium?</h2>
            <p className="about-intro">
              For over 15 years, we've been dedicated to creating the finest pet nutrition 
              available. Our commitment to quality, science, and your pet's wellbeing drives 
              everything we do.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🔬</div>
                <div className="feature-content">
                  <h3>Science-Backed Formulas</h3>
                  <p>Every recipe is developed with veterinary nutritionists and backed by extensive research to ensure optimal health benefits.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🌱</div>
                <div className="feature-content">
                  <h3>100% Natural Ingredients</h3>
                  <p>We source only the finest natural ingredients from trusted suppliers, with no artificial preservatives, colors, or flavors.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🏆</div>
                <div className="feature-content">
                  <h3>Award-Winning Quality</h3>
                  <p>Recognized by veterinarians and pet industry experts for our commitment to exceptional quality and nutritional excellence.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">💝</div>
                <div className="feature-content">
                  <h3>Made with Love</h3>
                  <p>Every batch is crafted in small quantities with the same care and attention you'd give your own family's meals.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual animate-fade-right">
            <div className="about-image-stack">
              <div className="about-image primary-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">🐕</span>
                  <span className="placeholder-text">Happy & Healthy Pets</span>
                </div>
              </div>
              <div className="about-image secondary-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">👨‍⚕️</span>
                  <span className="placeholder-text">Vet Approved</span>
                </div>
              </div>
              <div className="quality-badge">
                <span className="badge-text">Premium Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About