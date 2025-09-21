import React from "react";
import { useState } from "react";
const Form = ({createShipmentModel,
        createShipment,
        setCreatShipmentModel,refreshShipments}) => {
          const [shipment,setShipment]=useState({
            receiver:'',
            pickupTime:'',
            distance:'',
            price:'',
          })
          const createItem = async () => {
  try {
     await createShipment(shipment); // send transaction
  
    refreshShipments(); // now refresh after confirmed
  } catch (error) {
    console.log("wrong creating item", error);
  }
};

  return (
    createShipmentModel?(
      <div className="fixed inset-0 z-10 overflow-y-auto  ">
        <div className='fixed inset-0 w-full h-full bg-black  opacity-40'
        onClick={()=>setCreatShipmentModel(false)}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-red-200 rounded-md
          shadow-lg">
            <div className="flex justify-end ">
              <button className="p-2 text-red-400 font-bold rounded-md hover:bg-red-100"
              onClick={()=>setCreatShipmentModel(false)}>
             X
              </button>
            </div>
            <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
              <h4 className="text-lg font-medium text-gray-800">
                Track product, Create Shipment
              </h4>
              <p className="text-[15px] text-gray-600">
                Ut enim ad minim veniam,quid nosu exercionf,
              </p>
              <form onSubmit={(e)=>e.preventDefault()}>
                <div className="relative mt-3 ">
                   <input
                   type="text"
                   placeholder="receiver"
                   className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                   outline-none border focus:border-indigo-600 shadow-sm 
                   rounded-lg"
                   onChange={(e)=>setShipment({
                    ...shipment,
                    receiver:e.target.value,
                   })}
                   />
                </div>
                <div  className="relative mt-3" >
                  <input type='date' 
                  placeholder="pickupTime" 
                  className="w-full pl-5 pr-3 py-2 text-gray-500
                  bg-transparent outline-none border focus:border-indigo-600 shadow-sm 
                  rounded-lg"
                  onChange={(e)=>setShipment({
                    ...shipment,
                    pickupTime:e.target.value
                   })}/>
                </div>
                <div className="relative mt-3">
                   <input type="text" 
                   placeholder="distance"
                   className="w-full pl-5 pr-3 py-2 text-gray-500 
                   bg-transparent outline-none border  focus:border-indigo-600 
                   shadow-sm rounded-lg  "
                   onChange={(e)=>setShipment({
                    ...shipment,
                    distance:e.target.value
                   })}/>
                   <div className="relative mt-3">
                    <input 
                    type="text"
                    placeholder="price"
                    className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
                    outline-none  border focus:border-indigo-600 shadow-sm rounded-lg"
                     onChange={(e)=>setShipment({
                      ...shipment,
                      price:e.target.value
                     })}/>
                   </div>
                </div>
                <button onClick={()=>{
                  console.log('this is the shipment object',shipment)
                  createItem()}}
                  className="block w-full mt-3 py-3 font-medium text-sm text-center
                  text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700
                  rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2 "
                  >
                    Create Shipment
                  </button>
              </form>
          </div>
        </div>
      </div>
      </div>
    ):""
    )
 
};

export default Form;
