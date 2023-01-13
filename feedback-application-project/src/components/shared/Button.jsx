import React from 'react'

function Button({ children, type, isDisabled }) {
  return ( 
    <button type={type} disabled={isDisabled} className={`btn`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button',
    isDisabled: false
}
export default Button