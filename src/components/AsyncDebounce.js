import { useCallback, useState } from 'react';

import { AsyncPaginate } from 'react-select-async-paginate';

import { loadOptions } from './Loadoptions';

const increase = (numberOfRequests) => numberOfRequests + 1;

const AsyncDebounce = ({
  onChange,
  value,
  handleChange,
  placeholder,
  menuPlacement = 'bottom',
}) => {
  const [numberOfRequests, setNumberOfRequests] = useState(0);

  const wrappedLoadOptions = useCallback((...args) => {
    setNumberOfRequests(increase);

    return loadOptions(...args);
  }, []);

  const colourStyles = {
    loadingIndicator: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: 'white',
        position: 'fixed',
      };
    },
    input: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: 'white',
      };
    },
    clearIndicator: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: '#141449',
        cursor: 'pointer',
      };
    },
    singleValue: (provided) => {
      return {
        ...provided,
        color: 'white',
      };
    },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: '#ffffff',
      };
    },
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: '#6d7291',
        color: 'white',
      };
    },
    menuList: (provided, state) => {
      return {
        ...provided,
        zIndex: 9999,
        maxHeight: '20vh',
      };
    },
    menu: (provided, state) => {
      return {
        ...provided,
        // background: 'red',
      };
    },
    option: (styles) => {
      //const color = chroma(data.color);
      //console.log('styles', styles);
      return {
        ...styles,
        //color: 'red',
        //border: '1px solid red',
        fontWeight: 'bold',
        fontFamily: 'italic',
      };
    },
  };

  return (
    <div
      style={{ margin: 'auto', padding: '18px', textAlign: 'center' }}
      className="col-8"
    >
      {/* <p style={{ color: 'white' }}>Number of requests: {numberOfRequests}</p> */}
      <AsyncPaginate
        styles={colourStyles}
        debounceTimeout={500}
        value={value}
        loadOptions={wrappedLoadOptions}
        onChange={onChange}
        menuPlacement={menuPlacement}
        isClearable
        placeholder={placeholder}
        onInputChange={handleChange}
      />
    </div>
  );
};

export default AsyncDebounce;
