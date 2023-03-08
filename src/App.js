import './App.css';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import Clients from './components/Clients';
import Ownerpage from './pages/Ownerpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sellers.json" element={<Clients />} />
        <Route path="Owner-panel" element={<Ownerpage />} />

      </Routes>
    </div>
  );
}

export default App;
