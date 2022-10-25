import React from 'react'
import Unitsubkeg from '../fitur/unitsubkeg';


const Kontrak=(props)=>{

    return(
        <>
            <h1 className='content-title'>Kontrak</h1>
            <section className="content">
                <Unitsubkeg/>
                <Kontraklist/>
            </section>
        </>
    );

}

const Kontraklist=(props)=>{
    return(
        <section className="area">
            <table className='table'>
                <thead>
                    <tr>
                        <th>No.Kontrak</th>
                        <th>Tgl.Kontrak</th>
                        <th>Tgl.Selesai</th>
                        <th>Uraian</th>
                        <th>Rekanan</th>
                        <th>Nilai (Rp.)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th colSpan={5}>Jumlah</th>
                        <th>0,00</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Kontrak