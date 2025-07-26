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
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '2rem',
          overflowY: 'auto'
        }} onClick={() => setIsOpen(false)}>
          <div style={{
            backgroundColor: '#fafafa',
            borderRadius: 0,
            maxWidth: '600px',
            width: '100%',
            maxHeight: 'none',
            overflow: 'visible',
            position: 'relative',
            margin: '2rem auto',
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              style={{
                position: 'fixed',
                top: '2.5rem',
                right: '2.5rem',
                backgroundColor: 'white',
                border: '2px solid #ddd',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => setIsOpen(false)}
              aria-label="Close newsletter"
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#666';
                e.currentTarget.style.borderColor = '#ddd';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              ×
            </button>
            
            <div style={{
              backgroundColor: 'white',
              lineHeight: 1.6,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
              color: '#333',
              overflow: 'hidden',
              padding: 0
            }}>
              {/* Professional Email Header */}
              <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%', backgroundColor: '#2c3e50' }}>
                <tr>
                  <td style={{ padding: '32px 24px', textAlign: 'center' }}>
                    <div style={{ 
                      backgroundColor: 'white', 
                      borderRadius: '50px', 
                      padding: '12px 32px', 
                      display: 'inline-block',
                      marginBottom: '24px'
                    }}>
                      <span style={{ fontSize: '24px', marginRight: '8px' }}>🐾</span>
                      <span style={{ 
                        fontFamily: 'Georgia, serif', 
                        fontSize: '20px', 
                        fontWeight: 'bold', 
                        color: '#2c3e50' 
                      }}>NutriPaws Premium</span>
                    </div>
                    <h1 style={{ 
                      color: 'white', 
                      margin: '0 0 8px', 
                      fontSize: '28px', 
                      fontWeight: '300',
                      fontFamily: 'Georgia, serif'
                    }}>July 2025 Newsletter</h1>
                    <p style={{ 
                      color: '#B8860B', 
                      margin: '0', 
                      fontSize: '16px',
                      fontFamily: 'Arial, sans-serif'
                    }}>Summer Wellness for Your Beloved Companions</p>
                  </td>
                </tr>
              </table>

              {/* Hero Section */}
              <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%', backgroundColor: '#B8860B' }}>
                <tr>
                  <td style={{ padding: '48px 24px', textAlign: 'center' }}>
                    <h2 style={{ 
                      color: 'white', 
                      margin: '0 0 16px', 
                      fontSize: '32px', 
                      fontWeight: 'bold',
                      fontFamily: 'Georgia, serif',
                      lineHeight: '1.2'
                    }}>Keep Your Pets Cool & Healthy This Summer</h2>
                    <p style={{ 
                      color: 'white', 
                      margin: '0 0 32px', 
                      fontSize: '18px',
                      fontFamily: 'Arial, sans-serif',
                      lineHeight: '1.5',
                      maxWidth: '500px',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}>
                      Expert nutrition and safety tips for cats, dogs, and exotic pets during hot weather
                    </p>
                    <a href="#" style={{
                      backgroundColor: 'white',
                      color: '#B8860B',
                      padding: '16px 32px',
                      textDecoration: 'none',
                      borderRadius: '25px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      display: 'inline-block',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>Shop Premium Nutrition</a>
                  </td>
                </tr>
              </table>

              {/* Main Content Area */}
              <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%', backgroundColor: '#fafafa' }}>
                <tr>
                  <td style={{ padding: '0 24px' }}>

                    {/* 3-Column Feature Grid */}
                    <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%', marginTop: '40px' }}>
                      <tr>
                        <td style={{ width: '33.33%', padding: '0 8px' }}>
                          <div style={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px', 
                            padding: '24px', 
                            textAlign: 'center',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            marginBottom: '16px'
                          }}>
                            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🐱</div>
                            <h3 style={{ 
                              margin: '0 0 12px', 
                              fontSize: '18px', 
                              color: '#2c3e50',
                              fontFamily: 'Georgia, serif'
                            }}>Multi-Cat Care</h3>
                            <p style={{ 
                              margin: '0', 
                              fontSize: '14px', 
                              color: '#5a6c7d',
                              lineHeight: '1.4',
                              fontFamily: 'Arial, sans-serif'
                            }}>Indoor cooling tips & nutrition for 3+ cats</p>
                          </div>
                        </td>
                        <td style={{ width: '33.33%', padding: '0 8px' }}>
                          <div style={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px', 
                            padding: '24px', 
                            textAlign: 'center',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            marginBottom: '16px'
                          }}>
                            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🐕</div>
                            <h3 style={{ 
                              margin: '0 0 12px', 
                              fontSize: '18px', 
                              color: '#2c3e50',
                              fontFamily: 'Georgia, serif'
                            }}>Working Dogs</h3>
                            <p style={{ 
                              margin: '0', 
                              fontSize: '14px', 
                              color: '#5a6c7d',
                              lineHeight: '1.4',
                              fontFamily: 'Arial, sans-serif'
                            }}>Performance nutrition for active & hunting dogs</p>
                          </div>
                        </td>
                        <td style={{ width: '33.33%', padding: '0 8px' }}>
                          <div style={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px', 
                            padding: '24px', 
                            textAlign: 'center',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            marginBottom: '16px'
                          }}>
                            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🦜</div>
                            <h3 style={{ 
                              margin: '0 0 12px', 
                              fontSize: '18px', 
                              color: '#2c3e50',
                              fontFamily: 'Georgia, serif'
                            }}>Exotic Pets</h3>
                            <p style={{ 
                              margin: '0', 
                              fontSize: '14px', 
                              color: '#5a6c7d',
                              lineHeight: '1.4',
                              fontFamily: 'Arial, sans-serif'
                            }}>Specialized care for unique companions</p>
                          </div>
                        </td>
                      </tr>
                    </table>

                    {/* Featured Product Section */}
                    <div style={{ 
                      backgroundColor: 'white', 
                      borderRadius: '12px', 
                      marginTop: '40px', 
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                    }}>
                      {/* Product Header */}
                      <div style={{ 
                        backgroundColor: '#B8860B', 
                        padding: '24px', 
                        textAlign: 'center' 
                      }}>
                        <div style={{ 
                          backgroundColor: 'rgba(255,255,255,0.2)', 
                          borderRadius: '20px', 
                          padding: '8px 16px', 
                          display: 'inline-block',
                          marginBottom: '16px'
                        }}>
                          <span style={{ 
                            color: 'white', 
                            fontSize: '12px', 
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontFamily: 'Arial, sans-serif'
                          }}>🏆 Featured Product</span>
                        </div>
                        <h2 style={{ 
                          color: 'white', 
                          margin: '0 0 8px', 
                          fontSize: '24px',
                          fontFamily: 'Georgia, serif'
                        }}>Summer Hydration Plus Formula</h2>
                        <p style={{ 
                          color: 'white', 
                          margin: '0', 
                          fontSize: '14px',
                          fontFamily: 'Arial, sans-serif'
                        }}>Limited Edition • July-August 2025</p>
                      </div>
                      
                      {/* Product Content */}
                      <div style={{ padding: '32px 24px' }}>
                        <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
                          <tr>
                            <td style={{ width: '50%', paddingRight: '16px' }}>
                              <h4 style={{ 
                                margin: '0 0 16px', 
                                fontSize: '16px', 
                                color: '#2c3e50',
                                fontFamily: 'Georgia, serif'
                              }}>Key Benefits:</h4>
                              <ul style={{ 
                                margin: '0', 
                                paddingLeft: '0', 
                                listStyle: 'none',
                                fontFamily: 'Arial, sans-serif'
                              }}>
                                <li style={{ 
                                  marginBottom: '8px', 
                                  fontSize: '14px', 
                                  color: '#5a6c7d',
                                  paddingLeft: '20px',
                                  position: 'relative'
                                }}>
                                  <span style={{ 
                                    position: 'absolute', 
                                    left: '0', 
                                    color: '#27AE60' 
                                  }}>✓</span>
                                  15% higher moisture content
                                </li>
                                <li style={{ 
                                  marginBottom: '8px', 
                                  fontSize: '14px', 
                                  color: '#5a6c7d',
                                  paddingLeft: '20px',
                                  position: 'relative'
                                }}>
                                  <span style={{ 
                                    position: 'absolute', 
                                    left: '0', 
                                    color: '#27AE60' 
                                  }}>✓</span>
                                  Cooling cucumber & mint extracts
                                </li>
                                <li style={{ 
                                  marginBottom: '8px', 
                                  fontSize: '14px', 
                                  color: '#5a6c7d',
                                  paddingLeft: '20px',
                                  position: 'relative'
                                }}>
                                  <span style={{ 
                                    position: 'absolute', 
                                    left: '0', 
                                    color: '#27AE60' 
                                  }}>✓</span>
                                  Enhanced electrolyte balance
                                </li>
                                <li style={{ 
                                  marginBottom: '0', 
                                  fontSize: '14px', 
                                  color: '#5a6c7d',
                                  paddingLeft: '20px',
                                  position: 'relative'
                                }}>
                                  <span style={{ 
                                    position: 'absolute', 
                                    left: '0', 
                                    color: '#27AE60' 
                                  }}>✓</span>
                                  Veterinary-formulated
                                </li>
                              </ul>
                            </td>
                            <td style={{ width: '50%', paddingLeft: '16px' }}>
                              <h4 style={{ 
                                margin: '0 0 16px', 
                                fontSize: '16px', 
                                color: '#2c3e50',
                                fontFamily: 'Georgia, serif'
                              }}>Special Pricing:</h4>
                              <div style={{ 
                                backgroundColor: '#fafafa', 
                                borderRadius: '8px', 
                                padding: '16px',
                                marginBottom: '16px'
                              }}>
                                <div style={{ 
                                  fontSize: '14px', 
                                  marginBottom: '8px',
                                  fontFamily: 'Arial, sans-serif'
                                }}>
                                  <span style={{ color: '#5a6c7d' }}>Single bag: </span>
                                  <span style={{ 
                                    color: '#B8860B', 
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                  }}>$89.99</span>
                                  <span style={{ 
                                    color: '#999', 
                                    textDecoration: 'line-through',
                                    marginLeft: '8px'
                                  }}>$94.99</span>
                                </div>
                                <div style={{ 
                                  fontSize: '14px', 
                                  marginBottom: '8px',
                                  fontFamily: 'Arial, sans-serif'
                                }}>
                                  <span style={{ color: '#5a6c7d' }}>3-bag bundle: </span>
                                  <span style={{ 
                                    color: '#B8860B', 
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                  }}>$249.99</span>
                                </div>
                                <div style={{ 
                                  fontSize: '12px', 
                                  color: '#27AE60',
                                  fontWeight: 'bold',
                                  fontFamily: 'Arial, sans-serif'
                                }}>+ 15% off with subscription</div>
                              </div>
                              <a href="#" style={{
                                backgroundColor: '#B8860B',
                                color: 'white',
                                padding: '12px 24px',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                fontFamily: 'Arial, sans-serif',
                                display: 'inline-block',
                                textTransform: 'uppercase'
                              }}>Order Now</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>

                    {/* Expert Tip Card */}
                    <div style={{ 
                      backgroundColor: 'white', 
                      borderRadius: '12px', 
                      marginTop: '40px', 
                      padding: '32px 24px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      borderLeft: '4px solid #27AE60'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '20px' 
                      }}>
                        <div style={{ 
                          backgroundColor: '#27AE60', 
                          borderRadius: '50%', 
                          width: '48px', 
                          height: '48px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '16px'
                        }}>
                          <span style={{ color: 'white', fontSize: '20px' }}>👨‍⚕️</span>
                        </div>
                        <div>
                          <h3 style={{ 
                            margin: '0 0 4px', 
                            fontSize: '18px', 
                            color: '#2c3e50',
                            fontFamily: 'Georgia, serif'
                          }}>Expert Tip of the Month</h3>
                          <p style={{ 
                            margin: '0', 
                            fontSize: '12px', 
                            color: '#5a6c7d',
                            fontFamily: 'Arial, sans-serif'
                          }}>Dr. Marina Rodriguez, DVM • Board Certified Veterinary Nutritionist</p>
                        </div>
                      </div>
                      
                      <h4 style={{ 
                        margin: '0 0 12px', 
                        fontSize: '16px', 
                        color: '#2c3e50',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic'
                      }}>"How can I keep my pets properly hydrated during summer heat waves?"</h4>
                      
                      <p style={{ 
                        margin: '0 0 16px', 
                        fontSize: '14px', 
                        color: '#5a6c7d',
                        lineHeight: '1.6',
                        fontFamily: 'Arial, sans-serif'
                      }}>
                        <strong style={{ color: '#27AE60' }}>Dr. Rodriguez:</strong> "The key is proactive hydration, not reactive. 
                        For cats, place multiple water bowls throughout your home - one per cat plus extras. 
                        For working dogs, pre-hydrate 30 minutes before activity. For all pets, wet food provides 
                        70% more moisture than dry kibble - consider switching during hot months."
                      </p>
                      
                      <div style={{ 
                        backgroundColor: '#f8fdf8', 
                        borderRadius: '8px', 
                        padding: '16px',
                        border: '1px solid #e8f5e8'
                      }}>
                        <p style={{ 
                          margin: '0', 
                          fontSize: '12px', 
                          color: '#27AE60',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif'
                        }}>💡 Pro Tip: Add a small amount of low-sodium chicken broth to water bowls to encourage drinking!</p>
                      </div>
                    </div>

                    {/* Social Proof / Testimonial */}
                    <div style={{ 
                      backgroundColor: 'white', 
                      borderRadius: '12px', 
                      marginTop: '40px', 
                      padding: '32px 24px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      borderLeft: '4px solid #B8860B'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        marginBottom: '20px' 
                      }}>
                        <div style={{ 
                          backgroundColor: '#B8860B', 
                          borderRadius: '50%', 
                          width: '48px', 
                          height: '48px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '16px',
                          flexShrink: 0
                        }}>
                          <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>JM</span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ 
                            margin: '0 0 4px', 
                            fontSize: '16px', 
                            color: '#2c3e50',
                            fontFamily: 'Georgia, serif'
                          }}>Customer Success Story</h4>
                          <p style={{ 
                            margin: '0', 
                            fontSize: '12px', 
                            color: '#5a6c7d',
                            fontFamily: 'Arial, sans-serif'
                          }}>Jennifer M. • Multi-cat owner • Customer since 2023</p>
                        </div>
                        <div style={{ fontSize: '24px', color: '#B8860B' }}>⭐⭐⭐⭐⭐</div>
                      </div>
                      
                      <blockquote style={{ 
                        margin: '0 0 20px', 
                        fontSize: '14px', 
                        color: '#2c3e50',
                        lineHeight: '1.6',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        paddingLeft: '16px',
                        borderLeft: '3px solid #B8860B'
                      }}>
                        "Last July 4th was a nightmare - Luna hid under the bed for three days. This year, after 6 months 
                        on NutriPaws Premium, she barely flinched during fireworks! The stress-support formula really works. 
                        Worth every penny for peace of mind."
                      </blockquote>
                      
                      <div style={{ 
                        backgroundColor: '#fafafa', 
                        borderRadius: '8px', 
                        padding: '16px',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <div style={{ flex: 1, paddingRight: '16px' }}>
                          <div style={{ 
                            fontSize: '12px', 
                            color: '#999', 
                            marginBottom: '4px',
                            fontFamily: 'Arial, sans-serif'
                          }}>BEFORE</div>
                          <div style={{ 
                            fontSize: '13px', 
                            color: '#5a6c7d',
                            fontFamily: 'Arial, sans-serif'
                          }}>Severe anxiety, hiding during loud events</div>
                        </div>
                        <div style={{ 
                          width: '2px', 
                          backgroundColor: '#e0e0e0',
                          margin: '0 16px'
                        }}></div>
                        <div style={{ flex: 1, paddingLeft: '16px' }}>
                          <div style={{ 
                            fontSize: '12px', 
                            color: '#27AE60', 
                            marginBottom: '4px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold'
                          }}>AFTER</div>
                          <div style={{ 
                            fontSize: '13px', 
                            color: '#5a6c7d',
                            fontFamily: 'Arial, sans-serif'
                          }}>Calm demeanor, slept through fireworks</div>
                        </div>
                      </div>
                    </div>

                    {/* Exclusive Offers - Clean & Focused */}
                    <div style={{ 
                      backgroundColor: 'white', 
                      borderRadius: '12px', 
                      marginTop: '40px', 
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{ 
                        backgroundColor: '#2c3e50', 
                        padding: '24px', 
                        textAlign: 'center' 
                      }}>
                        <h3 style={{ 
                          color: 'white', 
                          margin: '0 0 8px', 
                          fontSize: '20px',
                          fontFamily: 'Georgia, serif'
                        }}>🎁 Exclusive Summer Offers</h3>
                        <p style={{ 
                          color: '#B8860B', 
                          margin: '0', 
                          fontSize: '14px',
                          fontFamily: 'Arial, sans-serif'
                        }}>Limited time • Newsletter subscribers only</p>
                      </div>
                      
                      <div style={{ padding: '32px 24px' }}>
                        <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
                          <tr>
                            <td style={{ width: '50%', paddingRight: '16px' }}>
                              <div style={{ 
                                backgroundColor: '#f8fdf8', 
                                borderRadius: '8px', 
                                padding: '20px',
                                textAlign: 'center',
                                border: '2px dashed #27AE60'
                              }}>
                                <div style={{ fontSize: '24px', marginBottom: '12px' }}>🐱</div>
                                <h4 style={{ 
                                  margin: '0 0 12px', 
                                  fontSize: '16px', 
                                  color: '#2c3e50',
                                  fontFamily: 'Georgia, serif'
                                }}>Multi-Cat Special</h4>
                                <div style={{ 
                                  backgroundColor: '#27AE60', 
                                  color: 'white', 
                                  padding: '8px 16px', 
                                  borderRadius: '20px',
                                  fontSize: '14px',
                                  fontWeight: 'bold',
                                  marginBottom: '12px',
                                  fontFamily: 'Arial, sans-serif'
                                }}>25% OFF</div>
                                <p style={{ 
                                  margin: '0', 
                                  fontSize: '12px', 
                                  color: '#5a6c7d',
                                  fontFamily: 'Arial, sans-serif'
                                }}>Orders of 6+ cans<br/>+ Free shipping</p>
                              </div>
                            </td>
                            <td style={{ width: '50%', paddingLeft: '16px' }}>
                              <div style={{ 
                                backgroundColor: '#fdf8f0', 
                                borderRadius: '8px', 
                                padding: '20px',
                                textAlign: 'center',
                                border: '2px dashed #B8860B'
                              }}>
                                <div style={{ fontSize: '24px', marginBottom: '12px' }}>🐕</div>
                                <h4 style={{ 
                                  margin: '0 0 12px', 
                                  fontSize: '16px', 
                                  color: '#2c3e50',
                                  fontFamily: 'Georgia, serif'
                                }}>Working Dog Pack</h4>
                                <div style={{ 
                                  backgroundColor: '#B8860B', 
                                  color: 'white', 
                                  padding: '8px 16px', 
                                  borderRadius: '20px',
                                  fontSize: '14px',
                                  fontWeight: 'bold',
                                  marginBottom: '12px',
                                  fontFamily: 'Arial, sans-serif'
                                }}>20% OFF</div>
                                <p style={{ 
                                  margin: '0', 
                                  fontSize: '12px', 
                                  color: '#5a6c7d',
                                  fontFamily: 'Arial, sans-serif'
                                }}>High-protein formula<br/>+ Training treats</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                        
                        <div style={{ 
                          textAlign: 'center', 
                          marginTop: '24px',
                          padding: '16px',
                          backgroundColor: '#fafafa',
                          borderRadius: '8px'
                        }}>
                          <div style={{ 
                            fontSize: '12px', 
                            color: '#5a6c7d', 
                            marginBottom: '8px',
                            fontFamily: 'Arial, sans-serif'
                          }}>Use promo code at checkout:</div>
                          <div style={{ 
                            backgroundColor: '#2c3e50', 
                            color: 'white', 
                            padding: '8px 20px', 
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            display: 'inline-block',
                            fontFamily: 'monospace'
                          }}>SUMMER25</div>
                        </div>
                      </div>
                    </div>

                    {/* Final CTA */}
                    <div style={{ 
                      backgroundColor: '#B8860B', 
                      borderRadius: '12px', 
                      marginTop: '40px', 
                      padding: '40px 24px',
                      textAlign: 'center'
                    }}>
                      <h3 style={{ 
                        color: 'white', 
                        margin: '0 0 16px', 
                        fontSize: '24px',
                        fontFamily: 'Georgia, serif'
                      }}>Ready to Give Your Pet the Best?</h3>
                      <p style={{ 
                        color: 'white', 
                        margin: '0 0 24px', 
                        fontSize: '16px',
                        fontFamily: 'Arial, sans-serif',
                        opacity: 0.9
                      }}>Join thousands of pet parents who trust NutriPaws Premium</p>
                      <a href="#" style={{
                        backgroundColor: 'white',
                        color: '#B8860B',
                        padding: '16px 32px',
                        textDecoration: 'none',
                        borderRadius: '25px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: 'Arial, sans-serif',
                        display: 'inline-block',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginRight: '16px'
                      }}>Shop Now</a>
                      <a href="#" style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        padding: '16px 32px',
                        textDecoration: 'none',
                        borderRadius: '25px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: 'Arial, sans-serif',
                        display: 'inline-block',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        border: '2px solid white'
                      }}>Learn More</a>
                    </div>

                  </td>
                </tr>
              </table>

              {/* Professional Email Footer */}
              <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%', backgroundColor: '#2c3e50' }}>
                <tr>
                  <td style={{ padding: '40px 24px', textAlign: 'center' }}>
                    
                    {/* Company Info */}
                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ 
                        backgroundColor: 'white', 
                        borderRadius: '50px', 
                        padding: '8px 24px', 
                        display: 'inline-block',
                        marginBottom: '16px'
                      }}>
                        <span style={{ fontSize: '16px', marginRight: '8px' }}>🐾</span>
                        <span style={{ 
                          fontFamily: 'Georgia, serif', 
                          fontSize: '16px', 
                          fontWeight: 'bold', 
                          color: '#2c3e50' 
                        }}>NutriPaws Premium</span>
                      </div>
                      <p style={{ 
                        color: '#ccc', 
                        margin: '0', 
                        fontSize: '14px',
                        fontFamily: 'Arial, sans-serif',
                        lineHeight: '1.5'
                      }}>
                        Premium Pet Nutrition • Veterinary Formulated<br/>
                        123 Pet Street, Suite 100, Petville, CA 90210<br/>
                        1-800-NUTRIPAWS • experts@nutripaws.com
                      </p>
                    </div>

                    {/* Social Links */}
                    <div style={{ marginBottom: '24px' }}>
                      <a href="#" style={{ 
                        backgroundColor: 'white', 
                        borderRadius: '50%', 
                        width: '40px', 
                        height: '40px', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 8px',
                        textDecoration: 'none',
                        color: '#2c3e50',
                        fontSize: '16px'
                      }}>📘</a>
                      <a href="#" style={{ 
                        backgroundColor: 'white', 
                        borderRadius: '50%', 
                        width: '40px', 
                        height: '40px', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 8px',
                        textDecoration: 'none',
                        color: '#2c3e50',
                        fontSize: '16px'
                      }}>📷</a>
                      <a href="#" style={{ 
                        backgroundColor: 'white', 
                        borderRadius: '50%', 
                        width: '40px', 
                        height: '40px', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 8px',
                        textDecoration: 'none',
                        color: '#2c3e50',
                        fontSize: '16px'
                      }}>🐦</a>
                    </div>

                    {/* Footer Links */}
                    <div style={{ marginBottom: '24px' }}>
                      <a href="#" style={{ 
                        color: '#B8860B', 
                        textDecoration: 'none', 
                        fontSize: '14px',
                        fontFamily: 'Arial, sans-serif',
                        margin: '0 16px'
                      }}>Shop</a>
                      <a href="#" style={{ 
                        color: '#B8860B', 
                        textDecoration: 'none', 
                        fontSize: '14px',
                        fontFamily: 'Arial, sans-serif',
                        margin: '0 16px'
                      }}>About</a>
                      <a href="#" style={{ 
                        color: '#B8860B', 
                        textDecoration: 'none', 
                        fontSize: '14px',
                        fontFamily: 'Arial, sans-serif',
                        margin: '0 16px'
                      }}>Contact</a>
                      <a href="#" style={{ 
                        color: '#B8860B', 
                        textDecoration: 'none', 
                        fontSize: '14px',
                        fontFamily: 'Arial, sans-serif',
                        margin: '0 16px'
                      }}>Support</a>
                    </div>

                    {/* Legal */}
                    <div style={{ 
                      borderTop: '1px solid #555', 
                      paddingTop: '24px' 
                    }}>
                      <p style={{ 
                        color: '#999', 
                        margin: '0 0 12px', 
                        fontSize: '12px',
                        fontFamily: 'Arial, sans-serif'
                      }}>
                        © 2025 NutriPaws Premium. All rights reserved.<br/>
                        Scientific Advisory Board: Dr. Marina Rodriguez, DVM, PhD
                      </p>
                      <p style={{ 
                        color: '#666', 
                        margin: '0', 
                        fontSize: '11px',
                        fontFamily: 'Arial, sans-serif'
                      }}>
                        <a href="#" style={{ color: '#666', textDecoration: 'underline' }}>Unsubscribe</a> • 
                        <a href="#" style={{ color: '#666', textDecoration: 'underline' }}> Update Preferences</a> • 
                        <a href="#" style={{ color: '#666', textDecoration: 'underline' }}> View in Browser</a>
                      </p>
                    </div>

                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsletterPreview