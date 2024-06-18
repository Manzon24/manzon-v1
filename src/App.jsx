
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencySheetList from './component/CurrencySheetList';
import CurrencySheetManager from './component/CurrencySheetManager';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;