import React from 'react'

const Chatbot: React.FC = () => {
  console.log('🤖 Chatbot component is rendering!')
  
  const handleClick = () => {
    console.log('🎯 Click handler fired!')
    alert('Click works! Event handling is functional.')
  }
  
  return (
    <>
      {/* Test different event approaches */}
      <div 
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          background: 'orange',
          color: 'black',
          padding: '20px',
          fontSize: '18px',
          zIndex: 999999,
          border: '3px solid black',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        🤖 CLICK TEST 1 (onClick)
      </div>
      
      {/* Alternative event approach */}
      <div 
        onMouseDown={() => {
          console.log('🎯 MouseDown fired!')
          alert('MouseDown works!')
        }}
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '10px',
          background: 'lime',
          color: 'black',
          padding: '15px',
          fontSize: '14px',
          zIndex: 999999,
          border: '3px solid black',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        🟢 CLICK TEST 2 (onMouseDown)
      </div>
      
      {/* Native DOM event approach */}
      <div 
        ref={(el) => {
          if (el) {
            el.addEventListener('click', () => {
              console.log('🎯 Native event listener fired!')
              alert('Native addEventListener works!')
            })
          }
        }}
        style={{
          position: 'fixed',
          bottom: '180px',
          right: '10px',
          background: 'cyan',
          color: 'black',
          padding: '15px',
          fontSize: '14px',
          zIndex: 999999,
          border: '3px solid black',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        🔵 CLICK TEST 3 (native)
      </div>
    </>
  )
}

export default Chatbot