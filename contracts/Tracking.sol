//SPDX-License-Identier:MIT
pragma solidity ^0.8.0;
contract  Tracking {
    enum ShipmentStatus{PENDING, IN_TRANSIT,DELIVERED}
    struct Shipment{
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        ShipmentStatus status;
        bool isPaid;
    }
    mapping (address=>Shipment[]) public shipments;
    uint256 public shipmentCount;
    struct TypeShipment{
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 distance;
        uint256 price;
        ShipmentStatus status;
        bool isPaid;
    }
 TypeShipment[]  typeShipments;
event ShipmentCreated(address indexed sender,address indexed receiver,
uint256 pickupTime,uint256 distance,uint256 price);
event ShipmentInTransit (address indexed sender,address indexed receiver,
uint256 pickupTime,uint256 distance,uint256 price);
event ShipmentDelivered(address indexed sender,address indexed receiver,
uint256 deliveryTime);
event Shipmentpaid(address indexed sender,address indexed receiver,
uint256 amount);
constructor(){
    shipmentCount=0;
}
function CreateShimpent( 
        address _recever,
        uint256 _pickupTime,
        uint256 _distance,
        uint256 _price)public payable{
require(msg.value==_price,"pament amount must much the price");
Shipment memory shipment=Shipment(msg.sender,_recever,_pickupTime,0,_distance,_price,ShipmentStatus.PENDING,false); 
   (shipments[msg.sender]).push(shipment);
   shipmentCount++;
   TypeShipment memory typeShipment;
   typeShipment=TypeShipment(msg.sender,_recever,_pickupTime,0,_distance,_price,ShipmentStatus.PENDING,false);
   typeShipments.push(typeShipment);
   emit ShipmentCreated(msg.sender,_recever,_pickupTime,_distance,_price);
    }
    function startShiment(address _sender,address _receiver,uint256 _index)public {
        Shipment storage shipment=shipments[_sender][_index];
        TypeShipment storage typeshipment=typeShipments[_index];
        require(shipment.receiver==_receiver,'invalid receiver');
        require(shipment.status==ShipmentStatus.PENDING,'shipment already in transit');
        shipment.status=ShipmentStatus.IN_TRANSIT;
        typeshipment.status= ShipmentStatus.IN_TRANSIT;
        emit ShipmentInTransit(_sender,_receiver,shipment.pickupTime,shipment.distance,shipment.price);
    }
    function completeShipment(address _sender,address _receiver,uint _index)public{
        Shipment storage shipment=shipments[_sender][_index];
        TypeShipment storage typeShipment =typeShipments[_index];
        require(shipment.receiver==_receiver,'receiver not valise');
        require(shipment.status==ShipmentStatus.IN_TRANSIT,"already delvered");
        require(!shipment.isPaid,"sshipement already paid");
        shipment.status=ShipmentStatus.DELIVERED;
        typeShipment.status=ShipmentStatus.DELIVERED;
        shipment.deliveryTime=block.timestamp;
        typeShipment.deliveryTime=block.timestamp;
        shipment.isPaid=true;
        uint256 amount=shipment.price;
        payable(shipment.sender).transfer(amount);
        typeShipment.isPaid=true;
        emit ShipmentDelivered(_sender,_receiver,shipment.deliveryTime);
        emit Shipmentpaid(_sender,_receiver,amount);

    }
    function getShipment(address _sender,uint256 _index)public view returns(
         address ,
        address ,
        uint256 ,
        uint256 ,
        uint256 ,
        uint256 ,
        ShipmentStatus ,
        bool ){
            Shipment memory shipment =shipments[_sender][_index];
        return (shipment.sender,shipment.receiver,shipment.pickupTime,shipment.deliveryTime,shipment.price,shipment.distance,shipment.status,shipment.isPaid);
    }
    function getShipmentCount(address _sender)public view returns(uint256){
    
      return shipments[_sender].length;
    }
    function getAllTransactions ()public view returns(TypeShipment[]  memory) {
        return typeShipments;
    }


}

