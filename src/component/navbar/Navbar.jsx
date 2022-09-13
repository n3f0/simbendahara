import React from "react";
import "./navbar.css";
import {Link} from 'react-router-dom'
const Navbar = (props) => {
  return (
    <nav className="top-nav">
        <Link to="/">Home</Link>
        <ul className="nav-group">
            <li><Link to="">Persiapan</Link>
                <ul>
                    <li><Link to="/persiapan/rekanan">Rekanan</Link></li>
                    <li><Link to="/persiapan/kontrak">Kontrak</Link></li>
                    <li><Link to="/persiapan/adendum">Adendum</Link></li>
                    <li><Link to="/persiapan/ba-barjas">Berita Acara Barang Jasa</Link></li>
                    <li><Link to="/persiapan/ba-modal">Berita Acara Belanja Modal</Link></li>
                </ul>
            </li>
            <li><Link to="">Penatausahaan Penerimaan</Link>
                <ul>
                    <li><Link to="">SKP/SKR</Link></li>
                    <li><Link to="">TBP</Link>
                        <ul>
                            <li><Link to="">Dengan Penetapan</Link></li>
                            <li><Link to="">Tanpa Penetapan</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">STS</Link>
                        <ul>
                            <li><Link to="">Dengan Penetapan</Link></li>
                            <li><Link to="">Tanpa Penetapan</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">BKU Bendahara Penerimaan</Link></li>


                </ul>
            </li>
            <li><Link to="">Penatausahaan Pengeluaran</Link>
                <ul>
                    <li><Link to="">SPP</Link>
                        <ul>
                            <li><Link to="">Uang Persediaan</Link></li>
                            <li><Link to="">LS</Link></li>
                            <li><Link to="">GU/TU</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">SPM</Link></li>
                    <li><Link to="">Tanda Bukti Pengeluaran (TBP)</Link></li>
                    <li><Link to="">Pajak UP/GU/TU</Link></li>
                    <li><Link to="">Pelimpahan Uang</Link></li>
                    <li><Link to="">Pengembalian Belanja</Link>
                        <ul>
                            <li><Link to="">Sisa UYHD</Link></li>
                            <li><Link to="">Belanja LS</Link></li>
                            <li><Link to="">Belanja TU</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">BKU Bendahara Pengeluaran</Link></li>
                    <li><Link to="">Pertanggung Jawaban UP/GU/TU</Link></li>
                </ul>
            </li>
            <li><Link to="">Cetak</Link></li>
        </ul>
        <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Navbar;
