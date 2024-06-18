import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencySheetList from './component/CurrencySheetList';
import CurrencySheetManager from './component/CurrencySheetManager';
import SheetDetails from './component/SheetDetails';
import AddExpenseForm from './component/AddExpenseForm';
import './CurrencySheetManager.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CurrencySheetList />} />
          <Route path="/sheets" element={<CurrencySheetList />} />
          <Route path="/add" element={<CurrencySheetManager />} />
          <Route path="/edit/:id" element={<CurrencySheetManager />} />
          <Route path="/details/:id" element={<SheetDetails />} />
          <Route path="/add-expense/:id" element={<AddExpenseForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
