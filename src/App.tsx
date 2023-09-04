import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer, Navbar } from './sections/exports';
import { Home, PageNotFound } from './pages/exports';

const App = () => {
  return (
    <>
      {/**<BrowserRouter>
        <Navbar />
        <Routes>
          <Route Component={Home} path="/"></Route>
          <Route path="page" Component={PageNotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>**/}
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
