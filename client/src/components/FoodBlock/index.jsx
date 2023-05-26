import { useEffect, useState } from 'react';
import axios from 'axios';
import FoodItem from '../FoodItem';
import styles from './FoodBlock.module.scss';
import { useSelector } from 'react-redux';

const FoodBlock = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/foodlist`);
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFood();
  }, [items]);

  return (
    <div className={styles.foodBlockWrapper}>
      {items
        .map((obj) => <FoodItem key={obj._id} {...obj} />)
        .filter((i) => i.props.shop === categoryId)}
    </div>
  );
};

export default FoodBlock;
