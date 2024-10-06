import React, { useRef } from 'react'
import Crds from './Crds'

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      url: "/images/boyanimation.jpeg",
      desc: "Lorem ipsum dolor sit amet.",
      size: "0.9 Mb",
      close : false,
      tag:{isopen:true, title:"Download Now", color: "green"},
    },
    { 
      url: "/images/boy2.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      size: "0.7 Mb",
      close : true,
      tag:{isopen:false, title:"Installed", color: "blue"},
    },
    {
      url: "/images/aloneboy2.jpeg",
      desc: "Lorem ipsum dolor sit amet.",
      size: "0.9 Mb",
      close : true,
      tag:{isopen:true, title:"Upload", color: "blue"},
    }
  ]
  return (
    <div ref={ref} className='fixed z-[3] p-6 w-full h-full flex flex-wrap gap-10'>
    {data.map((item, index)=>(
        <Crds data = {item} reference ={ref}/>
    ))}
    </div>
  )
}

export default Foreground