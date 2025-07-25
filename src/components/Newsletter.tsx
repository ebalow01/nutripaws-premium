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

  return (
    <section id="newsletter" style={{ 
      background: '#d4af37', 
      padding: '4rem 0', 
      margin: '4rem 0',
      minHeight: '300px',
      display: 'block'
    }}>
      <div className="container">
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>📬 Stay Connected with NutriPaws</h2>
          <p style={{ color: '#5a6c7d', marginBottom: '2rem' }}>
            Get monthly nutrition tips, exclusive offers, and expert pet care advice 
            delivered straight to your inbox!
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  style={{
                    padding: '1rem',
                    border: '2px solid #e9ecef',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    minWidth: '250px'
                  }}
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting || !email}
                  style={{
                    background: '#d4af37',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={{ color: '#228b22' }}>Welcome to the NutriPaws family!</h3>
              <p>Check your inbox for our July newsletter!</p>
            </div>
          )}
          
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            🔒 We respect your privacy. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter