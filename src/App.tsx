import './App.css';
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/exports';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route Component={Home} path="/" />
          <Route path="*" Component={PageNotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
