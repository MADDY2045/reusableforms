import React from 'react';

const InputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  hierarchy,
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        hierarchy={hierarchy}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
