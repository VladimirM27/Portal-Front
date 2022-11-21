import React,{useState} from 'react';
const OrderTableInfo = ({active,setActive,orderInfo,setOrderInfo}) => {
    return (
        <div
                     onClick={() => {
                         setActive(true)
                         setOrderInfo({...orderInfo,cost:2,status:'Preparing',time:2,address:2})
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
    )
}

export default OrderTableInfo