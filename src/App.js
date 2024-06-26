import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Home_Slider from './components/Home_Slider';
import NewArrivals from './components/NewArrivals';
import OrderPlace from './components/OrderPlace';
import Address from './components/Address';
import Payment from './components/Payment';
import PriceDetails from './components/PriceDetails';
import PriceDetails1 from './components/PriceDetails1';
import MenClothing from './components/MenClothing';
import WomenClothing from './components/WomenClothing';
import KidsClothing from './components/KidsClothing';
import Filters from './components/Filters';
import Product from './components/Product';
import Wishlist from './components/Wishlist';
import SignUpForm from './components/SignUpForm';


function App() {
  return (
    <>
      <Routes>
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home_slider' element={<Home_Slider />} />
        <Route path='/newarrivals' element={<NewArrivals />} />
        <Route path='/orderplace/:id' element={<OrderPlace />} />
        <Route path='/address/:id' element={<Address />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/filters' element={<Filters />} />
        <Route path='/pricedetails' element={<PriceDetails />} />
        <Route path='/pricedetails1' element={<PriceDetails1 />} />
        <Route path='/menclothing' element={<MenClothing />} />
        <Route path='/womenclothing' element={<WomenClothing />} />
        <Route path='/kidsclothing' element={<KidsClothing />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/wishlist/:id' element={<Wishlist />} />
        <Route path='/signup' element={<SignUpForm/>} />
      </Routes>
    </>
  );
}

export default App;
