import { useCallback, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { loadOptions } from './Loadoptions';
import { colourStyles } from '../utils/dropdownStyle';
import { components } from 'react-select';

const CustomOption = ({ children, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
  const newProps = { ...props, innerProps: rest };
  return <components.Option {...newProps}>{children}</components.Option>;
};

const Menu = (props) => {
  console.log(props.children.props.children);
  return (
    <>
      <components.Menu {...props}>
        <div>
          {props.selectProps.fetchingData ? (
            <span className="fetching">Fetching data...</span>
          ) : (
            <>
              <h6>Total: {props.children.length}</h6>
              <div>{props.children}</div>
            </>
          )}
          <button
            className={'change-data'}
            onClick={props.selectProps.changeOptionsData}
          >
            Change data
          </button>
        </div>
      </components.Menu>
    </>
  );
};

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
        components={{ Option: CustomOption, Menu }}
        menuPlacement={menuPlacement}
        isClearable
        placeholder={placeholder}
        onInputChange={handleChange}
      />
    </div>
  );
};

export default AsyncDebounce;
