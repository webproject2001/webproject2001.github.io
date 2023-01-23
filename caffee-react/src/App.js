import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Reservation from './routes/Reservation';
import Gallary from './routes/Gallary';
function App() {
  return (
    <Routes>
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/reservation' element={<Reservation/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallary' element={<Gallary/>}/>

    </Routes>
  );
}

export default App;
