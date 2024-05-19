import React, { useState } from 'react';

const RangeInput = ({ min, max, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const isInvalid = value.length < min || value.length > max;

  return (
    <input
      {...props}
      value={value}
      onChange={handleChange}
      style={{ borderColor: isInvalid ? 'red' : 'initial' }}
    />
  );
};

export default RangeInput;