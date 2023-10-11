import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Order from './pages/Order';
import Login from './pages/Login';
import Confirm from './pages/ReservationConfirm';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirm />} />
    </Routes>
  );
}
