import React, { useState } from 'react';
import cls from 'cls-str';
import List from '../../components/List';

import './index.css';

class Cart extends React.Component {
  state = {
    items: [],
    isOpen: false,
  }
  addToCart(item) {
    const { items } = this.state;
    items.push(item);
    this.setState({ items });
  }
  setOpen(isOpen) {
    this.setState({ isOpen });
  }
  checkout(e) {
    e.preventDefault();
    const { items } = this.state;
    console.log('checkout', items);
  }
  render() {
    const { isOpen, items } = this.state;
    return (
      <div className={cls('shopping-cart', { 'shopping-cart-open': isOpen })} onClick={() => this.setOpen(!isOpen)} >
        <List className="shopping-cart-list" >
          {items.map((item, i) => <List.Item key={i} className="shopping-cart-item">{item.title}</List.Item>)}
        </List>
        <button className="shopping-cart-checkout" onClick={this.checkout.bind(this)} >Checkout</button>
      </div>
    );
  }
}
export default Cart;