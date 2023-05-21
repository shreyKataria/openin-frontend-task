import React from 'react'

export default function Mainpage({children}) {
  return (
    <div className="relative w-full h-[1024px] overflow-hidden text-left text-base text-black font-montserrat">
      <div className="absolute top-[0px] left-[0px] bg-black w-[588px] h-[1024px]"> 
      <b className="absolute top-[464px] left-[171px] text-[72px] text-white">Board.</b>
      </div>

    <div >   
    {children}
    </div>
    </div> 
  )
}