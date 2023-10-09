import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CountriesPage } from './pages/countries-page';
import { CountryPage } from './pages/country-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/countries'}/>}></Route>
        <Route path='/countries' element={<CountriesPage/>}></Route>
        <Route path='/country/:code' element={<CountryPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
