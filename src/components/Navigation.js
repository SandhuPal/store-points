import React from 'react'

const Navigation = ({activeTab, onTabChange, count}) => {
  const itemClass = (tabName) => `app-nav-item ${activeTab === tabName ? "selected" : ""}`

  return (
    <nav className="app-nav">
      <ul>
        <li className={itemClass('Jan')}><button onClick={() => onTabChange('Jan')}>Jan</button></li>
        <li className={itemClass('Feb')}><button onClick={() => onTabChange('Feb')}>Feb</button></li>
        <li className={itemClass('Mar')}><button onClick={() => onTabChange('Mar')}>Mar</button></li>
        <li className={itemClass("cart")}>
          <button onClick={() => onTabChange("cart")}>Cart</button><span className='count'>{count}</span>
        </li>
      </ul>
    </nav>
  )
} 
export default Navigation