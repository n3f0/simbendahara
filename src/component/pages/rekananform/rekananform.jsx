import React from 'react'
import './rekananform.css'

export default function Rekananform({close}) {
  return (
    <div className='input-sidebar'>
        <h3>Input Rekanan <button onClick={()=>close()}>Close</button></h3>
        <div className="form-wrapper">
            <div className="form-group">
                <label htmlFor="kdp3">Kode</label>
                <input type="text" name="kdp3" id="kdp3" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="nmp3">Nama</label>
                <input type="text" name="nmp3" id="nmp3" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="instansi">Instansi</label>
                <input type="text" name="instansi" id="instansi" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="jabatan">Jabatan</label>
                <input type="text" name="jabatan" id="jabatan" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="kdbank">Bank</label>
                <select name="kdbank" id="kdbank" className='form-control'>
                    <option value="0183533">PT.BPD SUMATERA BARAT</option>
                </select>
            </div>
        </div>
    </div>
  )
}
