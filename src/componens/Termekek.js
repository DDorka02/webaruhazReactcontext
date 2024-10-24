import React from 'react'
import Termek from './Termek'

export default function Termekek(props) {
  return (
    <>
      {
        props.lista.map((elem, index) =>{
            return (<Termek adat={elem} key={index} index={index}/>)
        })
        
      }
      
    </>
  )
}
