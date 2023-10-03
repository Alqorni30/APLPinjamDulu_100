import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Pinjampage from './pages/Pinjampage';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/About' element={<Aboutpage/>} />
        <Route path='/Pinjam' element={<Pinjampage/>} />
      </Routes>
    </Router>
  )
}

export default App
