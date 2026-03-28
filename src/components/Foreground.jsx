import React, { useRef } from 'react'
import Card from './Card.jsx'
function foreground() {

  const ref =useRef(null)
const carddata = [
  {
    Hero: "Spider-Man",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/78/dd/1c/78dd1c82c102f32f5c5245e1860b6a88.jpg"
  },
  {
    Hero: "Peter Parker",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/cf/95/15/cf9515c77140b87880058609cc49b9ae.jpg"
  },
  {
    Hero: "Miles Morales",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/d5/5f/92/d55f9254d763bd7319a00e4eed808f10.jpg"
  },
  {
    Hero: "Venom",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/29/d1/eb/29d1eb4dacbbdc2055eb8352d3f575ab.jpg"
  },
  {
    Hero: "Green Goblin",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/a8/50/3b/a8503ba1cb476f92c37d9f79d311f578.jpg"
  },
  {
    Hero: "Doctor Octopus",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/94/2f/c8/942fc8d9e3a65558f3da5bba8e293c5f.jpg"
  },
  {
    Hero: "Black Cat",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/34/94/c7/3494c70539265b12aaa7594af1adeb7a.jpg"
  },
  {
    Hero: "Scarlet Spider",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/1a/2b/3c/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p.jpg"
  },
  {
    Hero: "Spider-Gwen",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/4d/5e/6f/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s.jpg"
  },
  {
    Hero: "Kingpin",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/7g/8h/9i/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v.jpg"
  },
  {
    Hero: "J. Jonah Jameson",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/5e/6f/7g/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t.jpg"
  },
  {
    Hero: "Silver Sable",
    Image: "spiderman",
    heroimage: "https://i.pinimg.com/474x/8h/9i/0j/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w.jpg"
  }
];   
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