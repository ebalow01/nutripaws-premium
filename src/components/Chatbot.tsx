import React, { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chatbot opens
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hi! I'm NutriBot, your AI pet nutrition assistant! 🐾 I can help you with questions about pet food, nutrition, and our NutriPaws Premium products. What would you like to know?",
        isBot: true,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen])

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Product-related questions
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "Our NutriPaws Premium formulas start at $89.99 per bag. We offer multi-pet discounts and subscription savings up to 25% off! Our Summer Hydration Plus Formula is currently on special for $89.99 (reg. $94.99). Would you like to know about specific pricing for your pet type?"
    }
    
    if (message.includes('ingredients') || message.includes('what\'s in')) {
      return "Our premium formulas feature high-quality proteins, essential vitamins, and specialized ingredients like cucumber essence and mint extracts in our Summer Hydration Plus. All our foods are veterinary-formulated with no artificial preservatives. Which specific formula would you like ingredient details for?"
    }
    
    if (message.includes('summer') || message.includes('hot weather') || message.includes('hydration')) {
      return "Great question! During summer, pets need extra hydration and cooling nutrition. Our Summer Hydration Plus Formula has 15% higher moisture content and cooling ingredients. Key tips: provide multiple water sources, avoid feeding 2 hours before exercise, and consider wet food for extra hydration. Need specific advice for your pet type?"
    }
    
    // Pet type specific
    if (message.includes('cat') || message.includes('feline')) {
      return "For cats, especially multiple cat households, I recommend: multiple water stations (1 per cat + extras), our stress-support formula for anxiety, and wet food for hydration. Indoor cats need different nutrition than outdoor cats. What specific cat nutrition question can I help with?"
    }
    
    if (message.includes('dog') || message.includes('canine') || message.includes('working dog') || message.includes('hunting')) {
      return "Working and active dogs have special needs! They require 20-30% more calories during active seasons, high-quality protein for muscle recovery, and pre-hydration before activities. Our Performance Packs are perfect for hunting dogs. What's your dog's activity level?"
    }
    
    if (message.includes('exotic') || message.includes('bird') || message.includes('reptile') || message.includes('rabbit')) {
      return "Exotic pets have unique nutritional needs! Each species requires species-specific care, but universal principles include stable temperatures, increased water access, and nutrition supporting thermal regulation. We offer specialized exotic pet formulas. What type of exotic pet do you have?"
    }
    
    // Health/nutrition questions
    if (message.includes('allergies') || message.includes('sensitive') || message.includes('allergic')) {
      return "Pet allergies are common! Our hypoallergenic formulas avoid common allergens like chicken, beef, and grains. We offer limited ingredient diets and novel protein sources. Symptoms to watch for include itching, digestive issues, and skin problems. Have you identified any specific allergens?"
    }
    
    if (message.includes('weight') || message.includes('overweight') || message.includes('diet')) {
      return "Weight management is crucial for pet health! We offer weight management formulas with controlled calories and increased fiber. Key tips: measure food portions, regular exercise, and avoid free-feeding. Dr. Rodriguez recommends gradual weight loss of 1-2% body weight per week. What's your pet's current situation?"
    }
    
    if (message.includes('puppy') || message.includes('kitten') || message.includes('young')) {
      return "Young pets have special nutritional needs! Puppies and kittens need higher protein, calories, and specific nutrients for growth. Our Growth & Development formulas provide optimal nutrition for the first year. How old is your young pet?"
    }
    
    if (message.includes('senior') || message.includes('old') || message.includes('elderly')) {
      return "Senior pets deserve special care! They need easily digestible proteins, joint support nutrients, and modified calorie levels. Our Senior Vitality formula includes glucosamine, omega-3s, and antioxidants. Seniors also benefit from more frequent, smaller meals. How old is your senior pet?"
    }
    
    // Feeding questions
    if (message.includes('how much') || message.includes('feeding') || message.includes('portion')) {
      return "Feeding amounts depend on your pet's weight, age, and activity level. Generally: 1/4 to 1/2 cup per 10 lbs for dogs, 1/4 cup per 5 lbs for cats. Our bags have detailed feeding guides, and I can help calculate specific amounts. What's your pet's weight and activity level?"
    }
    
    if (message.includes('wet') || message.includes('dry') || message.includes('kibble') || message.includes('canned')) {
      return "Both wet and dry foods have benefits! Wet food provides more hydration and is often more palatable. Dry food helps with dental health and is convenient. Many pets do best with a combination. Our premium wet foods have 70% more moisture than dry. What does your pet currently eat?"
    }
    
    // Company/service questions
    if (message.includes('delivery') || message.includes('shipping') || message.includes('subscribe')) {
      return "We offer free shipping on orders over $50! Our Subscribe & Save program gives you 15% off with automatic deliveries every 4, 6, or 8 weeks. Orders typically arrive in 2-3 business days. We also have expedited shipping available. Would you like to set up a subscription?"
    }
    
    if (message.includes('return') || message.includes('guarantee') || message.includes('refund')) {
      return "We offer a 100% satisfaction guarantee! If your pet doesn't love our food within 30 days, we'll provide a full refund. We also have a transition guide to help switch foods gradually. Our customer service team at 1-800-NUTRIPAWS can help with any concerns."
    }
    
    if (message.includes('vet') || message.includes('veterinarian') || message.includes('doctor')) {
      return "Our Scientific Advisory Board includes Dr. Marina Rodriguez, DVM, PhD, a Board Certified Veterinary Nutritionist. All our formulas are veterinary-developed and tested. For specific health concerns, always consult your veterinarian. We can provide nutritional information to share with your vet!"
    }
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 I'm here to help with all your pet nutrition questions. Whether you need feeding advice, product recommendations, or have concerns about your pet's diet, I'm here to help! What can I assist you with today?"
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! 😊 I'm always here to help keep your pets healthy and happy. Feel free to ask if you have any other questions about nutrition, feeding, or our products!"
    }
    
    // Default responses for unmatched queries
    const defaultResponses = [
      "That's a great question! For specific concerns like that, I'd recommend speaking with our nutrition experts at 1-800-NUTRIPAWS or consulting with your veterinarian. They can provide personalized advice for your pet's unique needs.",
      "I want to make sure I give you the best advice! Could you provide a bit more detail about your pet (type, age, size) so I can offer more specific guidance?",
      "That's an important topic for pet health! Our veterinary team has extensive resources on this. You can reach our expert consultation line at experts@nutripaws.com or 1-800-NUTRIPAWS for detailed guidance.",
      "Every pet is unique! For the most accurate advice on that topic, I'd suggest consulting with Dr. Rodriguez's team or your local veterinarian. They can provide personalized recommendations based on your pet's specific needs."
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    const botResponse = generateBotResponse(inputText)
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      isBot: true,
      timestamp: new Date()
    }

    setIsTyping(false)
    setMessages(prev => [...prev, botMessage])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "What's best for multiple cats?",
    "Summer nutrition tips?",
    "Working dog food recommendations?",
    "Price and delivery info?",
    "Ingredients in your food?"
  ]

  const handleQuickQuestion = (question: string) => {
    setInputText(question)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI chat assistant"
      >
        {isOpen ? '✕' : '🤖'}
        {!isOpen && <span className="chatbot-badge">AI Assistant</span>}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">🤖</div>
              <div>
                <h3>NutriBot AI</h3>
                <span className="chatbot-status">● Online • Pet Nutrition Expert</span>
              </div>
            </div>
            <button 
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
              >
                {message.isBot && <div className="message-avatar">🤖</div>}
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot-message">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="quick-questions">
              <div className="quick-questions-label">Quick questions:</div>
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="quick-question-btn"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input">
            <div className="input-container">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about pet nutrition, feeding tips, or our products..."
                rows={1}
                disabled={isTyping}
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="send-button"
                aria-label="Send message"
              >
                📤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot