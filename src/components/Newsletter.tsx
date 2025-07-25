import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail('')

    // Reset after 4 seconds
    setTimeout(() => {
      setIsSubscribed(false)
    }, 4000)
  }

  console.log('Newsletter component rendering...')
  
  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-icon">📬</div>
            <h3 className="newsletter-title">Stay Connected with NutriPaws</h3>
            <p className="newsletter-description">
              Get monthly nutrition tips, exclusive offers, and expert pet care advice 
              delivered straight to your inbox. Join our community of caring pet parents!
            </p>
            
            <div className="newsletter-benefits">
              <div className="benefit">
                <span className="benefit-icon">🎯</span>
                <span>Personalized nutrition tips</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">💰</span>
                <span>Exclusive subscriber discounts</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">👨‍⚕️</span>
                <span>Expert veterinary advice</span>
              </div>
            </div>
          </div>
          
          <div className="newsletter-form-container">
            {!isSubscribed ? (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="form-input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="newsletter-input"
                  />
                  <button 
                    type="submit" 
                    className={`newsletter-btn ${isSubmitting ? 'btn-loading' : ''}`}
                    disabled={isSubmitting || !email}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                <p className="newsletter-privacy">
                  🔒 We respect your privacy. Unsubscribe anytime with one click.
                </p>
              </form>
            ) : (
              <div className="newsletter-success">
                <div className="success-animation">🎉</div>
                <h4>Welcome to the NutriPaws family!</h4>
                <p>Check your inbox for our July newsletter featuring summer pet care tips!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter