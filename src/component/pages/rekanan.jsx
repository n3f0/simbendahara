import React from 'react'
import './rekanan.css'

const Rekanan=(props)=>{

    return(
        <section className="content">
            <h4>Rekanan</h4>
            <div className="pilihan">
                <div className="form-group">
                    <label htmlFor="kdunit">SKPD/Sub Unit</label>
                    <input type="text" className='c1' name="kdunit" id="kdunit" disabled />
                    <button className='btnlookup' onClick={()=>{alert('testing')}}>Cari</button>
                    <input type="text" className="c2" name="nmunit" id="nmunit" disabled />
                </div>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Kode</th>
                            <th>Nama</th>
                            <th>No.Rek</th>
                            <th>NPWP</th>
                            <th>Jenis Usaha</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </section>
    );

}

export default Rekanan