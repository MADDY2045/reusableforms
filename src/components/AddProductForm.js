import React, { useEffect, useState } from 'react';
//import InputField from './InputField';
import AsyncDebounce from './AsyncDebounce';
import {} from '../mock/fakeData';

const AddProductForm = () => {
  const [itemGroupOne, setItemGroupOne] = useState({
    item: { name: null, price: null },
    product: {
      itemName: null,
      itemGroup: null,
    },
  });

  const {
    item: { name, price },
    product: { itemName, itemGroup },
  } = itemGroupOne;

  const textChange = (inputValue, hierarchy, name) => {
    let tempObj = itemGroupOne;
    // whole object of selected option
    if (inputValue == null) {
      tempObj[hierarchy][name] = null;
      setItemGroupOne({ ...tempObj });
      return;
    }
    tempObj[hierarchy][name] = {
      value: inputValue.value,
      label: inputValue.label,
    };
    setItemGroupOne({ ...tempObj });
  };
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
    console.log('submitting....', itemGroupOne);
    //setTimeout(() => {
    setItemGroupOne({
      item: { name: null, price: null },
      product: {
        itemName: null,
        itemGroup: null,
      },
    });
    //}, 2000);
  };

  return (
    <div>
      <form>
        <div>
          <h6 style={{ color: 'white', textAlign: 'center', margin: '16px' }}>
            PRODUCT GROUP
          </h6>
          <AsyncDebounce
            value={name}
            placeholder={'Enter Name'}
            handleChange={handleChange}
            onChange={(e) => textChange(e, 'item', 'name')}
          />
          <AsyncDebounce
            value={price}
            placeholder={'Enter Price'}
            handleChange={handleChange}
            onChange={(e) => textChange(e, 'item', 'price')}
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
            onChange={(e) => textChange(e, 'product', 'itemName')}
          />
          <AsyncDebounce
            value={itemGroup}
            placeholder={'Enter item group'}
            handleChange={handleChange}
            onChange={(e) => textChange(e, 'product', 'itemGroup')}
            menuPlacement="top"
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
