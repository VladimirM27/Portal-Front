import React, {useState} from 'react';
import IngredientInfo from "./IngredientInfo";
import ProductTable from "./ProductTable";
import {putUser} from "../http";

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


    const changeUser = async (e) => {
        e.preventDefault()
        const res = await putUser({name: user.firstName, email: user.email, authority: user.role === 'ROLE_MANAGER' ? 'MANAGER': user.role === 'USER' ? 'USER' : 'ADMIN', note: user.addit}, user.id)
        window.location.reload()
    }

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={changeActive}>
            <div className={`modal-content ${active ? 'active' : ''} order-modal-order`} onClick={e => e.stopPropagation()}>
                <form className='order-form' onSubmit={(e) => changeUser(e)}>
                    <div className="form-input">
                        <div className="form-input-vendor input-add">
                            <span className="form-input_title">First Name</span>
                            <input className='input-add_wide'  type='text' value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})}/>
                        </div>

                        <div className="form-input-capacity input-add">
                            <span className="form-input_title">Email</span>
                            <input className='input-add_wide' type='text' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                        </div>
                        <div className="form-input-capacity input-add">
                            <span className="form-input_title">Role</span>
                            <select className="form-input_type" onChange={(e) => {
                                setUser({...user, role: e.target.value === 'admin' ? 'ROLE_ADMIN' : e.target.value === 'user'? 'ROLE_USER' : 'ROLE_MANAGER'})
                                console.log(e.target.value)
                            }}>
                                <option selected={user.role==='ROLE_MANAGER' ? true : false}>manager</option>
                                <option selected={user.role==='ROLE_USER' ? true : false}>user</option>
                                <option selected={user.role==='ROLE_ADMIN' ? true : false}>admin</option>
                            </select>
                        </div>
                        <div className="form-input-capacity input-add">
                            <span className="form-input_title">Additionally</span>
                            <input className='input-add_wide' type='text' value={user.addit} onChange={(e) => setUser({...user, addit: e.target.value})}/>
                        </div>
                    </div>
                    <div style={{marginTop: "40px"}} className='form-note-btn'>
                        <button style={{cursor:"pointer"}} onClick={changeActive}>Cancel</button>
                        <button style={{cursor:"pointer"}} type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEditProfile;