import React from 'react';
const AddModalVIew = ({active,setActive}) => {
		const changeActive =(e) => {
			e.preventDefault();
			setActive(false);
		}
		const addItem = (e) => {
			e.preventDefault();
			alert('Item add');
			setActive(false);
			console.log(1);
		}
    return (
      <div className={`modal ${active ? 'active' : ''}`}
					onClick={changeActive}>
				<div className={`modal-content ${active ? 'active' : ''} add-modal`}
				 onClick={e => e.stopPropagation()}>
				 	<form className='add-form'>
						<div className="form-input">
							<div className="form-input-name input-add">
								<span className="form-input_title">Name</span>
								<input type='text'/>
							</div>
							<div className="form-input-type input-add">
								<span className="form-input_title input-add">Type</span>
								<select className="form-input_type">
									<option></option>
								</select>
							</div>
							<div className="form-input-vendor input-add">
								<span className="form-input_title">Vendor</span>
								<input type='text'/>
							</div>
							<div className="form-input-capacity input-add">
							<span className="form-input_title">Capacity</span>
								<input type='text'/>
							</div>
						</div>
						<div className="form-note input-add">
							<span className="form-input_title">Note</span>
							<textarea className='form-input_area'>
							</textarea>
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

export default AddModalVIew