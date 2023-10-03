import React, { useState } from 'react'
import NavComponent from '../component/NavComponent'

const Aboutpage = () => {


  let [mtr, setMtr] = useState({
    // property
    merek : 'Honda',
    jenis : 'CRF 150',
    harga : 'Rp 30.000.000',
    stock : 3,
    status : 'Ready',

    // method
    jualkan : () => {
        setMtr( data => {
            return{
                ...data,
                // stock : data.stock - 1,
                status : data.stock <= 1 ? "Habis" : "Ready",
                stock : data.stock == 0 ? 0 : data.stock - 1
            }
        })
    },
    tambahStock : () => {
        setMtr( data => {
            return{
                ...data,
                stock : data.stock + 1,
                status : 'Ready'
            }
        })
    }
  })
  
  


  return (
    <div>
        <NavComponent />
        <h1>About Page</h1>
        <ul>
            <li>Merek : {mtr.merek}</li>
            <li>Jenis : {mtr.jenis}</li>
            <li>Harga : {mtr.harga}</li>
            <li>Stock : {mtr.stock}</li>
            <li>Status : {mtr.status}</li>
        </ul>
        <button onClick={() => mtr.jualkan()}>Jual Motor</button>
        <button onClick={() => mtr.tambahStock()}>Tambah Stock</button>
    </div>
  )
}

export default Aboutpage