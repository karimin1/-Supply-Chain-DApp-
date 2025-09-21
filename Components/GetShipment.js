import React from "react";
import { useState } from "react";
import { classicNameResolver } from "typescript";
const GetShipment = ({getModel,setGetModel,getShipment}) => {
  const [index,setIndex]=useState(0);
  const [singleShipmentData,setSingleShipmentData]=useState();
  const getData=async(index)=>{
  const data=await getShipment(index);
  setSingleShipmentData(data);
  console.log("data",data);
  console.log("time value:", data.deliveryTime, "data.deliveryTime:", typeof data.deliveryTime);
  console.log(setSingleShipmentData);
  }
 
  const converTime=(time)=>{
    if(!time && time==undefined)return 'N/A' ;
    console.log("converTime received:", time, "type:", typeof time);
    const neweTime=new Date(time);
    const dataTime=new Intl.DateTimeFormat("en-US",{
      year:'numeric',
      month:"2-digit",
      day:'2-digit',
    }).format(neweTime);
    return dataTime;
  }
  return getModel?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
     <div  className="fixed inset-0 w-full bg-black opacity-40"
     
     onClick={()=>setGetModel(false)}></div>

    <div className="flex items-center min-h-screen px-4 py-8">
      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md
      shadow-lg">
        <div className="flex justify-end">
          <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
          onClick={()=>setGetModel(false)}>
            X
          </button>
        </div>
        <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
          <h4 className="text-lg font-medium  text-gray-800">
            Product Tracking Details
          </h4>
        <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className="relative mt-3">
          <input type='number' placeholder="id" className="w-full pl-3
          py-2 text-gray-500 bg-transparent ouline-non border focus:border-indigo-600
          shadow-sm rounded-lg" onChange={(e)=>setIndex(e.target.value)} />

        </div>
        <button onClick={()=>getData(index)} className="block w-full mt-3
        px-4 font-medium text-sm text-center text-white bg-indigo-600
        hover:bg-indigo-500 active:bg-indigo-700
        rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">
          GET DETAILS
        </button>
        </form>
        {singleShipmentData==undefined?(''):
        (
            <div className="text-left !text-black ">
              <p>Sender:{singleShipmentData.sender.slice(0,10)}...</p>
              <p>Receiver:{singleShipmentData.receiver.slice(0,10)}...</p>
              <p>PickupTime:{converTime(singleShipmentData.pickupTime)}...</p>
              <p>DeliveryTime:{converTime(singleShipmentData.deliveryTime)}</p>
              <p>Distance:{singleShipmentData.distance}</p>
               <p>Price:{singleShipmentData.price}</p>
                <p>Status:{singleShipmentData.status}</p>
                <p>Paid: {singleShipmentData.paid?'paid':'notpaid'}</p>
                </div>
          )
          }
        
     
      </div>
    </div>
    
    </div>
    </div>
  ):('')
}

export default GetShipment;
