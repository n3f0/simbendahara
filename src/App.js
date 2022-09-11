import './App.css';
import Navbar from './component/navbar/Navbar';

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
      <Navbar/>
    </header>
   </>
  );
}

export default App;
