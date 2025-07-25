import React, { useState } from 'react'
import './Contact.css'

interface FormData {
  name: string
  email: string
  phone: string
  petType: 'dog' | 'cat' | 'both' | ''
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    petType: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        petType: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info animate-fade-left">
            <h2>Get In Touch</h2>
            <p className="contact-intro">
              Ready to give your pet the nutrition they deserve? We're here to help 
              you choose the perfect NutriPaws Premium formula for your beloved companion.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-content">
                  <h3>Call Us</h3>
                  <p>1-800-NUTRIPAWS</p>
                  <span className="method-note">Mon-Fri, 8AM-6PM EST</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div className="method-content">
                  <h3>Email Us</h3>
                  <p>hello@nutripaws.com</p>
                  <span className="method-note">We respond within 24 hours</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-content">
                  <h3>Live Chat</h3>
                  <p>Available on our website</p>
                  <span className="method-note">Instant support</span>
                </div>
              </div>
            </div>
            
            <div className="contact-guarantee">
              <div className="guarantee-icon">🛡️</div>
              <div className="guarantee-content">
                <h4>100% Satisfaction Guarantee</h4>
                <p>If you're not completely satisfied, we'll make it right or provide a full refund.</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container animate-fade-right">
            <div className="contact-form-wrapper">
              <h3>Send Us a Message</h3>
              <p>Tell us about your pet and we'll recommend the perfect nutrition plan.</p>
              
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="petType">Pet Type *</label>
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="both">Both Dogs & Cats</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your pet's dietary needs, age, or any specific questions you have..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`btn btn-primary btn-full ${isSubmitting ? 'btn-loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="form-success">
                  <div className="success-icon">✅</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for contacting NutriPaws Premium. Our pet nutrition 
                    experts will review your message and respond within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact