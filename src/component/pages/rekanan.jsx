import React from 'react'
import { useState } from 'react';
import './rekanan.css'
import Rekananform from './rekananform/rekananform';

var rekanan=[
    {
    kdp3:'0001',
    nmp3:'PT. Mencari Berkah',
    norek:'200125322343',
    npwp:'00345324030003',
    jenis:'Perdagangan',
    alamat:'Jl. Pendopo Raya No. 53 Padang'
    },
    {
    kdp3:'0002',
    nmp3:'Karang Taruna Balai Gadang',
    norek:'200125322341',
    npwp:'0034532403082',
    jenis:'LSM',
    alamat:'Koto Tangah'
    },
]
const Rekanan=()=>{

    const [fshow,setfshow]=useState(false)
    const[data,setData]=useState(rekanan)
    function hapus(id){
        setData(data.filter((item,index)=>index!==id))
    }

    function edit(id){

    }
    function add(val){
        console.log(data)
       setfshow(val)
    }
    function close(){
        setfshow(false)
    }
    return(
        <>
            <h1 className='content-title'>Rekanan</h1>
            <section className="content">
                <button onClick={()=>add(!fshow)}>Tambah</button>
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
                        <tbody>
                            {data.map((listValue,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{listValue.kdp3}</td>
                                        <td>{listValue.nmp3}</td>
                                        <td>{listValue.norek}</td>
                                        <td>{listValue.npwp}</td>
                                        <td>{listValue.jenis}</td>
                                        <td>{listValue.alamat}</td>
                                        <td><button className='btnedit' onClick={e=>hapus(index)}>Edit</button><button className='btnhapus' onClick={e=>hapus(index)}>Hapus</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {fshow?<Rekananform close={close}/>:null}
            </section>
        </>
    );

}

export default Rekanan