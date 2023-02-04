import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { response } from './mock/fakeData';

const App = () => {
  const [selectedValue, setSelectedOption] = useState('');
  const [asyncData, setAsyncData] = useState([]);

  const loadOptions = (inputValue) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filter(inputValue));
      }, 500);
    });
  };

  function filter(inputValue) {
    console.log('input value now::::', inputValue);
    console.log('asyncData::::', asyncData);
    return asyncData.filter((option) => {
      return option.label.toLowerCase().includes(inputValue.toLowerCase());
    });
  }

  useEffect(() => {
    console.log('seleccted value:::', selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    const tempData = response.map((result) => {
      return {
        label: result.email,
        value: result.email,
      };
    });
    setAsyncData(tempData);
  }, [selectedValue]);

  return (
    <div className="container">
      <Select
        options={asyncData}
        onChange={(selected) => setSelectedOption(selected)}
        isClearable
      />
      <br />
      <AsyncSelect
        defaultOptions
        cacheOptions
        loadOptions={loadOptions}
        isClearable
        onChange={(opt) => console.log(opt)}
      />
    </div>
  );
};

export default App;
