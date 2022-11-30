import './App.css';
import React, { useState } from "react";
import { items } from "./static-data";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/cartPage";

import Navigation from "./components/Navigation";

const summarizeCart = cart => {
  const groupItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0
    };
    summary[item.id].count++;
    return summary;
  }, {});
  return Object.values(groupItems);
};

function App() {
  const [activeTab, setActiveTab] = useState("Jan");
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeItem = item => {
    let index = cart.findIndex(i => i.id === item.id);
    if ( index >= 0) {
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      })
    }
  }

  return (
    <div className="app">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} count={cart.length} />
      <main className="app-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart} 
          cart={summarizeCart(cart)}
          onRemoveItem={removeItem}
        />
      </main>
 
    </div>
  );
}
const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} tabSelected={tab} onAddToCart={onAddToCart} />;
    case "cart":
      return (
        <CartPage
          items={cart}
          groupItems={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
        />

      );
  }
};
export default App;
