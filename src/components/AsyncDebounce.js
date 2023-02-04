import { useCallback, useState } from 'react';

import { AsyncPaginate } from 'react-select-async-paginate';

import { loadOptions } from './Loadoptions';

const increase = (numberOfRequests) => numberOfRequests + 1;

const AsyncDebounce = ({ onChange, value, handleChange, placeholder }) => {
  const [numberOfRequests, setNumberOfRequests] = useState(0);

  const wrappedLoadOptions = useCallback((...args) => {
    setNumberOfRequests(increase);

    return loadOptions(...args);
  }, []);

  return (
    <div
      style={{ margin: 'auto', padding: '18px', textAlign: 'center' }}
      className="col-8"
    >
      {/* <p>Number of requests: {numberOfRequests}</p> */}
      <AsyncPaginate
        debounceTimeout={500}
        value={value}
        loadOptions={wrappedLoadOptions}
        onChange={onChange}
        isClearable
        placeholder={placeholder}
        onInputChange={handleChange}
      />
    </div>
  );
};

export default AsyncDebounce;
