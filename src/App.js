import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Home_Slider from './components/Home_Slider';
import NewArrivals from './components/NewArrivals';
import OrderPlace from './components/OrderPlace';
import Payment from './components/Payment';
import PriceDetails from './components/PriceDetails';
import MenClothing from './components/MenClothing';
import WomenClothing from './components/WomenClothing';
import KidsClothing from './components/KidsClothing';
import Filters from './components/Filters';
import New from './components/New';



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
        <Route path='/orderplace' element={<OrderPlace />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/filters' element={<Filters />} />
        <Route path='/pricedetails' element={<PriceDetails />} />
        <Route path='/menclothing' element={<MenClothing />} />
        <Route path='/womenclothing' element={<WomenClothing />} />
        <Route path='/kidsclothing' element={<KidsClothing />} />
        <Route path='/new' element={<New />} />
      </Routes>
    </>
  );
}

export default App;
