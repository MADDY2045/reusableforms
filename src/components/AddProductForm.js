import React, { useEffect, useState } from 'react';
//import InputField from './InputField';
import AsyncDebounce from './AsyncDebounce';
import {} from '../mock/fakeData';

const AddProductForm = () => {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [itemName, setItemName] = useState(null);
  const [itemGroup, setItemGroup] = useState(null);

  // const textChange = (inputValue) => {
  //   // whole object of selected option
  //   console.log('input Value::::', inputValue);
  //   setName({ name: inputValue.value, label: inputValue.label });
  // };
  const [formData, setFormData] = useState({
    item: { name: '' },
    product: { price: '' },
  });

  const handleChange = (inputValue, { action }) => {
    // // onBlur => setInputValue to last selected value
    // if (action === 'input-blur') {
    //   console.log('input-blur', inputValue);
    // }
    // console.log('input value changed', inputValue);
    // // onInputChange => update inputValue
    if (action === 'set-value') {
      console.log('input value changed', inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting....', formData);
  };

  return (
    <div>
      <form>
        <div>
          <h6 style={{ color: 'white', textAlign: 'center', margin: '16px' }}>
            ACCURACY
          </h6>
          <AsyncDebounce
            value={name}
            placeholder={'Enter Name'}
            handleChange={handleChange}
            onChange={setName}
          />
          <AsyncDebounce
            value={price}
            placeholder={'Enter Price'}
            handleChange={handleChange}
            onChange={setPrice}
          />
        </div>

        <div>
          <h6 style={{ color: 'white', textAlign: 'center', margin: '16px' }}>
            ITEM GROUP
          </h6>
          <AsyncDebounce
            value={itemName}
            placeholder={'Enter item name'}
            handleChange={handleChange}
            onChange={setItemName}
          />
          <AsyncDebounce
            value={itemGroup}
            placeholder={'Enter item group'}
            handleChange={handleChange}
            onChange={setItemGroup}
          />
        </div>

        <div style={{ display: 'block', margin: 'auto', textAlign: 'center' }}>
          <button
            onClick={handleSubmit}
            className="btn btn-success p-2 m-3"
            type="submit"
            style={{ width: '20vw' }}
          >
            APPLY FILTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
