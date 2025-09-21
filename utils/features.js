import { ethers } from "ethers";
import { TrackingAddress, TrackingAbi } from "../Context/Constant";
import web3Modal from "web3modal";
export const fetchingContract = (signerOrProvider) => {
  const contract = new ethers.Contract(
    TrackingAddress,
    TrackingAbi,
    signerOrProvider
  );
  return contract;
 
};
export const checkWalletConnection = async () => {
  if (!window.ethereum) return "please install metamask";
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  if (accounts.length > 0) {
    return accounts[0];
  } else {
    return "please connect";
  }
};
export const getSigner = async () => {
  if (window.ethereum !== undefined) {
    const web3modal = new web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const network =await provider.getNetwork();
    console.log('network',network);
    const signer = await provider.getSigner();
    console.log('network isssssssssssssssssss',network);
    return signer;
  }
};
