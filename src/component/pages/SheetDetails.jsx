import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SheetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sheet, setSheet] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [totalAmounts, setTotalAmounts] = useState({});

  useEffect(() => {
    const storedSheets = JSON.parse(localStorage.getItem('sheets')) || [];
    const foundSheet = storedSheets.find(sheet => sheet.id === parseInt(id));
    if (foundSheet) {
      setSheet(foundSheet);
      setTasks(foundSheet.tasks || []); // Ensure that foundSheet.tasks is properly initialized
    }
  }, [id]);

  useEffect(() => {
    const totals = tasks.reduce((acc, task) => {
      if (!acc[task.name]) {
        acc[task.name] = 0;
      }
      acc[task.name] += task.amount;
      return acc;
    }, {});
    setTotalAmounts(totals);
  }, [tasks]);

  const handleAddExpense = () => {
    navigate(`/add-expense/${id}`);
  };

  return (
    <div className="container mx-auto py-10 w-3/5 bg-white-200 rounded-lg px-8 py-6 relative">
      <h2 className=" font-bold text-purple-400" style={{ textAlign: 'center' }}>Total Amounts</h2>
      {Object.keys(totalAmounts).map((taskName, index) => (
        <p key={index} className="text-black " style={{ textAlign: 'center' }}>
          {taskName}: {totalAmounts[taskName]}
        </p>
      ))}
      <h1 className="text-3xl font-bold mb-4 text-purple-400">{sheet ? sheet.name : 'Sheet Details'}</h1>
      <p className="text-black mb-4">Currency: {sheet ? sheet.currency : ''}</p>
      {tasks.map((task, index) => (
        <div key={index} className="bg-black p-4 rounded-lg shadow-md text-white w-1/2" style={{ borderRadius: '30px' }}>
          <h3 className="text-lg font-bold mb-2 text-purple-400">{task.name}</h3>
          <p className="text-gray-300">Type: {task.type}</p>
        </div>
      ))}

      <div className="fixed bottom-8 right-8">
        <br />
        <br />
        <button
          onClick={handleAddExpense}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-md"
        >
          + Add Expense/Income
        </button>
      </div>
    </div>
  );
};

export default SheetDetails;