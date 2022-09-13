import React from "react";
import "./navbar.css";
const Navbar = (props) => {
  return (
    <nav className="top-nav">
        <a href="/">Home</a>
        <ul className="nav-group">
            <li><a href="">Persiapan</a>
                <ul>
                    <li><a href="">Rekanan</a></li>
                    <li><a href="">Kontrak</a></li>
                    <li><a href="">Adendum</a></li>
                    <li><a href="">Berita Acara Barang Jasa</a></li>
                    <li><a href="">Berita Acara Belanja Modal</a></li>
                </ul>
            </li>
            <li><a href="">Penatausahaan Penerimaan</a>
                <ul>
                    <li><a href="">SKP/SKR</a></li>
                    <li><a href="">TBP</a>
                        <ul>
                            <li><a href="">Dengan Penetapan</a></li>
                            <li><a href="">Tanpa Penetapan</a></li>
                        </ul>
                    </li>
                    <li><a href="">STS</a>
                        <ul>
                            <li><a href="">Dengan Penetapan</a></li>
                            <li><a href="">Tanpa Penetapan</a></li>
                        </ul>
                    </li>
                    <li><a href="">BKU Bendahara Penerimaan</a></li>


                </ul>
            </li>
            <li><a href="">Penatausahaan Pengeluaran</a>
                <ul>
                    <li><a href="">SPP</a>
                        <ul>
                            <li><a href="">Uang Persediaan</a></li>
                            <li><a href="">LS</a></li>
                            <li><a href="">GU/TU</a></li>
                        </ul>
                    </li>
                    <li><a href="">SPM</a></li>
                    <li><a href="">Tanda Bukti Pengeluaran (TBP)</a></li>
                    <li><a href="">Pajak UP/GU/TU</a></li>
                    <li><a href="">Pelimpahan Uang</a></li>
                    <li><a href="">Pengembalian Belanja</a></li>
                    <li><a href="">BKU Bendahara Pengeluaran</a></li>
                    <li><a href="">Pertanggung Jawaban UP/GU/TU</a></li>
                </ul>
            </li>
            <li><a href="">Cetak</a></li>
        </ul>
        <a href="/logout">Logout</a>
    </nav>
  );
};

export default Navbar;
