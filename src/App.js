import './App.css';
import Navbar from './component/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rekanan from './component/pages/rekanan';
import Home from './component/pages/home';
import Kontrak from './component/pages/kontrak';
function App() {
  return (
   <>
    <header>
      <div className="topindicator">
        <ul>
          <li>User Name : n3f0</li>
          <li>Tahun Anggaran : 2022</li>
          <li>Tahapan : APBD-P</li>
          <li>Modul : Penatausahaan</li>
        </ul>
      </div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/persiapan/rekanan' element={<Rekanan/>}/>
            <Route path='/persiapan/kontrak' element={<Kontrak/>}/>
            <Route path='/persiapan/adendum' element={<Rekanan/>}/>
            <Route path='/persiapan/ba-barjas' element={<Rekanan/>}/>
            <Route path='/persiapan/ba-modal' element={<Rekanan/>}/>
          </Routes>
      </BrowserRouter>
    </header>
   </>
  );
}

export default App;
