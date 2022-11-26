import React,{useState} from 'react';
const OrderTableInfo = ({active,setActive,orderInfo,setOrderInfo, setOrder}) => {

    const countTime = (datetime) => {
        const dt = new Date(datetime);
        const now = Date.now();
        const diffMilisec = now-dt;

        return msToTime(diffMilisec)
    }

    function msToTime(ms) {
        let seconds = (ms / 1000).toFixed(1);
        let minutes = (ms / (1000 * 60)).toFixed(1);
        let hours = (ms / (1000 * 60 * 60)).toFixed(1);
        let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
        if (seconds < 60) return seconds + " Sec";
        else if (minutes < 60) return minutes + " Min";
        else if (hours < 24) return hours + " Hrs";
        else return days + " Days"
    }

    const getClassColor = (status) => {
        if (status === "CREATING")
            return "beige-status"
        else if (status === "ON THE WAY")
            return "yellow-status"
        else if (status === "COMPLETED")
            return "green-status"
        else if (status === "DECLINED")
            return "red-status"
    }

    const getCost = () =>
    {
        var initialValue = 0;
        var sum = orderInfo.products.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.product.price * currentValue.amount;
        }, initialValue)
        return sum;
    }

    const getDate = (date) => {
        const dt = new Date(date)
        return dt.toLocaleString("en-US")
    }

    return (
        <div>
            {orderInfo.cost !== -1 ?
            <div
                onClick={() => {
                    console.log(orderInfo)
                    setOrder({...orderInfo})
                    setActive(true)
                }}
                className='ingredient-info'
            >
                <span className='order-profile'>{orderInfo.customer}</span>
                <span className='order-cost'>{getCost()}</span>
                <span className='order-timedate'>{getDate(orderInfo.orderTime)}</span>
                <span className='order-time'>{countTime(orderInfo.orderTime)}</span>
                <div className={`order-info_state`}>
                    <div className={`order-status ${getClassColor(orderInfo.status)}`}>
                        {orderInfo.status}
                    </div>
                </div>
            </div> : 'Loading...'}
        </div>

    )
}

export default OrderTableInfo