import { useState } from 'react';

const Sheet = ({ currency, type, name }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-700">Currency: {currency}</p>
      <p className="text-gray-700">Type: {type}</p>
    </div>
  );
};

const CurrencySheetManager = () => {
  const [sheets, setSheets] = useState([]);
  const [newSheet, setNewSheet] = useState({
    currency: '',
    type: 'expense',
    name: '',
  });

  const [errors, setErrors] = useState({
    currency: false,
    name: false,
  });

  const handleInputChange = (e) => {
    setNewSheet({ ...newSheet, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleCreateSheet = () => {
    const { currency, name } = newSheet;
    let hasErrors = false;

    if (!currency.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, currency: true }));
      hasErrors = true;
    }

    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
      hasErrors = true;
    }

    if (!hasErrors) {
      setSheets([...sheets, newSheet]);
      setNewSheet({ currency: '', type: 'expense', name: '' });
    }
  };

  return (
    <div className="container mx-auto py-8 w-1/2">
      <h1 className="text-2xl font-bold mb-4">Currency Sheet Manager</h1>

      <div className="bg-white  p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Create New Sheet</h2>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="currency">
            Currency
          </label>
          <select
            className={`border rounded-lg p-2 w-full ${
              errors.currency ? 'border-red-500' : ''
            }`}
            id="currency"
            name="currency"
            value={newSheet.currency}
            onChange={handleInputChange}
          >
            <option value="">Select a currency</option>
            <option value="USD">XAF</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CHF">CHF</option>
          </select>
          {errors.currency && (
            <p className="text-red-500 mt-2">Currency is required.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="type">
            Type
          </label>
          <select
            className="border rounded-lg p-2 w-full"
            id="type"
            name="type"
            value={newSheet.type}
            onChange={handleInputChange}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`border rounded-lg p-2 w-full ${
              errors.name ? 'border-red-500' : ''
            }`}
            type="text"
            id="name"
            name="name"
            value={newSheet.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-red-500 mt-2">Name is required.</p>
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateSheet}
        >
          Create Sheet
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sheets.map((sheet, index) => (
          <Sheet
            key={index}
            currency={sheet.currency}
            type={sheet.type}
            name={sheet.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencySheetManager;