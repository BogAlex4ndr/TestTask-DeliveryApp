import React from 'react';
import styles from './Shops.module.scss';

const Shops = ({ value, onChangeCategory }) => {
  const categories = ['mcDonkey', 'Burger Kid', 'Doom Pizza', 'Bar McLaren', 'Central Perk'];
  //
  return (
    <div className={styles.shopsWrapper}>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            className={value === i ? styles.activeShopItem : styles.shopIitem}
            onClick={() => onChangeCategory(i)}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shops;
