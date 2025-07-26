import React from 'react'

const Chatbot: React.FC = () => {
  console.log('🤖 NutriBot AI Assistant loaded!')
  
  // Simple state without hooks - using DOM manipulation instead
  let isOpen = false
  let chatContainer: HTMLDivElement | null = null
  
  const toggleChat = () => {
    console.log('🎯 Chat toggle clicked! Current state:', isOpen)
    isOpen = !isOpen
    
    if (chatContainer) {
      chatContainer.style.display = isOpen ? 'block' : 'none'
    }
    
    // Update button
    const button = document.getElementById('nutripaws-chat-btn')
    if (button) {
      button.innerHTML = isOpen ? '✕' : '🤖'
      button.style.background = isOpen ? '#666' : 'linear-gradient(135deg, #d4af37, #e8c547)'
    }
  }
  
  const sendMessage = () => {
    const input = document.getElementById('chat-input') as HTMLInputElement
    const messages = document.getElementById('chat-messages')
    
    if (!input?.value.trim() || !messages) return
    
    // Add user message
    const userMsg = document.createElement('div')
    userMsg.style.cssText = 'background: #d4af37; color: white; padding: 8px 12px; border-radius: 12px; margin: 8px 0; max-width: 80%; align-self: flex-end; text-align: right;'
    userMsg.textContent = input.value
    messages.appendChild(userMsg)
    
    // Generate bot response
    const botResponse = generateResponse(input.value)
    input.value = ''
    
    setTimeout(() => {
      const botMsg = document.createElement('div')
      botMsg.style.cssText = 'background: #f0f0f0; color: #333; padding: 8px 12px; border-radius: 12px; margin: 8px 0; max-width: 80%; border-left: 3px solid #d4af37;'
      botMsg.textContent = `🤖 ${botResponse}`
      messages.appendChild(botMsg)
      messages.scrollTop = messages.scrollHeight
    }, 500)
    
    messages.scrollTop = messages.scrollHeight
  }
  
  const generateResponse = (message: string): string => {
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
    if (msg.includes('ingredients')) {
      return "Our premium formulas feature high-quality proteins, essential vitamins, and no artificial preservatives. Which formula interests you?"
    }
    if (msg.includes('hello') || msg.includes('hi')) {
      return "Hello! I'm here to help with pet nutrition questions. What can I assist you with today?"
    }
    
    return "That's a great question! Our nutrition experts at 1-800-NUTRIPAWS can provide detailed guidance for your pet's specific needs."
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
            display: 'flex',
            flexDirection: 'column',
            background: '#fafafa'
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