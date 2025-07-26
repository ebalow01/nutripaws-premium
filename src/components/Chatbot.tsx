import React from 'react'

const Chatbot: React.FC = () => {
  console.log('🤖 Chatbot component is rendering!')
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: 'orange',
      color: 'black',
      padding: '20px',
      fontSize: '18px',
      zIndex: 999999,
      border: '3px solid black',
      borderRadius: '10px'
    }}>
      🤖 SIMPLE CHATBOT TEST
    </div>
  )
}

export default Chatbot