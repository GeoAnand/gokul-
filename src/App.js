import './App.css';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import Clients from './components/Clients';
import Ownerpage from './pages/Ownerpage';
import Advertisement from './pages/Advertisement';
import Publisher from './pages/Publisher';
import Contactpage from './pages/Contactpage';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sellers.json" element={<Clients />} />
        <Route path="Owner-panel" element={<Ownerpage />} />
        <Route path="advertiser" element={<Advertisement />} />
        <Route path="publisher" element={<Publisher />} />
        <Route path="Contact" element={<Contactpage />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Our-Services" element={<Services />} />

      </Routes>
    </div>
  );
}

export default App;
