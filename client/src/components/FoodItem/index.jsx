import React, { useState } from 'react';
import styles from './FoodItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { setDisabled } from '../../redux/slices/filterSlice';

const FoodItem = (props) => {
  const { items } = useSelector((state) => state.cart);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id: props._id,
      title: props.title,
      price: props.price,
      image: props.imageUrl,
      shop: props.shop,
    };
    dispatch(setDisabled(true));
    dispatch(addItem(item));
  };
  return (
    <div className={styles.foodCardWrapper}>
      <img src={props.imageUrl} alt='' />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div className={styles.orderLine}>
        <p className={styles.price}>{props.price} BTC</p>
        <button type='button' onClick={onClickAdd}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
