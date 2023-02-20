
import React from 'react'

const Beer = ({ name, price }) => {
  return (
    <div>
      <div className="name">{name}</div>
      <div className="price">{price * 1.1}</div>
    </div>
  )
}

export default Beer