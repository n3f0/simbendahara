import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Lookuptree from '../lookup/lookuptree'

export default function Unitsubkeg(props) {
  const [ltree,setltree]=useState(false)
  const [lsubkeg,setsubkeg]=useState(false)
  const [unit,setUnit]=useState({unitkey:'',kdunit:'',nmunit:''})
  function setModalUnit(val=false){
    setltree(val)
  }
  useEffect(()=>{
    console.log(unit)
  })
  function ChangeUnit(param){
    setUnit(param)

    setltree(false)
  }
  return (
    <>
      <div className='fitur'>
          <div className="pilihan-group">
              <div className="lbl-pilihan">Unit Organisasi</div>
              <div className="pilihan-left">{unit.kdunit}</div>
              <button className="pilihan-search" onClick={event=>{setltree(true)}}><i className="fa fa-search"></i></button>
              <div className="pilihan-right">{unit.nmunit}</div>
          </div>
          <div className="pilihan-group">
              <div className="lbl-pilihan">Sub Kegiatan</div>
              <div className="pilihan-left">1.01.01.1.01.02</div>
              <button className="pilihan-search"><i className="fa fa-search"></i></button>
              <div className="pilihan-right">Sub Kegiatan Pembangunan Jalan Provinsi</div>
          </div>
          <Lookuptree show={ltree} set={setModalUnit} change={ChangeUnit}/>
      </div>
    </>
  )
}
