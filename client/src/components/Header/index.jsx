import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <nav className={styles.headerWrapper}>
      <Link to='/'>
        <h3>Shop</h3>
      </Link>
      <div className={styles.cart}>
        <Link to='/cart'>
          <h3>Shoping Cart</h3>
        </Link>
        <span>{Math.abs(totalPrice.toFixed(2))} BTC</span>
      </div>
    </nav>
  );
};

export default Header;
