export const colourStyles = {
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
      maxHeight: '25vh',
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
