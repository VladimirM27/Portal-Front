import React from 'react';
import IngredientInfo from "./IngredientInfo";
import ProductTable from "./ProductTable";

const ModalOrder = ({active, setActive,orderInfo, setOrderInfo}) => {
    const changeActive =(e) => {
        e.preventDefault();
        setActive(false);
    }
    const addItem = (e) => {
        e.preventDefault();
        alert('Item add');
        setActive(false);
    }

    const getCost = () =>
    {
        if (orderInfo.products === undefined)
            return;
        var initialValue = 0;
        var sum = orderInfo.products.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.product.price * currentValue.amount;
        }, initialValue)
        return sum;
    }

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

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={changeActive}>
            <div className={`modal-content ${active ? 'active' : ''} order-modal-order`} onClick={e => e.stopPropagation()}>
            <form className='order-form'>
                    <div className="form-input">
                        <div className="form-input-name input-add">
                            <span className="form-input_title">Cost</span>
                            <input type='number' value={getCost()}/>
                        </div>
                        <div className="form-input-type input-add">
                            <span className="form-input_title input-add">Status</span>
                            <select className="form-input_type">
                                <option selected={orderInfo.status==='Completed' ? true : false}>Completed</option>
                                <option selected={orderInfo.status==='Preparing' ? true : false}>Preparing</option>
                                <option selected={orderInfo.status==='On the way' ? true : false}>On the way</option>
                                <option selected={orderInfo.status==='Declined' ? true : false}>Declined</option>
                            </select>
                        </div>
                        <div className="form-input-vendor input-add">
                            <span className="form-input_title">Time</span>
                            <input type='text' value={countTime(orderInfo.orderTime)}/>
                        </div>
                        <div className="form-input-capacity input-add">
                            <span className="form-input_title">Address</span>
                            <input className='input-add_wide' type='text' value={orderInfo.address}/>
                        </div>
                    </div>
                    <div className="form-note input-add">
                        <span className="form-input_title">Product</span>
                        <ProductTable products={orderInfo.products}/>
                    </div>
                    <div className='form-note-btn'>
                        <button style={{cursor:"pointer"}} onClick={changeActive}>Cancel</button>
                        <button style={{cursor:"pointer"}} onClick={addItem}>Ok</button>
                    </div>
            </form>
            </div>
        </div>
    );
};

export default ModalOrder;