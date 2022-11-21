import React from 'react';
const AddSupleModalView = ({activeSuple,setSupleModalActive}) => {
    const changeActive =(e) => {
        e.preventDefault();
        setSupleModalActive(false);
    }
    const addItem = (e) => {
        e.preventDefault();
        alert('Item add');
        setSupleModalActive(false);
    }
    return (
        <div className={`modal ${activeSuple ? 'active' : ''}`}
					onClick={changeActive}>
				<div className={`modal-content ${activeSuple ? 'active' : ''} suple-modal`}
				 onClick={e => e.stopPropagation()}>
				 	<form className='add-form'>
            <div className="form-input">
							<div className="form-input-name input-add">
								<span className="form-input_title">Amount</span>
								<input type='text'/>
							</div>
							<div className="form-input-type input-add">
								<span className="form-input_title input-add">Cost/unit</span>
								<select className="form-input_type">
									<option></option>
								</select>
							</div>
							<div className="form-input-vendor input-add">
								<span className="form-input_title">Expiration</span>
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

export default AddSupleModalView