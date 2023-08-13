import Nav from './Nav';
import './App.css';
import Home from './pages/Home';
import Categories from './pages/Categories';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ScrollToTop from './ScrolltoTop';
function App() {
  let cartnumber=1
  return (
    <div className="App">
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
    <Route path="/productpage" element={<ProductPage number={cartnumber}/>} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
