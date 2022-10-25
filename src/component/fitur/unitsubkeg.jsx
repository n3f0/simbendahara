import React from 'react'

export default function Unitsubkeg(props) {
  return (
    <div className='fitur'>
        <div className="pilihan-group">
            <div className="lbl-pilihan">Unit Organisasi</div>
            <div className="pilihan-left">1.01.0.00.0.00.01.</div>
            <button className="pilihan-search"><i className="fa fa-search"></i></button>
            <div className="pilihan-right">DINAS BINA MARGA DAN CIPTA KARYA</div>
        </div>
        <div className="pilihan-group">
            <div className="lbl-pilihan">Sub Kegiatan</div>
            <div className="pilihan-left">1.01.01.1.01.02</div>
            <button className="pilihan-search"><i className="fa fa-search"></i></button>
            <div className="pilihan-right">Sub Kegiatan Pembangunan Jalan Provinsi</div>
        </div>
    </div>
  )
}
