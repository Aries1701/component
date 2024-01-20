import React from 'react'

const Button = ({text, backgroundColor,...rest}) => {
  return (
    <div style={{
        backgroundColor,
        ...rest
    }
    }>{text}</div>
  )
}

export default Button