import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Shops from '../components/Shops';
import { setCategoryId } from '../redux/slices/filterSlice';
import FoodBlock from '../components/FoodBlock';

const MainPage = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const disabled = useSelector((state) => state.filter.disabled);
  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    if (disabled === false) {
      dispatch(setCategoryId(id));
    }
  };

  console.log(disabled);
  return (
    <section className='mainPage'>
      <Shops value={categoryId} onChangeCategory={onChangeCategory} />
      <FoodBlock categoryId={categoryId} />
    </section>
  );
};

export default MainPage;
