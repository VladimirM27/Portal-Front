import React, {useEffect, useState} from 'react';
import {ACCESS_TOKEN, addUser, login} from "../http";
const AddProfilesModelView = ({active,setActive}) => {
    const changeActive =(e) => {
        e.preventDefault();
        setActive(false);
    }
    const addItem = (e) => {
        e.preventDefault();
        alert('Item add');
        setActive(false);
    }

    const [user, setUser] = useState({name:"", email:"", password: ""})
    const addManager = async (e) => {
        await addUser({name : user.name, email : user.email, password: user.password});
        setActive(false)
        // window.location.reload()
    }


    return (
        <div className={`modal ${active ? 'active' : ''}`}
        onClick={changeActive}>
        <div className={`modal-content ${active ? 'active' : ''} profiles-add-modal`}
        onClick={e => e.stopPropagation()}>
            <form className='profiles-form'>
                <div className="form-input profiles-form-input">
                    <div className="form-input-name input-add">
                        <span className="form-input_title">First Name</span>
                        <input type='text' value={user.name}  onChange={(e) => setUser({...user, name: e.target.value})}/>
                    </div>

                    <div className="form-input-vendor input-add">
                        <span className="form-input_title">Email</span>
                        <input type='text' value={user.email}  onChange={(e) => setUser({...user, email: e.target.value})}/>
                    </div>

                    <div className="form-input-vendor input-add">
                        <span className="form-input_title">Password</span>
                        <input type='text' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
                    </div>
                </div>
                <div className='form-note-btn'>
                    <button onClick={changeActive}>Cancel</button>
                    <button onClick={addManager}>Add</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default AddProfilesModelView