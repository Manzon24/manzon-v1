import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CurrencySheetManager = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sheets, setSheets] = useState(JSON.parse(localStorage.getItem('sheets')) || []);
  const [currencies] = useState(JSON.parse(localStorage.getItem('currencies')) || ['USD', 'EUR', 'GBP']);
  const [newSheet, setNewSheet] = useState({ currency: '', name: '', tasks: [] });
  const [hasErrors, setHasErrors] = useState(false);
  //const [newCurrency, setNewCurrency] = useState('');

  useEffect(() => {
    if (id) {
      const sheetToEdit = sheets.find(sheet => sheet.id === parseInt(id));
      if (sheetToEdit) {
        setNewSheet(sheetToEdit);
      }
    }
  }, [id, sheets]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSheet({ ...newSheet, [name]: value });
  };

  const handleCreateOrUpdateSheet = () => {
    const { currency, name } = newSheet;

    if (!currency || !name) {
      setHasErrors(true);
      return;
    }

    setHasErrors(false);

    let updatedSheets;
    if (id) {
      updatedSheets = sheets.map(sheet =>
        sheet.id === parseInt(id) ? newSheet : sheet
      );
    } else {
      const newSheetEntry = { ...newSheet, id: sheets.length + 1 };
      updatedSheets = [...sheets, newSheetEntry];
    }

    setSheets(updatedSheets);
    localStorage.setItem('sheets', JSON.stringify(updatedSheets));
    navigate('/sheets', { state: { sheets: updatedSheets } });
  };

  return (
    <div className="container mx-auto py-10 w-1/2 bg-gray-800 rounded-lg px-8 py-6 relative">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">{id ? 'Edit' : 'Add'} Currency Sheet</h1>

      <div className="mb-4">
        <label htmlFor="currency" className="block font-bold mb-2 text-white">Currency:</label>
        <div className="flex">
          <select
            id="currency"
            name="currency"
            className="border rounded-md p-2 w-full text-black"
            value={newSheet.currency}
            onChange={handleInputChange}
          >
            <option value="">Select a currency</option>
            {currencies.map((currency, index) => (
              <option key={index} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        {hasErrors && !newSheet.currency && (
          <p className="text-red-500 mt-2">Please select a currency.</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-2 text-white">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border rounded-md p-2 w-full text-black"
          value={newSheet.name}
          onChange={handleInputChange}
        />
        {hasErrors && !newSheet.name && (
          <p className="text-red-500 mt-2">Please enter a name.</p>
        )}
      </div>

      <button
        onClick={handleCreateOrUpdateSheet}
        className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
      >
        {id ? 'Update Sheet' : 'Create Sheet'}
      </button>
    </div>
  );
};

export default CurrencySheetManager;
