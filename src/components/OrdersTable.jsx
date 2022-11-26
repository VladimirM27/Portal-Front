import React, {useEffect, useState} from 'react';
import IngredientInfo from "./IngredientInfo";
import ModalOrder from "./ModalOrder";
import OrderTableInfo from './OrderTableInfo';
import {orders} from "../http";

const OrdersTable = ({active,setActive}) => {
    const [orderInfo,setOrderInfo] = useState([{
        cost:-1,
        status:'Completed',
        time:'0m',
        address:'',
        products:[]}]);

    useEffect( () => {
        const getOrders = async () => {
            const ordersList = await orders();
            for (let i =0; i < ordersList.length; i++) {
                ordersList[i] = {...ordersList[i], address: `${ordersList[i].address.city}, ${ordersList[i].address.street} ${ordersList[i].address.house}, ${ordersList[i].address.apartment}`, customer: ordersList[i].customer.email }
            }
            setOrderInfo(ordersList)
        }
        getOrders()
    },[])

    const [order, setOrder] = useState(orderInfo[0])
    return (
        <div className='storage-table'>
            <ModalOrder active={active} setActive={setActive} orderInfo={order} setOrderInfo={setOrderInfo}/>
            <div className='storage-table-header'>
                <span>Profile</span>
                <span>Cost</span>
                <span>Time-Date</span>
                <span>Time</span>
                <span>Status</span>
            </div>
            {orderInfo.map((trItem,index) =>
                <OrderTableInfo setOrder={setOrder} active={active} setActive={setActive} orderInfo={trItem} setOrderInfo={setOrderInfo}/>
            )}
        </div>
    );
};

export default OrdersTable;