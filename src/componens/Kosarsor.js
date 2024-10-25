import React from 'react'


export default function Kosarsor(props) {
  function torles(){
    props.torles(props.adat)
}
  return (
      <tr>
            <td>{props.adat.nev}</td>
            <td><img src={props.adat.kep} alt="termek" ></img></td>
            <td>{props.adat.ar}</td>
            <td>{props.adat.db}</td>
            <td><button type="button" className="btn btn-danger" onClick={()=>{torles()}}>Törlés</button></td>
        </tr>
  )
}
