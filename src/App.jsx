import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationsSearchView from './pages/ReservationsSearchView';
import ReservationStatusView from './pages/ReservationStatusView';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ReservationsSearchView />} />
      <Route path="/reservations" element={<ReservationStatusView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
