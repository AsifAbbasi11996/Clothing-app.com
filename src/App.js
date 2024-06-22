import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Home_Slider from './components/Home_Slider';
import NewArrivals from './components/NewArrivals';
import Payment from './components/Payment';
import PriceDetails from './components/PriceDetails';



function App() {
  return (
    <>
      <Routes>
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home_slider' element={<Home_Slider />} />
        <Route path='/newarrivals' element={<NewArrivals />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/pricedetails' element={<PriceDetails />} />
      </Routes>
    </>
  );
}

export default App;
