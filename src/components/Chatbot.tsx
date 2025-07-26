import React from 'react'

const Chatbot: React.FC = () => {
  console.log('🤖 NutriBot AI Assistant loaded!')
  
  // Simple state without hooks - using DOM manipulation instead
  let isOpen = false
  let chatContainer: HTMLDivElement | null = null
  
  // Professional scrolling utility - single, reliable method
  const scrollToBottom = (container: HTMLElement, smooth: boolean = false) => {
    if (!container) return
    
    container.style.scrollBehavior = smooth ? 'smooth' : 'auto'
    
    requestAnimationFrame(() => {
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight
      const maxScrollTop = scrollHeight - clientHeight
      
      if (maxScrollTop > 0) {
        container.scrollTop = maxScrollTop
      }
    })
  }
  
  // Reliable message appender with proper scrolling
  const appendMessage = (container: HTMLElement, messageElement: HTMLElement, autoScroll: boolean = true) => {
    container.appendChild(messageElement)
    
    if (autoScroll) {
      scrollToBottom(container, false)  // Immediate feedback
      setTimeout(() => scrollToBottom(container, true), 50)  // Smooth follow-up
    }
  }
  
  const toggleChat = () => {
    console.log('🎯 Chat toggle clicked! Current state:', isOpen)
    isOpen = !isOpen
    
    if (chatContainer) {
      chatContainer.style.display = isOpen ? 'flex' : 'none'
      
      // Auto-scroll to bottom when opening chat
      if (isOpen) {
        // Use requestAnimationFrame to ensure chat is visible before scrolling
        requestAnimationFrame(() => {
          const messages = document.getElementById('chat-messages')
          if (messages) {
            scrollToBottom(messages, false)
          }
        })
      }
    }
    
    // Update button
    const button = document.getElementById('nutripaws-chat-btn')
    if (button) {
      button.innerHTML = isOpen ? '✕' : '🤖'
      button.style.background = isOpen ? '#666' : 'linear-gradient(135deg, #d4af37, #e8c547)'
    }
  }

  const sendMessage = async () => {
    const input = document.getElementById('chat-input') as HTMLInputElement
    const messages = document.getElementById('chat-messages')
    
    if (!input?.value.trim() || !messages) return
    
    const userMessage = input.value
    input.value = ''
    
    // Add user message
    const userMsg = document.createElement('div')
    userMsg.className = 'chat-message user'
    userMsg.style.cssText = 'background: #d4af37; color: white; padding: 8px 12px; border-radius: 12px; margin: 8px 0; max-width: 80%; align-self: flex-end; text-align: right; margin-left: auto; word-wrap: break-word;'
    userMsg.textContent = userMessage
    
    appendMessage(messages, userMsg)
    
    // Add typing indicator
    const typingMsg = document.createElement('div')
    typingMsg.className = 'chat-message typing'
    typingMsg.style.cssText = 'background: #f0f0f0; color: #333; padding: 8px 12px; border-radius: 12px; margin: 8px 0; max-width: 80%; border-left: 3px solid #d4af37;'
    typingMsg.innerHTML = '🤖 <em>Thinking...</em>'
    typingMsg.id = 'typing-indicator'
    
    appendMessage(messages, typingMsg)
    
    try {
      // Get AI response
      const botResponse = await generateResponse(userMessage)
      
      // Remove typing indicator
      const typingIndicator = document.getElementById('typing-indicator')
      if (typingIndicator) {
        typingIndicator.remove()
      }
      
      // Add bot response
      const botMsg = document.createElement('div')
      botMsg.className = 'chat-message bot'
      botMsg.style.cssText = 'background: #f0f0f0; color: #333; padding: 8px 12px; border-radius: 12px; margin: 8px 0; max-width: 80%; border-left: 3px solid #d4af37; word-wrap: break-word; animation: fadeIn 0.3s ease;'
      botMsg.textContent = `🤖 ${botResponse}`
      
      appendMessage(messages, botMsg)
      
    } catch (error) {
      console.error('Error sending message:', error)
      
      // Remove typing indicator
      const typingIndicator = document.getElementById('typing-indicator')
      if (typingIndicator) {
        typingIndicator.remove()
      }
      
      // Show error message
      const errorMsg = document.createElement('div')
      errorMsg.className = 'chat-message error'
      errorMsg.style.cssText = 'background: #ffe6e6; color: #d33; padding: 8px 12px; border-radius: 12px; margin: 8px 0; max-width: 80%; border-left: 3px solid #d33; word-wrap: break-word;'
      errorMsg.textContent = '🤖 Sorry, I\'m having trouble right now. Please try again or contact 1-800-NUTRIPAWS!'
      
      appendMessage(messages, errorMsg)
    }
  }
  
  const generateResponse = async (message: string): Promise<string> => {
    try {
      // Call OpenAI API with pet nutrition context
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          context: `You are NutriBot, an AI assistant for NutriPaws Premium pet food company. You are an expert in pet nutrition, feeding advice, and our premium pet food products. 

Our Products:
- NutriPaws Premium formulas start at $89.99
- Summer Hydration Plus Formula for hot weather ($89.99, reg $94.99)
- Performance Packs for working dogs 
- Stress-support formulas with L-tryptophan and magnesium
- Multi-pet discounts and subscription savings up to 25% off
- All veterinary-formulated with no artificial preservatives

Key Info:
- Contact: 1-800-NUTRIPAWS or experts@nutripaws.com
- Free shipping on orders over $50
- 100% satisfaction guarantee, 30-day return policy
- Scientific Advisory Board: Dr. Marina Rodriguez, DVM, PhD

Provide helpful, accurate advice about pet nutrition, feeding, and our products. Keep responses conversational and under 150 words.`
        })
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data = await response.json()
      return data.response || "I'd be happy to help! Could you tell me more about your pet's specific needs?"
      
    } catch (error) {
      console.error('AI API Error:', error)
      
      // Fallback responses if API fails
      const msg = message.toLowerCase()
      
      if (msg.includes('price') || msg.includes('cost')) {
        return "Our NutriPaws Premium starts at $89.99. We offer multi-pet discounts and subscription savings up to 25% off!"
      }
      if (msg.includes('cat') || msg.includes('feline')) {
        return "For cats, I recommend multiple water stations and our stress-support formula. What specific cat question can I help with?"
      }
      if (msg.includes('dog') || msg.includes('canine')) {
        return "Working dogs need high-quality protein and proper hydration. Our Performance Packs are perfect for active dogs!"
      }
      
      return "I'm having trouble connecting to my AI brain right now, but our nutrition experts at 1-800-NUTRIPAWS are standing by to help with your pet's specific needs!"
    }
  }
  
  return (
    <>
      {/* Chat Toggle Button */}
      <div
        id="nutripaws-chat-btn"
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #d4af37, #e8c547)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: 'white',
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 10000,
          fontFamily: 'Arial, sans-serif'
        }}
      >
        🤖
      </div>
      
      {/* Chat Window */}
      <div
        ref={(el) => { chatContainer = el }}
        style={{
          position: 'fixed',
          bottom: '6rem',
          right: '2rem',
          width: '350px',
          height: '500px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          display: 'none',
          flexDirection: 'column',
          zIndex: 10001,
          overflow: 'hidden',
          border: '1px solid #e0e0e0',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #d4af37, #e8c547)',
          color: 'white',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '1.2rem' }}>🤖</span>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>NutriBot AI</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Pet Nutrition Expert</div>
          </div>
        </div>
        
        {/* Messages */}
        <div
          id="chat-messages"
          style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            background: '#fafafa',
            minHeight: 0, // Critical for flex scroll containers
            scrollBehavior: 'smooth',
            // Enhanced scrollbar styling
            scrollbarWidth: 'thin',
            scrollbarColor: '#d4af37 #f0f0f0'
          }}
        >
          <div style={{
            background: '#f0f0f0',
            color: '#333',
            padding: '8px 12px',
            borderRadius: '12px',
            margin: '8px 0',
            maxWidth: '80%',
            borderLeft: '3px solid #d4af37'
          }}>
            🤖 Hi! I'm NutriBot, your AI pet nutrition assistant! Ask me about our products, feeding tips, or pet health!
          </div>
        </div>
        
        {/* Input */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          gap: '0.5rem'
        }}>
          <input
            id="chat-input"
            type="text"
            placeholder="Ask about pet nutrition..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage()
              }
            }}
            style={{
              flex: 1,
              border: '2px solid #e0e0e0',
              borderRadius: '20px',
              padding: '0.5rem 1rem',
              outline: 'none',
              fontSize: '0.9rem'
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              background: '#d4af37',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem'
            }}
          >
            📤
          </button>
        </div>
      </div>
    </>
  )
}

export default Chatbot