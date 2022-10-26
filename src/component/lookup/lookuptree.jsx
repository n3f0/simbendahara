import React from "react";
import { useState } from "react";
import data from "../../dummy/unit.json";
import "./lookup.css";
export default function Lookuptree(props) {
  const [lookup, setlookup] = useState(data);
  if (props.show != true) return null;
  else
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">Unit Organisasi :</div>
          <div className="modal-body">
            <ul>
              {lookup.map((v1, i1) => {
                return (<li key={i1}>
                  {v1.kdurus} - {v1.nmurus}
                  <ul>{v1.bidang.map((v2, i2) => {
                    return (<li key={i2}>{v2.kdbidang} - {v2.nmbidang}
                        <ul>
                            {v2.skpd.map((v3,i3)=>{
                                return(
                                    <li key={i3}>
                                        <span onClick={()=>props.change({unitkey:v3.unitkey,kdunit:v3.kdunit,nmunit:v3.nmunit})}>{v3.kdunit} - {v3.nmunit}</span>
                                        <ul>
                                        {v3.subunit.map((v4,i4)=>{
                                            return(<li key={i4}><span onClick={()=>props.change({unitkey:v4.unitkey,kdunit:v4.kdunit,nmunit:v4.nmunit})}>{v4.kdunit} - {v4.nmunit}</span></li>)
                                        })}
                                         </ul>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>)
                  })}</ul>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    );
}
