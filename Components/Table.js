import React from "react";

const Table = ({setCreatShipmentModel,AllShipmentdata}) => {
  const convetTime=(time)=>{
    const newTime =new Date(time);
    const  dataTime=new Intl.DateTimeFormat('en-Us',{
      year:"numeric",
      month:'2-digit',
      day:'2-digit'

    }).format(newTime);
    return dataTime;
  }
  console.log("AllShipmentdata isssss",AllShipmentdata);
  return(
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Create Tracking
        </h3>
        <p className="text-gray-600 mt-2">
          lorem ipsm simply  dummy text of une printing and typescriptgfnjkdfhngkjhfkogfd
        </p>
      </div>

      <div className="mt-3 md:mt-0">
      <p onClick={()=>setCreatShipmentModel(true)}
        href='#' className="inline-block  px-4 py-2 text-white duration-150 font-medium  bg-gray-800
        hover:bg-gray-700 active:bg-gray-900 md:text-sm rounded-lg md:inline:flex">
       Add Tracking
        </p>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className='w-full table-auto text-sm text-left'>
          <thead className="bg-gray-50  text-gray-600">
            <tr>
              <th className="py-3 px-6">Sender</th>
               <th className="py-3 px-6">Receiver</th>
                <th className="py-3 px-6">PickupTime</th>
                 <th className="py-3 px-6">Distance</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6">DilveredTime</th>
                  <th className="py-3 px-6">Paid</th>
                  <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
       <tbody className="text-gray-600 divide-y">
            {(AllShipmentdata||[]).map((item,id)=>(
              <tr key={id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.sender.slice(0,15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.receiver.slice(0,15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {convetTime(item.pickupTime)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {item.distance}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.deliveryTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {item.isPaid? 'Competed':'no complete'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.status==0
                  ?'Pendind'
                  :item.status==1
                  ?'IN TRANSIT'
                  :'DELIVERED'}
                </td>
              </tr>
            ))}
          </tbody> 
        </table>

      </div>
    </div>
  )
};

export default Table;
