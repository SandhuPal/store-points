import React from 'react'
import Item from '../components/Item'


const ItemPage = ({items, tabSelected, onAddToCart}) => {
  return (
    <ul className="itemPage-items">
      {items.map((item) => (      
        <li key={item.id} className="itemPage-item">
            {item.month === tabSelected ? 
                <Item item={item}>
                    <button
                    className="Item-addToCart"
                    onClick={() => onAddToCart(item)} >
                    Add to Cart
                    </button>
                </Item>
            : ''  }
        </li>

      ))}
    </ul>
  )
}

export default ItemPage;