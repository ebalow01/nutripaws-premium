import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-up">
            <h1 className="hero-title">
              Premium Nutrition for Your
              <span className="text-primary"> Beloved Companions</span>
            </h1>
            
            <p className="hero-description">
              Discover NutriPaws Premium - where luxury meets nutrition. 
              Our scientifically formulated pet food is crafted with the finest 
              natural ingredients, backed by veterinary expertise, and designed 
              to give your pets the exceptional nutrition they deserve.
            </p>
            
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">
                Explore Products
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Natural Ingredients</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Pet Parent Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual animate-fade-right">
            <div className="hero-image-container">
              <div className="hero-image">
                <div className="pet-silhouette dog-silhouette"></div>
                <div className="pet-silhouette cat-silhouette"></div>
              </div>
              
              <div className="floating-elements">
                <div className="floating-element element-1">🥕</div>
                <div className="floating-element element-2">🥩</div>
                <div className="floating-element element-3">🐟</div>
                <div className="floating-element element-4">🌾</div>
                <div className="floating-element element-5">🥬</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero