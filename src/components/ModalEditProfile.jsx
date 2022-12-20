import React, {useState} from 'react';
import IngredientInfo from "./IngredientInfo";
import ProductTable from "./ProductTable";

const ModalEditProfile = ({active, setActive, user, setUser}) => {
    const changeActive =(e) => {
        e.preventDefault();
        setActive(false);
    }
    const addItem = (e) => {
        e.preventDefault();
        alert('Item add');
        setActive(false);
    }


    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={changeActive}>
            <div className={`modal-content ${active ? 'active' : ''} order-modal-order`} onClick={e => e.stopPropagation()}>
                <form className='order-form'>
                    <div className="form-input">
                        <div className="form-input-vendor input-add">
                            <span className="form-input_title">First Name</span>
                            <input className='input-add_wide'  type='text' value={user.firstName}/>
                        </div>

                        <div className="form-input-capacity input-add">
                            <span className="form-input_title">Email</span>
                            <input className='input-add_wide' type='text' value={user.email}/>
                        </div>
                        <div className="form-input-type input-add">
                            <span className="form-input_title input-add">Status</span>
                            <select className="form-input_type">
                                <option selected={user.status==='EDIT' ? true : false}>EDIT</option>
                                <option selected={user.status==='Dont know' ? true : false}>Dont know</option>
                                <option selected={user.status==='?' ? true : false}>?</option>
                                <option selected={user.status==='status' ? true : false}>status</option>
                            </select>
                        </div>
                        <div className="form-input-capacity input-add">
                            <span className="form-input_title">Role</span>
                            <select className="form-input_type">
                                <option selected={user.role==='manager' ? true : false}>manager</option>
                                <option selected={user.role==='user' ? true : false}>user</option>
                            </select>
                        </div>
                        <div className="form-input-capacity input-add">
                            <span className="form-input_title">Additionally</span>
                            <input className='input-add_wide' type='text' value={user.addit}/>
                        </div>
                    </div>
                    <div style={{marginTop: "40px"}} className='form-note-btn'>
                        <button style={{cursor:"pointer"}} onClick={changeActive}>Cancel</button>
                        <button style={{cursor:"pointer"}} onClick={addItem}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEditProfile;