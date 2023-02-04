import React, { useState, useEffect } from 'react';
import AddProductForm from './components/AddProductForm';
import './App.css';

const App = () => {
  return (
    <div className="center card mt-5">
      <h5 style={{ color: 'white', textAlign: 'center', margin: '16px' }}>
        ACCURACY
      </h5>
      <AddProductForm />
    </div>
  );
};

export default App;
