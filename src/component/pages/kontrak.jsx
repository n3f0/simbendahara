import React from 'react'
import { useState } from 'react';
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
const listkontrak=[
{nokon:'001/SPK/BINAMARGA/2022',tglkon:'2022-01-01',tglselesaikon:'2022-07-25',uraikon:'Pembuatan Riol Jalan Lintas Sumatera Kab.Sijunjung s.d Kab. Darmas Raya Prov. Sumbar',nmp3:'PT. Indah Perkasa',nilai:250003720},
{nokon:'001/SPK/BINAMARGA/2022',tglkon:'2022-01-01',tglselesaikon:'2022-07-25',uraikon:'Pembuatan Riol Jalan Lintas Sumatera Kab.Sijunjung s.d Kab. Darmas Raya Prov. Sumbar',nmp3:'PT. Indah Perkasa',nilai:250003720},
{nokon:'001/SPK/BINAMARGA/2022',tglkon:'2022-01-01',tglselesaikon:'2022-07-25',uraikon:'Pembuatan Riol Jalan Lintas Sumatera Kab.Sijunjung s.d Kab. Darmas Raya Prov. Sumbar',nmp3:'PT. Indah Perkasa',nilai:250003720},
{nokon:'001/SPK/BINAMARGA/2022',tglkon:'2022-01-01',tglselesaikon:'2022-07-25',uraikon:'Pembuatan Riol Jalan Lintas Sumatera Kab.Sijunjung s.d Kab. Darmas Raya Prov. Sumbar',nmp3:'PT. Indah Perkasa',nilai:250003720},
{nokon:'001/SPK/BINAMARGA/2022',tglkon:'2022-01-01',tglselesaikon:'2022-07-25',uraikon:'Pembuatan Riol Jalan Lintas Sumatera Kab.Sijunjung s.d Kab. Darmas Raya Prov. Sumbar',nmp3:'PT. Indah Perkasa',nilai:250003720},
]

const Kontraklist=(props)=>{
    var [kontrak,setKontrak]=useState(listkontrak);
    var [total,settotal]=useState(35000)
   
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
                <tbody>
                    {kontrak.map((v,i)=>{
                        return(
                            <tr key={i}>
                                <td onClick={()=>{alert(v.nokon)}} className="cursor-pointer">{v.nokon}</td>
                                <td>{v.tglkon}</td>
                                <td>{v.tglselesaikon}</td>
                                <td>{v.uraikon}</td>
                                <td>{v.nmp3}</td>
                                <td className='text-right'>{v.nilai}</td>
                                <td className='text-center'><button className="btnedit">Edit</button><button className="btnhapus">Hapus</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={5} className='text-right'>Jumlah</th>
                        <th className='text-right'>{total}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Kontrak