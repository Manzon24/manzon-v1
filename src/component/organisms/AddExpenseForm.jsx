import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Select from '../atoms/Select';

const AddExpenseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedSheets = JSON.parse(localStorage.getItem('sheets')) || [];
    const updatedSheets = storedSheets.map(sheet => {
      if (sheet.id === parseInt(id)) {
        const newTask = { amount: parseFloat(amount), description, category, type, name: sheet.name };
        const updatedTasks = sheet.tasks ? [...sheet.tasks, newTask] : [newTask];
        return { ...sheet, tasks: updatedTasks };
      }
      return sheet;
    });

    localStorage.setItem('sheets', JSON.stringify(updatedSheets));
    navigate(`/details/${id}`);
  };

  return (
    <div className="container mx-auto py-10 w-1/2 bg-gray-800 rounded-lg px-8 py-6 relative">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">Add Expense/Income</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block font-bold mb-2 text-white">Amount:</label>
          <Input
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2 text-white">Description:</label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block font-bold mb-2 text-white">Category:</label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block font-bold mb-2 text-white">Type:</label>
          <Select
          id="type"
          name="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={[
            { value: 'expense', label: 'Expense' },
            { value: 'income', label: 'Income' }
          ]}
          required
        />

        </div>

        <Button type="submit" className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddExpenseForm;