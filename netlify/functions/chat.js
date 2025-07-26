exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  }

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { message, context: chatContext } = JSON.parse(event.body)

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      }
    }

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: chatContext || `You are NutriBot, an AI assistant for NutriPaws Premium pet food company. You are an expert in pet nutrition, feeding advice, and our premium pet food products. 

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
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    })

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json()
      console.error('OpenAI API Error:', errorData)
      
      // Return fallback response instead of error
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          response: getFallbackResponse(message),
          fallback: true 
        }),
      }
    }

    const data = await openaiResponse.json()
    const aiResponse = data.choices[0]?.message?.content || "I'd be happy to help! Could you tell me more about your pet's specific needs?"

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: aiResponse }),
    }

  } catch (error) {
    console.error('Function Error:', error)
    
    // Return fallback response for any errors
    const { message } = JSON.parse(event.body || '{}')
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        response: getFallbackResponse(message || ''),
        fallback: true 
      }),
    }
  }
}

// Fallback responses when OpenAI API is unavailable
function getFallbackResponse(message) {
  const msg = message.toLowerCase()
  
  if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
    return "Our NutriPaws Premium formulas start at $89.99 per bag. We offer multi-pet discounts and subscription savings up to 25% off! Our Summer Hydration Plus Formula is currently on special for $89.99 (reg. $94.99). Would you like to know about specific pricing for your pet type?"
  }
  
  if (msg.includes('ingredients') || msg.includes('what\'s in')) {
    return "Our premium formulas feature high-quality proteins, essential vitamins, and specialized ingredients like cucumber essence and mint extracts in our Summer Hydration Plus. All our foods are veterinary-formulated with no artificial preservatives. Which specific formula would you like ingredient details for?"
  }
  
  if (msg.includes('cat') || msg.includes('feline')) {
    return "For cats, especially multiple cat households, I recommend: multiple water stations (1 per cat + extras), our stress-support formula for anxiety, and wet food for hydration. Indoor cats need different nutrition than outdoor cats. What specific cat nutrition question can I help with?"
  }
  
  if (msg.includes('dog') || msg.includes('canine') || msg.includes('working') || msg.includes('hunting')) {
    return "Working and active dogs have special needs! They require 20-30% more calories during active seasons, high-quality protein for muscle recovery, and pre-hydration before activities. Our Performance Packs are perfect for hunting dogs. What's your dog's activity level?"
  }
  
  if (msg.includes('delivery') || msg.includes('shipping') || msg.includes('subscribe')) {
    return "We offer free shipping on orders over $50! Our Subscribe & Save program gives you 15% off with automatic deliveries every 4, 6, or 8 weeks. Orders typically arrive in 2-3 business days. Would you like to set up a subscription?"
  }
  
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return "Hello! 👋 I'm here to help with all your pet nutrition questions. Whether you need feeding advice, product recommendations, or have concerns about your pet's diet, I'm here to help! What can I assist you with today?"
  }
  
  return "That's a great question! For specific concerns like that, I'd recommend speaking with our nutrition experts at 1-800-NUTRIPAWS or experts@nutripaws.com. They can provide personalized advice for your pet's unique needs."
}