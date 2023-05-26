import React from 'react';

const NotFound = () => {
  setTimeout(() => {
    window.location.replace('/');
  }, 1500);
  return <h1 style={{ textAlign: 'center' }}>Page not found </h1>;
};

export default NotFound;
