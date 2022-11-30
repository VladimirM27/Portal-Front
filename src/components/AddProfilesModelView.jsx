import React from 'react';
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
    return (
        <div className={`modal ${active ? 'active' : ''}`}
        onClick={changeActive}>
        <div className={`modal-content ${active ? 'active' : ''} profiles-add-modal`}
        onClick={e => e.stopPropagation()}>
            <form className='profiles-form'>
                <div className="form-input profiles-form-input">
                    <div className="form-input-name input-add">
                        <span className="form-input_title">First Name</span>
                        <input type='text'/>
                    </div>
                    <div className="form-input-type input-add">
                        <span className="form-input_title input-add">Last Name</span>
                        <input type='text'/>
                    </div>
                    <div className="form-input-vendor input-add">
                        <span className="form-input_title">Email</span>
                        <input type='text'/>
                    </div>
                    <div className="form-input-vendor input-add">
                        <span className="form-input_title input-add">Role</span>
                        <select className="form-input_type">
                            <option></option>
                        </select>
                    </div>
                    <div className="form-input-vendor input-add">
                        <span className="form-input_title">Password</span>
                        <input type='text'/>
                    </div>
                </div>
                <div className='form-note-btn'>
                    <button onClick={changeActive}>Cancel</button>
                    <button onClick={addItem}>Add</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default AddProfilesModelView