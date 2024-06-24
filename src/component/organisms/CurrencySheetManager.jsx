import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SheetForm from '../molecules/SheetForm';
import Button from '../atoms/Button';
import Sheet from '../pages/Sheet';
import { getSheets, saveSheets } from '../../utils/localStorage';

const CurrencySheetManager = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sheets, setSheets] = useState(getSheets() || []);
  const [currencies] = useState(JSON.parse(localStorage.getItem('currencies')) || ['USD', 'EUR', 'GBP']);
  const [newSheet, setNewSheet] = useState({ currency: '', name: '', tasks: [] });
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    if (id) {
      const sheetToEdit = sheets.find(sheet => sheet.id === parseInt(id));
      if (sheetToEdit) {
        setNewSheet(sheetToEdit);
      }
    }
  }, [id, sheets]);
  //Refactoring

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSheet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
    saveSheets(updatedSheets);
    navigate('/sheets', { state: { sheets: updatedSheets } });
  };

  const handleDeleteSheet = (sheetId) => {
    const updatedSheets = sheets.filter(sheet => sheet.id !== sheetId);
    setSheets(updatedSheets);
    saveSheets(updatedSheets);
  };

  const handleEditSheet = (sheetId) => {
    navigate(`/edit/${sheetId}`);
  };

  const handleViewDetails = (sheetId) => {
    navigate(`/add-expense/${sheetId}`);
  };

  return (
    <div className="container mx-auto py-10 w-1/2 bg-gray-800 rounded-lg px-8 py-6 relative">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">{id ? 'Edit' : 'Add'} Currency Sheet</h1>

      <SheetForm
        newSheet={newSheet}
        handleInputChange={handleInputChange}
        currencies={currencies}
        hasErrors={hasErrors}
      />

      <Button onClick={handleCreateOrUpdateSheet}>
        {id ? 'Update Sheet' : 'Create Sheet'}
      </Button>

      <div className="mt-6">
        {sheets.map(sheet => (
          <Sheet
            key={sheet.id}
            id={sheet.id}
            currency={sheet.currency}
            name={sheet.name}
            onDelete={handleDeleteSheet}
            onEdit={handleEditSheet}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

     
    </div>
  );
};

export default CurrencySheetManager;
