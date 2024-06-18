
import { useState } from 'react';

const AddCurrencyModal = ({ isOpen, onClose, onAddCurrency }) => {
  const [newCurrency, setNewCurrency] = useState('');

  const handleAddCurrency = () => {
    onAddCurrency(newCurrency);
    setNewCurrency('');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white p-4 rounded-lg shadow-lg z-50">
          <h2 className="text-lg font-bold mb-4 text-purple-600">Add New Currency</h2>
          <input
            type="text"
            className="border rounded-md p-2 w-full text-black mb-2"
            placeholder="Enter new currency"
            value={newCurrency}
            onChange={(e) => setNewCurrency(e.target.value)}
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handleAddCurrency}
              className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Add
            </button>
            <button
              onClick={onClose}
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCurrencyModal;