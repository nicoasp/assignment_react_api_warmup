import React from 'react'

const Button = (props) => {
  const {size, color, children, type, name} = props
  const sizeClass = size ? `btn-${size}` : ''

  return (
    <button
      type={type}
      name={name}
      className={`btn btn-${color} ${sizeClass}`}
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
