import { Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BeerDetailsPage from './pages/BeerDetailsPage';

// Los componentes son funciones *puras*

function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/beers/:id" element={<BeerDetailsPage />} />
  </Routes>
}

export default App;
