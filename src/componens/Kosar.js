import React from 'react'
import Kosarsor from './Kosarsor'

export default function Kosar(props) {
  function torles(adat){
    props.torles(adat)
}

  return (
    <>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Neve</th>
                <th>Kép</th>
                <th>Ár</th>
                <th>Db</th>
                <th>Törlés</th>
            </tr>
        </thead>
        <tbody>
            {props.lista.map((elem, index)=>{
                return <Kosarsor adat={elem} key={index} torles={torles}/>
            })}
        </tbody>
        </table>
    </>
  )
}
