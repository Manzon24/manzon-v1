import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSheets, saveSheets } from '../../utils/localStorage.jsx';
import Sheet from '../organisms/CurrencySheetManager';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

const CurrencySheetList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sheets: initialSheets } = location.state || { sheets: [] };
  const [sheets, setSheets] = useState(initialSheets);

  useEffect(() => {
    const storedSheets = getSheets();
    setSheets(storedSheets);
  }, []);

  useEffect(() => {
    saveSheets(sheets);
  }, [sheets]);

  const handleDeleteSheet = (id) => {
    const updatedSheets = sheets.filter(sheet => sheet.id !== id);
    setSheets(updatedSheets);
  };

  const handleEditSheet = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container mx-auto py-8 w-1/2">
      <h1 className="text-3xl font-bold mb-4 text-purple-400" style={{ textAlign: 'center' }}>
        Currency Sheets
      </h1>

      <div className="grid grid-cols-1 gap-4" style={{ backgroundColor: '#000000', borderRadius: '15px' }}>
        {sheets.map((sheet) => (
          <div key={sheet.id} className="border border-black">
            <Sheet
              id={sheet.id}
              currency={sheet.currency}
              name={sheet.name}
              onDelete={() => handleDeleteSheet(sheet.id)}
              onEdit={() => handleEditSheet(sheet.id)}
              onViewDetails={() => handleViewDetails(sheet.id)}
            />
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8">
        <Link to="/add">
          <Button className="bg-blue-600 hover:bg-blue-800 py-3 px-6 rounded-full shadow-md">
            + Add Sheet
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CurrencySheetList;