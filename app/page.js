"use client";
import Image from "next/image";
import { TrackingContext } from "../Context/TrackingContext";
import { useContext, useEffect, useState } from "react";
import {
  CompleteShipment,
  Form,
  GetShipment,
  Profile,
  Service,
  StartShipment,
  Table,
} from "../Components/index";
export default function Home() {
  const {
    checkWalletConnection,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentCount,
    currentUser,
  } = useContext(TrackingContext);
  const [createShipmentModel, setCreatShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [completeModal, setCompletModal] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [getModel, setGetModel] = useState(false);

  //DATA STATE VARIABLE
  const [AllShipmentdata, setallShipmentsdata] = useState([]);
  useEffect(() => {
    const getCompainsData = async()=>{
      const data=await getAllShipment();
        setallShipmentsdata(data);
        console.log('datadatadata',data)
    }
   
     getCompainsData();
    
  }, []);
  const refreshShipments = async () => {
  const data = await getAllShipment();
  setallShipmentsdata(data);
};
  return (
    <div className="text-white p-30flex flex-col space-x-6">
       <Service
        setOpenProfile={setOpenProfile}
        setCompletModal={setCompletModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal}
      />  
      <Table
        setCreatShipmentModel={setCreatShipmentModel}
        AllShipmentdata={AllShipmentdata}
      />
      <Form
      refreshShipments={refreshShipments}
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreatShipmentModel={setCreatShipmentModel}
      />
      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentCount={getShipmentCount}
      />
      <CompleteShipment
        completeModal={completeModal}
        setCompletModal={setCompletModal}
        completeShipment={completeShipment}
      />

      <GetShipment getModel={getModel} setGetModel={setGetModel} getShipment={getShipment}/>
      <StartShipment startModal={startModal} startShipment={startShipment} setStartModal={setStartModal} />
    </div>
  );
}
