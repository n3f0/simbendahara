import React from 'react'
import './navbar.css'
const Navbar=(props)=>{
    return (
        <nav className='menu'>
           <ul className="nav">
            <li><a href="">Persiapan</a>
                <ul>
                    <li><a href="">Rekanan</a></li>
                    <li><a href="">Kontrak</a></li>
                    <li><a href="">Adendum</a></li>
                    <li><a href="">BAST Barang dan Jasa</a></li>
                    <li><a href="">BAST Belanja Modal</a></li>
                </ul>
            </li>
            <li><a href="">Penerimaan</a>
                <ul>
                    <li><a href="">SKP/SKR</a></li>
                    <li><a href="">Tanda Bukti Penerimaan</a>
                        <ul>
                            <li><a href="">TBP dengan Penetapan</a></li>
                            <li><a href="">TBP Tanpa Penetapan</a></li>
                        </ul>
                    </li>
                    <li><a href="">Surat Tanda Setoran</a>
                        <ul>
                            <li><a href="">Tanpa Penetapan</a></li>
                            <li><a href="">Dengan Penetapan</a></li>
                            <li><a href="">RKUD</a></li>
                        </ul>
                    </li>
                    <li><a href="">BKU Bendahara Penerimaan</a></li>
                </ul>
            </li>
            <li><a href="">Pengeluaran</a>
                <ul>
                    <li><a href="">SPP</a>
                        <ul>
                            <li><a href="">UP</a></li>
                            <li><a href="">LS</a></li>
                            <li><a href="">GU/TU</a></li>
                        </ul>
                    </li>
                    <li><a href="">SPM</a></li>
                    <li><a href="">Tanda Bukti Pengeluaran (TBP)</a></li>
                    <li><a href="">Pengembalian Belanja</a></li>
                    <li><a href="">BKU Bendahara Pengeluaran</a></li>
                    <li><a href="">Pertanggung Jawaban UP/GU/TU</a></li>
                </ul>
            </li>
            <li><a href="">Cetak</a></li>
           </ul>
        </nav>
    )
}

export default Navbar