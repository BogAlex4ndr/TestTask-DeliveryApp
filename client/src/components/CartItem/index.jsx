import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import styles from './CartItem.module.scss';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id: props.id,
      }),
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(props.id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(props.id));
  };
  return (
    <div className={styles.CartItemWrapper}>
      <div className={styles.cartItem}>
        <h4>{props.title}</h4>
        <img src={props.image} alt='Food' />
      </div>
      <div className=''>
        <button onClick={onClickMinus} className={styles.cartButton}>
          -
        </button>
        <span>{props.count}</span>
        <button onClick={onClickPlus} className={styles.cartButton}>
          +
        </button>
      </div>
      <div className='cart-summa'>{(props.price * props.count).toFixed(2)} BTC</div>
      <button onClick={onClickRemove} className={styles.cartDeleteButton}>
        X
      </button>
    </div>
  );
};

export default CartItem;
