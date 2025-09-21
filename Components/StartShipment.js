import React from "react";
import { useState } from "react";
export default  ({startModal, startShipment,setStartModal}) => {
  const [getProduct,setGetProduct]=useState({
    receiver:'',
    index:'',
  });
  const startShipmentproduct=()=>{
    startShipment({receiver:getProduct.receiver,index:getProduct.index})
  }
  return (
startModal?(
  <div className="fixed inset-0 z-10 overflow-y-auto">
  <div className="fixed inset-0 w-full bg-black opacity-40"
  onClick={()=>setStartModal(false)}></div>
    <div className="flex items-center min-h-screen px-4 py-8">
      <div className=" relative w-full max-w-lg p-4 mx-auto bg-white rounded-mmd shadow-lg">
        <div className="flex justify-end">
          <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
          onClick={()=>setStartModal(false)}>
            X
          </button>
        </div>
        <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
          <h4 className="text_lg font-medium text-gray-800">
        Start The shipping
          </h4>
          <form onSubmit={(e)=>{e.preventDefault()} }>
<div className="relative mt-3">
  <input type='text' placeholder="receiver" className="w-full pl-5 pr-3 py-2
  text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-lg
  rounded-lg" onChange={(e)=>{setGetProduct({
    ...getProduct,
    receiver:e.target.value
  }
  )
  console.log('getProduct',getProduct)}}></input>
</div>
<div className="relative mt-3">
  <input type='text' placeholder="id"  className='w-full pl-2 text-gray-500 bg-transparent
  outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
  onChange={(e)=>{setGetProduct({
    ...getProduct,
    index:Number(e.target.value)
  })
    console.log('getProduct',getProduct)
    }} />
</div>
<button onClick={
  
  ()=>{
    console.log('getProduct',getProduct)
    startShipmentproduct()}
} className="block w-full mt-3 py-3
  px-4 font-medium text-sm text-center bg-indigo-600 hover:bg-indigo-500
  active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">get Details
</button>
          </form>
        </div>
      </div>
    </div>
  </div>
):('')
  )
};


