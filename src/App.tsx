import './App.css';
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/exports';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path='/' />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
