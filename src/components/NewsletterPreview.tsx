import React, { useState } from 'react'
import './NewsletterPreview.css'

const NewsletterPreview: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="newsletter-preview-trigger">
        <button 
          className="btn btn-secondary"
          onClick={() => setIsOpen(true)}
        >
          📰 View July Newsletter
        </button>
      </div>

      {isOpen && (
        <div className="newsletter-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="newsletter-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close newsletter"
            >
              ×
            </button>
            
            <div className="newsletter-content-wrapper">
              <div className="newsletter-header">
                <div className="newsletter-logo">
                  <span className="logo-icon">🐾</span>
                  <span className="logo-text">NutriPaws Premium</span>
                </div>
                <h1>July 2025 Newsletter</h1>
                <p className="newsletter-subtitle">"Summer Wellness for Your Beloved Companions"</p>
              </div>

              <div className="newsletter-body">
                {/* Welcome Message */}
                <section className="newsletter-section">
                  <h2>🌟 Welcome Message</h2>
                  <p><em>Dear NutriPaws Family,</em></p>
                  <p>
                    As summer temperatures soar in 2025, we're committed to keeping your beloved companions healthy, 
                    hydrated, and happy. This month's newsletter focuses on evidence-based care strategies developed 
                    in partnership with veterinary nutritionists.
                  </p>
                  <p>
                    Whether you're managing multiple cats indoors, keeping hunting dogs in peak condition, or serving 
                    diverse exotic pet needs, our premium nutrition supports every pet's unique summer wellness journey.
                  </p>
                </section>

                {/* Featured Product */}
                <section className="newsletter-section featured-product">
                  <h2>🥇 Featured Product Spotlight</h2>
                  <div className="product-highlight">
                    <h3>"Summer Hydration Plus Formula" - Limited Edition</h3>
                    <p><em>Now Available: July-August 2025</em></p>
                    
                    <div className="product-features">
                      <h4>✨ Key Features:</h4>
                      <ul>
                        <li>15% higher moisture content for optimal summer hydration</li>
                        <li>Cooling ingredients: cucumber essence, mint extracts</li>
                        <li>Enhanced electrolyte balance for active pets</li>
                        <li>Veterinary-formulated for hot weather stress relief</li>
                      </ul>
                    </div>

                    <div className="product-pricing">
                      <h4>Special Launch Pricing:</h4>
                      <ul>
                        <li>Single bags: <strong>$89.99</strong> (reg. $94.99)</li>
                        <li>3-bag bundle: <strong>$249.99</strong> (save $20)</li>
                        <li>Subscribe & Save: Additional <strong>15% off</strong></li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Expert Advice */}
                <section className="newsletter-section">
                  <h2>👨‍⚕️ Expert Veterinary Advice</h2>
                  <p><strong>Q&A with Dr. Marina Rodriguez, DVM, Board Certified Veterinary Nutritionist</strong></p>
                  
                  <div className="qa-item">
                    <h4>Q: "My three indoor cats seem lethargic in the summer heat. Should I be concerned?"</h4>
                    <p>
                      <strong>Dr. Rodriguez:</strong> "Indoor cats are actually safer from heat-related illness, but they can still 
                      experience discomfort. Ensure multiple water sources, consider cooling mats, and watch for excessive panting. 
                      Premium wet food provides additional hydration that's especially beneficial during hot months."
                    </p>
                  </div>

                  <div className="qa-item">
                    <h4>Q: "How do I maintain my hunting dogs' performance nutrition during summer?"</h4>
                    <p>
                      <strong>Dr. Rodriguez:</strong> "Working dogs need 20-30% more calories during active seasons, but timing is crucial. 
                      Feed smaller, frequent meals and avoid feeding 2 hours before intensive activity. High-quality protein supports 
                      muscle recovery in heat stress."
                    </p>
                  </div>

                  <div className="qa-item">
                    <h4>Q: "What about exotic pets - are there universal summer care guidelines?"</h4>
                    <p>
                      <strong>Dr. Rodriguez:</strong> "Each species has unique needs, but universal principles include: stable temperatures, 
                      increased water access, and nutrition that supports thermal regulation. Consult species-specific care guides."
                    </p>
                  </div>
                </section>

                {/* Customer Success Story */}
                <section className="newsletter-section success-story">
                  <h2>💝 Customer Success Stories</h2>
                  <div className="story-highlight">
                    <h3>"From Stressed to Satisfied: How Premium Nutrition Helped Luna Through Fireworks Season"</h3>
                    <p><em>By Jennifer M., NutriPaws Customer Since 2023</em></p>
                    
                    <p>
                      "Last July 4th was a nightmare. Luna, my 7-year-old calico, hid under the bed for three days straight. 
                      This year, after 6 months on NutriPaws Premium with their stress-support formula, she barely flinched 
                      during the neighborhood fireworks! The L-tryptophan and magnesium in their formula really works. 
                      Worth every penny for peace of mind."
                    </p>

                    <div className="before-after">
                      <div className="before">
                        <strong>Before:</strong> Severe anxiety, hiding, loss of appetite during loud events
                      </div>
                      <div className="after">
                        <strong>After:</strong> Calm demeanor, maintained eating schedule, slept through fireworks
                      </div>
                    </div>

                    <p>
                      <em>Dr. Rodriguez comments: "Proper nutrition absolutely supports nervous system health. Jennifer's 
                      experience reflects what we see clinically - premium ingredients make a measurable difference in stress resilience."</em>
                    </p>
                  </div>
                </section>

                {/* Summer Safety Tips */}
                <section className="newsletter-section safety-tips">
                  <h2>🏆 July Focus: Summer Safety Essentials</h2>
                  
                  <div className="safety-category">
                    <h3>For Cat Owners (Multiple Cat Households)</h3>
                    <div className="checklist">
                      <h4>Indoor Summer Safety Checklist:</h4>
                      <ul>
                        <li>✅ Multiple water stations (1 per cat + 1 extra)</li>
                        <li>✅ Cooling mats in favorite resting spots</li>
                        <li>✅ Window safety screens secured</li>
                        <li>✅ Air conditioning/fan accessibility</li>
                        <li>✅ Separate feeding stations to reduce mealtime stress</li>
                      </ul>
                    </div>
                  </div>

                  <div className="safety-category">
                    <h3>For Dog Owners (Active/Working Dogs)</h3>
                    <div className="checklist">
                      <h4>Hot Weather Exercise Guidelines:</h4>
                      <ul>
                        <li>✅ Early morning walks (before 8 AM)</li>
                        <li>✅ Evening activities (after 6 PM)</li>
                        <li>✅ Pavement temperature test (5-second hand rule)</li>
                        <li>✅ Portable water bowls for outings</li>
                        <li>✅ Shade access during outdoor activities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="safety-category">
                    <h3>For Exotic Pet Store Owners</h3>
                    <div className="checklist">
                      <h4>Universal Summer Care Guidelines:</h4>
                      <ul>
                        <li>✅ Species-specific temperature monitoring</li>
                        <li>✅ Increased ventilation in enclosures</li>
                        <li>✅ Water source availability for all species</li>
                        <li>✅ Heat stress recognition signs by species</li>
                        <li>✅ Emergency cooling protocols</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Seasonal Recipe */}
                <section className="newsletter-section recipe">
                  <h2>🧊 Seasonal Recipes & Treats</h2>
                  <div className="recipe-card">
                    <h3>"Frozen Watermelon-Mint Refreshers"</h3>
                    <p><em>Perfect for hot summer days - uses NutriPaws wet food as a nutritious base</em></p>

                    <div className="recipe-content">
                      <div className="ingredients">
                        <h4>Ingredients:</h4>
                        <ul>
                          <li>1 can NutriPaws Premium wet food (any flavor)</li>
                          <li>1/2 cup pureed watermelon (seedless)</li>
                          <li>1 tsp fresh mint, finely chopped</li>
                          <li>1/4 cup low-sodium chicken broth</li>
                        </ul>
                      </div>

                      <div className="instructions">
                        <h4>Instructions:</h4>
                        <ol>
                          <li>Mix all ingredients until smooth</li>
                          <li>Pour into ice cube trays or silicone molds</li>
                          <li>Freeze for 2-4 hours</li>
                          <li>Serve 1-2 cubes as a cooling treat</li>
                        </ol>
                      </div>

                      <div className="benefits">
                        <h4>Nutritional Benefits:</h4>
                        <p>Extra hydration, vitamin C from watermelon, digestive support from mint, complete nutrition from NutriPaws base.</p>
                        <p><em>Safety Note: Always remove watermelon seeds and use pet-safe portions</em></p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Community Highlights */}
                <section className="newsletter-section community">
                  <h2>🎉 Community Highlights</h2>
                  
                  <div className="community-item">
                    <h3>📸 Photo Contest: "Summer Safety Champions"</h3>
                    <p><em>Submit photos of your pets staying cool and safe this summer</em></p>
                    <ul>
                      <li><strong>Grand Prize:</strong> 6-month supply of NutriPaws Premium</li>
                      <li><strong>Runner-up:</strong> Premium feeding bowls and cooling mats</li>
                      <li><strong>Submission Deadline:</strong> July 31, 2025</li>
                    </ul>
                  </div>

                  <div className="community-item">
                    <h3>📚 Upcoming Educational Webinars:</h3>
                    <ul>
                      <li><strong>July 15:</strong> "Multi-Cat Nutrition Management" (7 PM EST)</li>
                      <li><strong>July 22:</strong> "Working Dog Performance Nutrition" (7 PM EST)</li>
                      <li><strong>July 29:</strong> "Exotic Pet Summer Care" (7 PM EST)</li>
                    </ul>
                  </div>

                  <div className="community-item charity">
                    <h3>💚 Charity Initiative: "Beat the Heat" Shelter Support</h3>
                    <p>This July, for every newsletter subscriber, we're donating cooling mats to local animal shelters.</p>
                    <p><strong>Current impact: 847 cooling mats donated!</strong></p>
                  </div>
                </section>

                {/* Exclusive Offers */}
                <section className="newsletter-section offers">
                  <h2>🛒 Exclusive Subscriber Offers</h2>
                  
                  <div className="offer-category">
                    <h3>🎯 Cat Owners (3+ cats):</h3>
                    <ul>
                      <li><strong>Multi-Cat Bundle:</strong> 15% off orders of 6+ cans</li>
                      <li><strong>Auto-Delivery:</strong> Free shipping + additional 10% off</li>
                      <li><strong>New Customer Special:</strong> First order 25% off with code COOL25</li>
                    </ul>
                  </div>

                  <div className="offer-category">
                    <h3>🐕 Dog Owners (Active/Working Dogs):</h3>
                    <ul>
                      <li><strong>Performance Pack:</strong> High-protein formulas + treats combo</li>
                      <li><strong>Bulk Pricing:</strong> 20% off 12+ bag orders</li>
                      <li><strong>Training Reward Program:</strong> Earn points for repeat purchases</li>
                    </ul>
                  </div>

                  <div className="offer-category">
                    <h3>🏪 Store Owners/Bulk Buyers:</h3>
                    <ul>
                      <li><strong>Wholesale Portal Access:</strong> Special pricing and terms</li>
                      <li><strong>Educational Materials:</strong> Free downloadable care guides</li>
                      <li><strong>Marketing Support:</strong> Co-branded promotional materials</li>
                    </ul>
                  </div>
                </section>

                {/* Contact Info */}
                <section className="newsletter-section contact">
                  <h2>📞 Expert Support</h2>
                  <p><strong>Questions about summer nutrition for your pets?</strong></p>
                  
                  <div className="contact-methods">
                    <div className="contact-item">
                      <strong>🔥 Heat Emergency Hotline:</strong> 1-800-COOL-PET (24/7)
                    </div>
                    <div className="contact-item">
                      <strong>📧 Nutrition Consultations:</strong> experts@nutripaws.com
                    </div>
                    <div className="contact-item">
                      <strong>💬 Live Chat:</strong> Available on website 8 AM - 8 PM EST
                    </div>
                  </div>
                </section>
              </div>

              <div className="newsletter-footer">
                <p><em>© 2025 NutriPaws Premium. All rights reserved.</em></p>
                <p><em>Scientific Advisory Board: Dr. Marina Rodriguez, DVM, PhD - Board Certified Veterinary Nutritionist</em></p>
                <p><strong>Next Month Preview:</strong> August newsletter will focus on "Travel-Ready Nutrition" - keeping pets healthy during summer vacations and boarding.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsletterPreview