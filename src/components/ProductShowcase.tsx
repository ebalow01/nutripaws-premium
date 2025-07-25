import React, { useState } from 'react'
import './ProductShowcase.css'

interface Product {
  id: number
  name: string
  category: 'dog' | 'cat'
  description: string
  features: string[]
  price: string
  image: string
  popular?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Adult Dog Formula",
    category: 'dog',
    description: "Complete nutrition for adult dogs with real chicken, sweet potato, and essential vitamins.",
    features: ["Real Chicken First Ingredient", "Grain-Free Formula", "Omega-3 & 6 Fatty Acids", "No Artificial Preservatives"],
    price: "$89.99",
    image: "🐕",
    popular: true
  },
  {
    id: 2,
    name: "Kitten Growth & Development",
    category: 'cat',
    description: "Specially formulated for growing kittens with DHA for brain development.",
    features: ["DHA for Brain Development", "Small Kibble Size", "High Protein Content", "Immune System Support"],
    price: "$75.99",
    image: "🐱"
  },
  {
    id: 3,
    name: "Senior Dog Wellness",
    category: 'dog',
    description: "Gentle nutrition for senior dogs with joint support and easy digestion.",
    features: ["Glucosamine & Chondroitin", "Easy to Digest", "Antioxidant Blend", "Heart Health Support"],
    price: "$92.99",
    image: "🐕"
  },
  {
    id: 4,
    name: "Indoor Cat Complete",
    category: 'cat',
    description: "Perfect for indoor cats with hairball control and weight management.",
    features: ["Hairball Control", "Weight Management", "Natural Fiber Blend", "Urinary Health Support"],
    price: "$79.99",
    image: "🐱",
    popular: true
  }
]

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dog' | 'cat'>('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2>Our Premium Product Line</h2>
          <p className="section-subtitle">
            Discover our scientifically formulated nutrition solutions, 
            tailored for every stage of your pet's life.
          </p>
        </div>

        <div className="product-filters animate-fade-up">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'dog' ? 'active' : ''}`}
            onClick={() => setActiveCategory('dog')}
          >
            🐕 Dogs
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'cat' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cat')}
          >
            🐱 Cats
          </button>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
            >
              {product.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="product-image">
                <span className="product-icon">{product.image}</span>
                <div className="product-category">
                  {product.category === 'dog' ? 'For Dogs' : 'For Cats'}
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <ul className="product-features">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="btn btn-secondary btn-small">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="showcase-cta text-center animate-fade-up">
          <h3>Ready to Give Your Pet the Best?</h3>
          <p>Join thousands of pet parents who trust NutriPaws Premium for their beloved companions.</p>
          <a href="#contact" className="btn btn-primary">Get Started Today</a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            
            <div className="modal-header">
              <span className="modal-icon">{selectedProduct.image}</span>
              <div>
                <h3>{selectedProduct.name}</h3>
                <span className="modal-category">
                  {selectedProduct.category === 'dog' ? 'For Dogs' : 'For Cats'}
                </span>
              </div>
            </div>
            
            <div className="modal-body">
              <p>{selectedProduct.description}</p>
              
              <h4>Key Features:</h4>
              <ul className="modal-features">
                {selectedProduct.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <div className="modal-footer">
                <span className="modal-price">{selectedProduct.price}</span>
                <a href="#contact" className="btn btn-primary">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductShowcase