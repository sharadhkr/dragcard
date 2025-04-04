import React, { useRef } from 'react'
import Card from './Card.jsx'
function foreground() {

  const ref =useRef(null)

  const carddata =[
    {
      Hero:"Spidy",
      Image:"spiderman",
      heroimage:"https://drive.google.com/file/d/1heEKNzeCRmlHL5fCiCxtHcRIA9sd5kWH/view?usp=sharing"
    },
    {
      Hero:"SpyDo",
      Image:"spiderman",
      heroimage:"https://drive.google.com/file/d/1gW0MaeeT4VfCbWjt-DhvK08wfjWSocsQ/view?usp=sharing"
    },
    {
      Hero:"Tonyy",
      Image:"spiderman",
      heroimage:"https://drive.google.com/file/d/1EzypBlO56tLJqv1XF3xbugz2ktXV_qnN/view?usp=sharing"
    },
    {
      Hero:"Piter",
      Image:"spiderman",
      heroimage:"https://drive.google.com/file/d/12HTQW0jceFSMaVRuX19lxkUKT02xh2pW/view?usp=sharing"
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