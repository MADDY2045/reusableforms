import { useCallback, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { loadOptions } from './Loadoptions';
import { colourStyles } from '../utils/dropdownStyle';

const increase = (numberOfRequests) => numberOfRequests + 1;

const AsyncDebounce = ({
  onChange,
  value,
  handleChange,
  placeholder,
  requestName,
  menuPlacement = 'bottom',
}) => {
  // eslint-disable-next-line
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
      {/* <p style={{ color: 'white' }}>Number of requests: {numberOfRequests}</p> */}
      <AsyncPaginate
        styles={colourStyles}
        debounceTimeout={500}
        value={value}
        loadOptions={(e, opt) => wrappedLoadOptions(e, opt, requestName)}
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
