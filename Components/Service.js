import React from "react";
import Image from "next/image";
import  images from '../Images/index'
const Service = ({ setOpenProfile,
        setCompletModal,
        setGetModel,
        setStartModal}) => {
const team=[
   {
    avatar:images.getShipment,
  },
  {
    avatar:images.startShipment
  },
  {
    avatar:images.compShipment
  },
  
   {
    avatar:images.userProfile 
  },
   
   {
    avatar:images.send
  },
   {
    avatar:images.shipCount
  },
]
const openModelBox=(text)=>{
  if(text==0){
    setGetModel (true)
  }else if(text==2){
    setCompletModal(true)
  } if(text==3){
    setOpenProfile(true)
  }else if(text==1){
    setStartModal(true)
  }
}
  return (
  <section className="text-white p-10 py-0 pb-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="container mx-auto px-6">
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 ml-2">
                 

        {team.map((item,id)=>(
           
          <li key={id}>
            <div onClick={()=>openModelBox(id)}
         className="w-40 h-40 sm:h-52 md:h-56  overflow-hidden ml-6">
        
          <Image 
           src={item.avatar}   
           className=" w-40 h-40 object-cover object-center shadow-md rounded-xl" alt="cc"/>
    
             </div>
             </li>
       ))}
        </ul>
        
      </div>
    </div>
    </section>
  )
};

export default Service;
