import React, { useRef } from 'react'
import Card from './card'
function foreground() {

  const ref =useRef(null)

  const carddata =[
    {
      Hero:"Spidy",
      Image:"spiderman",
      heroimage:"./public/spidy.jpg"
    },
    {
      Hero:"SpyDo",
      Image:"spiderman",
      heroimage:"public/pyderman.jpeg"
    },
    {
      Hero:"Tonyy",
      Image:"spiderman",
      heroimage:"public/ironman.jpeg"
    },
    {
      Hero:"Piter",
      Image:"spiderman",
      heroimage:"public/spydyy.jpeg"
    }
  ]
  return (
    <>
      <div ref={ref} className='fixed flex top-0 left-0 w-screen h-screen bg-0 z-[5] m-5'>
      {carddata.map((item ,index)=>(
        <Card carddata={item} refrence={ref} />
      ))}
      </div>
    </>
  )
}

export default foreground