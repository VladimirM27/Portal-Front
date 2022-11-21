import React, {useState} from 'react';
import IngredientInfo from "./IngredientInfo";
import ModalOrder from "./ModalOrder";
import OrderTableInfo from './OrderTableInfo';

const OrdersTable = ({active,setActive}) => {
    const trArr = [1,2,3,4,5,6,7,8,9,10];
    const [orderInfo,setOrderInfo] = useState({
        cost:0,
        status:'Completed',
        time:'0m',
        address:'',
        product:[]});
    return (
        <div className='storage-table'>
            <ModalOrder active={active} setActive={setActive} orderInfo={orderInfo} setOrderInfo={setOrderInfo}/>
            <div className='storage-table-header'>
                <span>Profile</span>
                <span>Cost</span>
                <span>Time-Date</span>
                <span>Time</span>
                <span>Status</span>
            </div>
            {trArr.map((trItem,index) =>
                <OrderTableInfo active={active} setActive={setActive} orderInfo={orderInfo} setOrderInfo={setOrderInfo}/>
            )}
        </div>
    );
};

export default OrdersTable;