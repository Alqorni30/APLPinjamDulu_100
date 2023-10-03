import React from 'react'
import { useState, useEffect } from 'react';
import HeroComponent from '../component/HeroComponent';
import NavComponent from '../component/NavComponent';

const Homepage = () => {

  
  const [pacarKu, setPacarKu] = useState(1)
    const [modeKu, setMode] = useState('')

    useEffect(() => {
      if (pacarKu > 1) {
        setMode('Playboy')
      }else if(pacarKu == 0 ) {
        setMode('Maka Janganlah kau dekati zina')
      } else if(pacarKu < 0 ) {
        setPacarKu(0)
      }
      else{
        setMode('Pacar Yang baik')
      }
    }, [pacarKu])

    const textHeading = 'Belajar React with Bayo'

    const semuaBuah = ['apel', 'nangka', 'wortel', 'mangga', 'jeruk']
    semuaBuah.push('Rambut')
    const buah = semuaBuah.map((f, i) => <li key={i}>{f}</li>)

    const num = [1, 2, 3, 4, 6, 7, 8, 9, 10]
    const number = num.filter((n) => n < 11)
    const total = number.reduce( (value, acc) => value + acc )
  return (   
    <div>
      <NavComponent />
      <HeroComponent text={textHeading} />
        <p className='text-center fw-semibold mt-3'>Jumlah Pacar = {pacarKu} </p>
        <p className='text-center fw-semibold mt-3'>Mode = {modeKu} </p>
        
      <ul>
        {buah}
        {number}
        {total}
        {total}
      </ul>
      <button onClick={()=> setPacarKu((prev) => prev + 1)} className='btn btn-primary d-flex justify-center mt-4 m-auto'>Tambah pacar</button>
      <button onClick={()=> setPacarKu((prev) => prev - 1)} className='btn btn-primary d-flex justify-center mt-4 m-auto'>Putuskan pacar</button>     
    </div>
  )
}

export default Homepage