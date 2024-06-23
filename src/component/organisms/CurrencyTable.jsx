import { useState } from 'react';

const CurrencyTable = ({ currencies, setCurrencies }) => {
  const [newCurrency, setNewCurrency] = useState('');

  const handleAddCurrency = () => {
    if (newCurrency && !currencies.includes(newCurrency)) {
      setCurrencies([...currencies, newCurrency]);
      setNewCurrency('');
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-purple-400">Manage Currencies</h2>
      <div className="mb-4">
        <input
          type="text"
          className="border rounded-md p-2 w-full text-black"
          placeholder="Add new currency"
          value={newCurrency}
          onChange={(e) => setNewCurrency(e.target.value)}
        />
        <button
          onClick={handleAddCurrency}
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Add Currency
        </button>
      </div>
      <table className="table-auto w-full text-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Currency</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency, index) => (
            <tr key={index} className="bg-gray-700">
              <td className="border px-4 py-2">{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;