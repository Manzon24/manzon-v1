import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sheets from './component/pages/Sheet';
import CurrencySheetManager from './component/organisms/CurrencySheetManager';
import SheetDetails from './component/pages/SheetDetails';
import AddExpenseForm from './component/organisms/AddExpenseForm';
import './CurrencySheetManager.css';
import CurrencySheetList from './component/organisms/CurrencySheetList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CurrencySheetList />} />
          <Route path="/sheets" element={<CurrencySheetList  />} />
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