//import React from 'react';

const Input = ({ id, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-bold mb-2 text-white">{name}:</label>
      <input
        type="text"
        id={id}
        name={name}
        className="border rounded-md p-2 w-full text-black"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
