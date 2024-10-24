import React, { useContext } from 'react'
import './Termek.css'
import { KattContext } from '../context/KattContext'

export default function Termek(props) {
  const {katt} =useContext(KattContext)
    function kattintas() {
        katt(props.index)        
    }
  return (
    <div className="card">
        <h4>{props.adat.nev}</h4>
        <img src={props.adat.kep} alt="termek" />
        <p>{props.adat.leiras}</p>
        <p>Ár: {props.adat.ar} Ft</p>
        <button  type="button" className="btn btn-primary" onClick={()=>kattintas()}>Kosárba</button>
    </div>
  )
}
