import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import axios from 'axios';
import { clearItems } from '../redux/slices/cartSlice';
import { setDisabled } from '../redux/slices/filterSlice';

const Cart = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const { totalPrice, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const onClickClear = () => {
    dispatch(clearItems());
  };

  useEffect(() => {
    if (totalCount === 0) {
      dispatch(setDisabled(false));
    }
  }, [totalCount]);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    onClickClear();
    try {
      const res = await axios.post(`https://test-task-delivery-app.onrender.com/order`, {
        name: name,
        email: email,
        phone: phone,
        address: address,
        title: 'order',
        orderItems: items,
        price: totalPrice.toFixed(2),
        count: totalCount,
        shop: items[0].shop,
      });
      dispatch(setDisabled(false));
      alert('thank you for order');
    } catch (error) {
      console.log(error);
    }
  };
  if (!totalCount) {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>CART IS EMPTY</h1>
      </>
    );
  }
  return (
    <div className='cart__wrapper'>
      <form className='inputs__cart' onSubmit={handleSubmitOrder}>
        <label htmlFor='name'>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          name='name'
          id='inputName'
          placeholder='name'
        />
        <label htmlFor='email'>E-mail:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          name='email'
          id=''
          placeholder='e-mail'
        />
        <label htmlFor='phone'>Phone:</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type='tel'
          name='phone'
          id=''
          placeholder='phone number'
        />
        <label htmlFor='address'>Address:</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type='text'
          name='address'
          id=''
          placeholder='address'
        />
        <p>
          <b>totalPrice: {Math.abs(totalPrice.toFixed(2))} BTC</b>
        </p>
        <input className='submit__button' type='submit' value='Order' />
      </form>
      <div className='cart__items'>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
