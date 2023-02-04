import React, { useState } from 'react';
import InputField from './InputField';

const AddProductForm = () => {
  const [inputValue, setInputValue] = useState({
    item: { name: '' },
    product: { price: '' },
  });

  const {
    item: { name },
    product: { price },
  } = inputValue;

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    const hierarchy = e.target.getAttribute('hierarchy');
    console.log('name::', name, 'value:::', value, 'hierarchy::', hierarchy);
    setInputValue((prev) => ({
      ...prev,
      [hierarchy]: { ...prev.hierarchy, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="text"
        value={name}
        name="name"
        placeholder="Product Name"
        label="name"
        hierarchy="item"
        onChange={handleChange}
      />
      <InputField
        type="number"
        value={price}
        placeholder="Add Price"
        label="Price"
        name="price"
        hierarchy="product"
        onChange={handleChange}
      />
      <button
        className="btn btn-primary p-2 m-3"
        type="submit"
        color="primary"
        style={{ width: '20vw' }}
      >
        ADD
      </button>
    </form>
  );
};

export default AddProductForm;
