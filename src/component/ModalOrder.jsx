import React from 'react';
import IngredientInfo from "./IngredientInfo";
import ProductTable from "./ProductTable";

const ModalOrder = ({isActive, setIsActive, cost, setCost, status, setStatus, time, setTime, address, setAddress, product, setProduct}) => {

    return (
        <div className={isActive ? 'modal-order-wrapper' : 'modal-order-wrapper-hidden'} onClick={() => setIsActive(false)}>
            <div className={isActive? `modal__content active` : 'classes.modal__content'} onClick={e => e.stopPropagation()}>
                <form className='order-form'>
                    <div className="form-input">
                        <div className="form-input-name input-add">
                            <span className="form-input_title">Cost</span>
                            <input type='number' value={cost}/>
                        </div>
                        <div className="form-input-type input-add">
                            <span className="form-input_title input-add">Status</span>
                            <select className="form-input_type">
                                <option selected={status==='Completed' ? true : false}>Completed</option>
                                <option selected={status==='Preparing' ? true : false}>Preparing</option>
                                <option selected={status==='On the way' ? true : false}>On the way</option>
                                <option selected={status==='Declined' ? true : false}>Declined</option>
                            </select>
                        </div>
                        <div className="form-input-vendor input-add">
                            <span className="form-input_title">Time</span>
                            <input type='text' value={time}/>
                        </div>
                        <div className="form-input-capacity input-add width">
                            <span className="form-input_title">Address</span>
                            <input style={{width:'830px'}} type='text' value={address}/>
                        </div>
                    </div>
                    <div className="form-note input-add">
                        <span className="form-input_title">Product</span>
                        <ProductTable/>
                    </div>
                    <div className='form-note-btn'>
                        <button style={{cursor:"pointer"}} onClick={() => {setIsActive(false)}}>Cancel</button>
                        <button style={{cursor:"pointer"}} onClick={() => {}}>Ok</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalOrder;