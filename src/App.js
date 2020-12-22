import React, { useState, useEffect, useContext } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Cart from './components/store/Cart';
import Nav from './components/nav/Nav';
import Item from './components/store/Item';

function App() {
  const [state, setState] = useState();
  const [cart, setCart] = useState({
    "selectedProducts": [],
    "totalPrice": 0
  });
  
  useEffect(() => {
    fetch('https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json')
      .then(response => response.json())
      .then(response => {
        setState(response);
      })
    addItems()
  }, [cart.selectedProducts])

  const updateTotal = (total) => {
    setCart((prevState) => ({
      ...prevState,
      totalPrice: total
    }))
    console.log(total)
  }

  const handleDelete = (e) => {
    const item = e.currentTarget.getAttribute('data-id');
    let index = null;
    const filteredList = [...cart.selectedProducts];
    filteredList.forEach((p, i) => {
      if (p.item === item) {
        index = i;
      }
    })
    filteredList.splice(index, 1)
    setCart((prevState) => ({
      ...prevState,
      selectedProducts: filteredList
    }))
  }

  const addItems = () => {
    const total = cart.selectedProducts.reduce((prev, curr) => (parseInt(prev) + parseInt(curr.price)), 0)
    const subTotal = (((total / 100) * 8.75) + total).toFixed(2);
    updateTotal(subTotal)
  }

  const addToCart = (item) => {
    setCart((prevState) => ({
      ...prevState,
      selectedProducts: [...cart.selectedProducts, item]
    }))
  }
  return (
    <div className="App">
      <Nav count={cart.selectedProducts.length}></Nav>
      <Route exact path="/">
        <Item data={state} addToCart={addToCart} />
      </Route>
      <Route exact path="/cart" >
        <Cart total={cart.totalPrice} cartData={cart.selectedProducts} handleDelete={handleDelete} />
      </Route >
    </div >
  );
}

export default App;
