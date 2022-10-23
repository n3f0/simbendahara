import React from 'react'
import { useState } from 'react';
import './rekanan.css'

const Rekanan=(props)=>{

    const data=[
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
        {
        kdp3:'0001',
        nmp3:'PT. Mencari Berkah',
        norek:'200125322343',
        npwp:'00345324030003',
        jenis:'Perdagangan',
        alamat:'Jl. Pendopo Raya No. 53 Padang'
        },
        {
        kdp3:'0001',
        nmp3:'PT. Mencari Berkah',
        norek:'200125322343',
        npwp:'00345324030003',
        jenis:'Perdagangan',
        alamat:'Jl. Pendopo Raya No. 53 Padang'
        },
        {
        kdp3:'0001',
        nmp3:'PT. Mencari Berkah',
        norek:'200125322343',
        npwp:'00345324030003',
        jenis:'Perdagangan',
        alamat:'Jl. Pendopo Raya No. 53 Padang'
        },
        {
        kdp3:'0001',
        nmp3:'PT. Mencari Berkah',
        norek:'200125322343',
        npwp:'00345324030003',
        jenis:'Perdagangan',
        alamat:'Jl. Pendopo Raya No. 53 Padang'
        },
        {
        kdp3:'0001',
        nmp3:'PT. Mencari Berkah',
        norek:'200125322343',
        npwp:'00345324030003',
        jenis:'Perdagangan',
        alamat:'Jl. Pendopo Raya No. 53 Padang'
        },
        {
        kdp3:'0001',
        nmp3:'PT. Mencari Berkah',
        norek:'200125322343',
        npwp:'00345324030003',
        jenis:'Perdagangan',
        alamat:'Jl. Pendopo Raya No. 53 Padang'
        },
        {
        kdp3:'0001',
        nmp3:'PT. Mencari Berkah',
        norek:'200125322343',
        npwp:'00345324030003',
        jenis:'Perdagangan',
        alamat:'Jl. Pendopo Raya No. 53 Padang'
        },
        {
        kdp3:'0001',
        nmp3:'PT. Mencari Berkah',
        norek:'200125322343',
        npwp:'00345324030003',
        jenis:'Perdagangan',
        alamat:'Jl. Pendopo Raya No. 53 Padang'
        },
    ]
    return(
        <section className="content">
            <h4>Rekanan</h4>
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
                                <tr>
                                    <td>{listValue.kdp3}</td>
                                    <td>{listValue.nmp3}</td>
                                    <td>{listValue.norek}</td>
                                    <td>{listValue.npwp}</td>
                                    <td>{listValue.jenis}</td>
                                    <td>{listValue.alamat}</td>
                                    <td></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );

}

export default Rekanan