import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
