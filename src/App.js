import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import movies_banner from './Components/Assets/cinema-poster-night-film-movies-popcorn-retro-movie-posters-template-illustration-set_102902-1871.avif';
import series_banner from './Components/Assets/series_banner.webp';
import merchs_banner from './Components/Assets/New_T-Shirts_Website_Banner.png';


function App() {

  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/movies' element={<ShopCategory banner={movies_banner} category='movie'/>}/>
        <Route path='/series' element={<ShopCategory banner={series_banner} category='serie'/>}/>
        <Route path='/merch' element={<ShopCategory banner={merchs_banner} category='merch'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
