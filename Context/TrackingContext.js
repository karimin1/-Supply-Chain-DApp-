"use client";
import React, { useContext, useState, useEffect } from "react";
import web3Modal from "web3modal";
import { ethers, parseEther, formatEther } from "ethers";
//INTERNAL IMPORT
import { TrackingAbi } from "./Constant";
import { TrackingAddress } from "./Constant";

import {
  checkWalletConnection,
  getSigner,
  fetchingContract,
} from "../utils/features";
export const TrackingContext = React.createContext();

export const TrackingProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [signer, setSigner] = useState("");
  useEffect(() => {
    const getAccount = async () => {
      const signer = await getSigner();
      const account = await checkWalletConnection();
      setCurrentUser(account);
      setSigner(signer);
      console.log("account is", account);
    };
    getAccount();
  }, []);
  const createShipment = async (items) => {
    try {
      console.log("items is ",items);
      const { receiver, pickupTime, distance, price } = items;
      const preiceinWei= parseEther(price.toString());
      console.log("receiver:", receiver);
console.log("pickupTime (seconds):", Math.floor(new Date(pickupTime).getTime() / 1000));
console.log("distance:", distance);
console.log("price (input):", preiceinWei);

      console.log('signer is signer',signer);
      const contract = await fetchingContract(signer);
      console.log('this is contract',contract.target);
      const createItem = await contract.CreateShimpent(
        receiver,
        Math.floor(new Date(pickupTime).getTime() / 1000),
        distance,
       preiceinWei,
        { value: preiceinWei }
      );
      await createItem.wait();
    } catch (error) {
      console.log("erroris", error);
    }
    //   console.log("contract fetching is,", contract);
  };
  const getAllShipment = async () => {
    try {
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
      const contract = await fetchingContract(provider);
       console.log("contract   iss AllShipment   ", contract);
      const AllShipment = await contract.getAllTransactions();
       console.log("AllShipment   ", AllShipment);

      const items = (AllShipment||[]).map((item) => ({
        sender: item.sender,
        receiver: item.receiver,
        pickupTime: new Date(Number(item.pickupTime) * 1000),
        price: formatEther(item.price),
        deliveryTime:Number(item.deliveryTime),
        paid: item.isPaid,
        distance: Number(item.distance),
        status: Number(item.status),
      }));
       console.log("itemsitemsitemsitems is", items);
      return items;
    } catch (error) {
      console.log("error", error);
    }
  };

  const getShipmentCount = async () => {
    try {
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

      const contract = await fetchingContract(provider);
      const count = await contract.getShipmentCount(currentUser);
   
      return Number(count);
    } catch (error) {
      console.log("error", error);
    }
  };
  const completeShipment = async (item) => {
    try {
      const { receiver, index } = item;
      
      const contract = await fetchingContract(signer);
      const completshipment = await contract.completeShipment(
        currentUser,
        receiver,
        index,
        { gasLimit: 300000 }
      );
      completshipment.wait();
    } catch (error) {
      console.log("error is ", error);
    }
  };
  const getShipment = async (index) => {
    try {
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
      const contract = await fetchingContract(provider);
      const item = await contract.getShipment(currentUser, Number(index));
      console.log("iteeeeem is  ",item)
      const shipment = {         


        sender: item[0],
        receiver: item[1],
        pickupTime: new Date(Number(item[2])*1000).getTime(),
        deliveryTime:Number(item[3]),
        price: formatEther(item[4]),
        distance: item[5].toString(),
        status: Number(item[6]),
        paid: item[7]
      };
      return shipment;
    } catch (error) {
      console.log("error is", error);
    }
  };
  const startShipment = async ({ receiver, index }) => {
    try {
      const contract = await fetchingContract(signer);
       console.log("xxxxreceiver", receiver); console.log("xxxxindex", index); console.log("xxxxcurrentUser", currentUser);
      const transaction = await contract.startShiment(
        currentUser,
        receiver,
        index
      );
      transaction.wait();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <TrackingContext.Provider
      value={{
        checkWalletConnection,
        createShipment,
        getAllShipment,
        completeShipment,
        getShipment,
        startShipment,
        currentUser,
        getShipmentCount,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
  // };
};
