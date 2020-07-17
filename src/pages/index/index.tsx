import React, { useRef } from 'react';
import List from '../../components/List';
import Cart from '../../components/Cart';

import './index.css';

const images = [
  "http://p0.meituan.net/200.0/deal/93b5e4a1ba3fbc84770ae260271953c382337.jpg@131_0_440_440a%7C267h_267w_2e_90Q",
  "http://p1.meituan.net/200.0/deal/8f9b2bc4a21eaf69f7353a1a0e5c59ae111118.jpg@147_0_756_756a%7C267h_267w_2e_90Q",
  "http://p0.meituan.net/200.0/deal/bfaa8df5ab37d762b8b50f592e52847e69425.jpg@142_0_533_533a%7C267h_267w_2e_90Q",
  "http://p0.meituan.net/200.0/deal/35f38736d3d9ead1cde86c7eec1dac2837599.jpg@1_0_486_486a%7C267h_267w_2e_90Q",
  "http://p1.meituan.net/200.0/deal/caffa7440cac3a82555ec5791ace77ef21445.jpg@205_0_300_300a%7C267h_267w_2e_90Q",
  "http://p1.meituan.net/200.0/deal/01e62a815be586d19c9c351760e4a8e6115754.jpg@106_0_640_640a%7C267h_267w_2e_90Q",
  "http://p1.meituan.net/200.0/deal/1d68949168ba1fa1ce7a76bee61f49d836378.jpg@86_0_267_267a%7C267h_267w_2e_100Q",
  "http://p1.meituan.net/200.0/deal/d19262ce0f0c3163739870aec2b4b93465709.jpg@160_0_480_480a%7C267h_267w_2e_90Q",
  "http://p0.meituan.net/200.0/deal/43602b3656f22ae50f909836c0dd3f8039600.jpg@95_0_330_330a%7C267h_267w_2e_90Q",
]

const data = () => {
  const n = Math.random() * images.length | 0;
  return {
    title: 'Test',
    description: 'A long description',
    price: 8.88,
    img: images[n]
  }
};

const list = [
  data(),
  data(),
  data(),
  data(),
  data(),
  data(),
  data(),
  data(),
  data(),
  data(),
  data(),
];

const Item = ({ data, addToCart }) => {
  const { title, description, img, price } = data;
  return (
    <List.Item className="shop-item">
      <img className="shop-item-img" src={img} />
      <h3 className="shop-item-title">{title}</h3>
      <p className="shop-item-description">{description}</p>
      <span className="shop-item-price">{price}</span>
      <button className="shop-item-cart" onClick={() => addToCart(data)} >Add to Cart</button>
    </List.Item>
  );
};
const Index = () => {
  const cart = useRef(null);
  const addToCart = item => 
    cart.current.addToCart(item);
  return (
    <div className="page page-index" >
      <List>
        {list.map((item, i) => <Item key={i} data={item} addToCart={addToCart} />)}
      </List>
      <Cart ref={cart} />
    </div>
  )
};

export default Index;