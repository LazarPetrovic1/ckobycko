import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Store from './pages/Store';
import Product from './pages/Product';
import { LanguageProvider } from './locale/LanguageContext';
import LangBar from './LangBar';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
        <LangBar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/store' element={<Store />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
