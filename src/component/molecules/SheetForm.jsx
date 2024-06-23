import  { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import CurrencySelector from './CurrencySelector';

const SheetForm = ({
  newSheet,
  handleInputChange,
  currencies,
  hasErrors,
}) => {
  const [name, setName] = useState(newSheet.name);
  const [currency, setCurrency] = useState(newSheet.currency);

  useEffect(() => {
    setName(newSheet.name);
    setCurrency(newSheet.currency);
  }, [newSheet]);

  return (
    <>
      <CurrencySelector
        id="currency"
        name="currency"
        value={currency}
        onChange={handleInputChange}
        currencies={currencies}
      />
      {hasErrors && !currency && (
        <p className="text-red-500 mt-2">Please select a currency.</p>
      )}

      <Input
        id="name"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      {hasErrors && !name && (
        <p className="text-red-500 mt-2">Please enter a name.</p>
      )}
    </>
  );
};

export default SheetForm;
