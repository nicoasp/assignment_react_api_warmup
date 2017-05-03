import React from 'react'

const Button = (props) => {
  const {size, color, children, ...restOfProps} = props
  const sizeClass = size ? `btn-${size}` : ''

  return (
    <button
      className={`btn btn-${color} ${sizeClass}`}
      {...restOfProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  color: 'default',
  children: 'Submit',
}

export default Button
