//import React from 'react';

const CurrencySelector = ({ id, name, value, onChange, currencies }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-bold mb-2 text-white">{name}:</label>
      <select
        id={id}
        name={name}
        className="border rounded-md p-2 w-full text-black"
        value={value}
        onChange={onChange}
      >
        <option value="">Select a currency</option>
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
