import React from 'react'
import Item from '../components/Item'

let totals;
let qty;
let totalPoints;

const getTotalQuantity = (items) => {
    items.forEach(element => {
        if(element.count > 0){
            element['prices'] = element.price * element.count;
        } else {
            element['prices'] = element.price;
        }
        
        if(element['prices'] > 50 && element['prices'] < 100){
            element['points'] = 50;
        } else if(element['prices'] > 50 && element['prices'] > 100){
            let minus = element['prices']-100;
            element['points'] = minus*2+50
        } else {
            element['points'] = 0;
        }
    });
    qty = items.reduce((total, item) => item.count + total, 0);
    totals = items.reduce((total, item) => item.prices + total, 0);
    totalPoints = items.reduce((total, item) => item.points + total, 0);
  }

const CartPage = ({items, groupItems, onAddOne, onRemoveOne}) => {
    getTotalQuantity(groupItems);
    const monthalyPoints = [...groupItems.reduce((r, o) => {
        const key = o.month;        
        const item = r.get(key) || Object.assign({}, o, {
            points: 0
        });        
        item.points += o.points;       
        return r.set(key, item);
      }, new Map()).values()];

  return ( 
    <><h3>Product added</h3>
    <ul className="CartPage-items">
    { items.map((item =>
      <li key={item.id} className="CartPage-item">
        <Item item={item}>
            <div className="CartItem-controls">
            <button
                className="CartItem-removeOne"
                onClick={() => onRemoveOne(item)}>&ndash;
            </button>
                <span className="CartItem-count">{item.count}</span>
            <button
                className="CartItem-addOne"
                onClick={() => onAddOne(item)} >+
            </button>
            </div>
        </Item>
      </li>
    ))}
    <li>
    {qty ? <div className="Item row">
      <div className="Item-left col-6">
        Total:  
        <div className="Item-title">
        </div>
        <div className="Item-description">         
        </div>
      </div>
      <div className="item-right  col-4">
        <div className='item-price'>
        <strong>${totals}</strong> 
        </div>
      </div>

      <div className="item-right  col-2">
      QTY: <strong>{qty}</strong>
      </div>
    </div> : ''}

    {totalPoints ? <div className="Item row">
      <div className="Item-left highlight col-6">
         <p>Overall total points earned: <strong>{totalPoints}</strong> <br /></p>
        {monthalyPoints.length > 0 ? <strong>Point earned by each month</strong> : ''}
        <div className="Item-description">    
        { monthalyPoints.map((item =>
            <span key={item.id} className="CartPage-item">
                {item.month} points earned: <strong>{item.points}</strong><br />
            </span> 
         ))}
        </div>
      </div>

    </div> : '' }
    </li>
    </ul>
    </>
  )
} 
export default CartPage