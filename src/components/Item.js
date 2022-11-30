import React from 'react'

const Item = ({ item, children}) => {

  return (
    <div className="Item row">
      <div className="Item-left col-6">
        <div className="Item-image" /> 
        <div className="Item-title">
        {item.month}: {item.name}
        </div>
        <div className="Item-description"> 
          {item.description}
        </div>
      </div>
      <div className="item-right  col-4">
        <div className='item-price'>
          ${item.count ? (item.price*item.count) : item.price}
        </div>
      </div>

      <div className="item-right  col-2">
        {children}
      </div>
    </div>    
  )
}

export default Item