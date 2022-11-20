import React, {useState} from 'react';
import IngredientInfo from "./IngredientInfo";
import ModalOrder from "./ModalOrder";

const OrdersTable = () => {
    const trArr = [1,2,3,4,5,6,7,8,9,10];
    const [modalActive,setModalActive] = useState(false);
    const [cost,setCost] = useState(0);
    const [status,setStatus] = useState('Completed');
    const [time, setTime] = useState('0m');
    const [address, setAddress] = useState('');
    const [product, setProduct] = useState([]);

    return (
        <div className='storage-table'>
            <ModalOrder isActive={modalActive} setIsActive={setModalActive} cost={cost} setCost={setCost} status={status} setStatus={setStatus} time={time} setTime={setTime} address={address} setAddress={setAddress} product={product} setProduct={setProduct}/>
            <div className='storage-table-header'>
                <span>Profile</span>
                <span>Cost</span>
                <span>Time-Date</span>
                <span>Time</span>
                <span>Status</span>
            </div>
            {trArr.map((trItem,index) =>
                <div
                     onClick={() => {
                         console.log("here")
                         setModalActive(true)
                         setCost(2)
                         setStatus('Preparing')
                         setTime(2)
                         setAddress(2)
                     }}
                     className='ingredient-info'
                >
                    <span className='order-profile'>Test</span>
                    <span className='order-cost'>420$</span>
                    <span className='order-timedate'>12-11-2022 12:34:33</span>
                    <span className='order-time'>40m</span>
                    <div className="order-info_state">
                        <div className='order-status'>
                            Completed
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrdersTable;