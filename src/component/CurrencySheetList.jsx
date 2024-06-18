import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Sheet = ({ id, currency, name, onDelete, onEdit, onViewDetails }) => {
    return (
      <div
        className="sheet-item bg-black p-4 rounded-lg shadow-md text-white mb-4 flex justify-between items-center"
        onClick={() => onViewDetails(id)}
      >
        <div>
          <h3 className="text-lg font-bold mb-2 text-purple-400">{name}</h3>
          <p className="text-gray-300">Currency: {currency}</p>
        </div>
  
        <div className="flex">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded mr-2"
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(id);
            }}
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-3 rounded"
          >
            Edit
          </button>
        </div>
      </div>
    );
  };
  
  
  

 
  
  const CurrencySheetList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { sheets: initialSheets } = location.state || { sheets: [] };
    const [sheets, setSheets] = useState(initialSheets);
  
    useEffect(() => {
      const storedSheets = JSON.parse(localStorage.getItem('sheets')) || [];
      setSheets(storedSheets);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('sheets', JSON.stringify(sheets));
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
        <h1 className="text-3xl font-bold mb-4 text-purple-400">Currency Sheets</h1>
  
        <div className="grid grid-cols-1 gap-4" style={{ backgroundColor: '#000000', borderRadius: '15px' }}>
          {sheets.map((sheet) => (
            <div key={sheet.id} className="border border-black">
              <Sheet
                id={sheet.id}
                currency={sheet.currency}
                name={sheet.name}
                onDelete={handleDeleteSheet}
                onEdit={handleEditSheet}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>
  
        <div className="fixed bottom-8 right-8">
          <Link to="/add">
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-md">
              + Add Sheet
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default CurrencySheetList;
  