import React from 'react';
const IngredientInfoActive = ({change,setSupleModalActive}) => {
  const isUnfocus = (e) => {
	change();
  }
  const addSuple =(e) => {
	e.preventDefault();
	setSupleModalActive(true);
  }
  return (
	<div 
		onClick={isUnfocus}
		className='ingredient-detail-content'>
		<div className="ingredient-detail-PFC">
			<svg width="35" height="35" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21.1889 6.22315C21.1889 6.8426 21.691 7.34476 22.3105 7.34476C22.9299 7.34476 23.4321 6.8426 23.4321 6.22315V2.1216C23.4321 1.50216 22.9299 1 22.3105 1C21.691 1 21.1889 1.50216 21.1889 2.1216V6.22315Z" fill="white"/>
			<path d="M31.2833 6.30286C31.7213 5.86485 31.7213 5.15469 31.2833 4.71667C30.8453 4.27866 30.1352 4.27866 29.6971 4.71667L26.7969 7.6169C26.3589 8.05492 26.3589 8.76508 26.7969 9.20309C27.2349 9.6411 27.9451 9.64111 28.3831 9.20309L31.2833 6.30286Z" fill="white"/>
			<path d="M16.2379 9.20309C16.6759 9.64111 17.386 9.64111 17.824 9.20309C18.2621 8.76508 18.2621 8.05492 17.824 7.61691L14.9238 4.71667C14.4858 4.27866 13.7756 4.27866 13.3376 4.71667C12.8996 5.15469 12.8996 5.86485 13.3376 6.30286L16.2379 9.20309Z" fill="white"/>
			<path d="M14.8441 14.8111C15.4636 14.8111 15.9657 14.309 15.9657 13.6895C15.9657 13.0701 15.4636 12.5679 14.8441 12.5679H10.7426C10.1231 12.5679 9.62095 13.0701 9.62095 13.6895C9.62095 14.309 10.1231 14.8111 10.7426 14.8111H14.8441Z" fill="white"/>
			<path d="M33.8784 14.8111C34.4978 14.8111 35 14.309 35 13.6895C35 13.0701 34.4978 12.5679 33.8784 12.5679H29.7768C29.1574 12.5679 28.6552 13.0701 28.6552 13.6895C28.6552 14.309 29.1574 14.8111 29.7768 14.8111H33.8784Z" fill="white"/>
			<path d="M29.6971 22.6624C30.1351 23.1004 30.8453 23.1004 31.2833 22.6624C31.7213 22.2243 31.7213 21.5142 31.2833 21.0762L28.3831 18.1759C27.9451 17.7379 27.2349 17.7379 26.7969 18.1759C26.3589 18.6139 26.3589 19.3241 26.7969 19.7621L29.6971 22.6624Z" fill="white"/>
			<path d="M21.1889 25.2574C21.1889 25.8769 21.691 26.379 22.3105 26.379C22.9299 26.379 23.4321 25.8769 23.4321 25.2574V21.1559C23.4321 20.5364 22.9299 20.0343 22.3105 20.0343C21.691 20.0343 21.1889 20.5364 21.1889 21.1559V25.2574Z" fill="white"/>
			<path d="M25.3468 13.8256C25.7848 13.3876 25.7848 12.6774 25.3468 12.2394L23.7606 10.6532C23.3226 10.2152 22.6125 10.2152 22.1744 10.6532L19.2742 13.5534C18.8362 13.9914 18.8362 14.7016 19.2742 15.1396L20.8604 16.7258C21.2984 17.1638 22.0086 17.1638 22.4466 16.7258L25.3468 13.8256Z" fill="white"/>
			<path d="M18.6172 20.5552C19.0552 20.1172 19.0552 19.407 18.6172 18.969L17.031 17.3828C16.593 16.9448 15.8828 16.9448 15.4448 17.3828L1.32851 31.4991C0.890496 31.9371 0.890497 32.6473 1.32851 33.0853L2.9147 34.6715C3.35272 35.1095 4.06288 35.1095 4.50089 34.6715L18.6172 20.5552Z" fill="white"/>
			<path d="M21.1889 6.22315C21.1889 6.8426 21.691 7.34476 22.3105 7.34476C22.9299 7.34476 23.4321 6.8426 23.4321 6.22315V2.1216C23.4321 1.50216 22.9299 1 22.3105 1C21.691 1 21.1889 1.50216 21.1889 2.1216V6.22315Z" stroke="#8F8F8F"/>
			<path d="M31.2833 6.30286C31.7213 5.86485 31.7213 5.15469 31.2833 4.71667C30.8453 4.27866 30.1352 4.27866 29.6971 4.71667L26.7969 7.6169C26.3589 8.05492 26.3589 8.76508 26.7969 9.20309C27.2349 9.6411 27.9451 9.64111 28.3831 9.20309L31.2833 6.30286Z" stroke="#8F8F8F"/>
			<path d="M16.2379 9.20309C16.6759 9.64111 17.386 9.64111 17.824 9.20309C18.2621 8.76508 18.2621 8.05492 17.824 7.61691L14.9238 4.71667C14.4858 4.27866 13.7756 4.27866 13.3376 4.71667C12.8996 5.15469 12.8996 5.86485 13.3376 6.30286L16.2379 9.20309Z" stroke="#8F8F8F"/>
			<path d="M14.8441 14.8111C15.4636 14.8111 15.9657 14.309 15.9657 13.6895C15.9657 13.0701 15.4636 12.5679 14.8441 12.5679H10.7426C10.1231 12.5679 9.62095 13.0701 9.62095 13.6895C9.62095 14.309 10.1231 14.8111 10.7426 14.8111H14.8441Z" stroke="#8F8F8F"/>
			<path d="M33.8784 14.8111C34.4978 14.8111 35 14.309 35 13.6895C35 13.0701 34.4978 12.5679 33.8784 12.5679H29.7768C29.1574 12.5679 28.6552 13.0701 28.6552 13.6895C28.6552 14.309 29.1574 14.8111 29.7768 14.8111H33.8784Z" stroke="#8F8F8F"/>
			<path d="M29.6971 22.6624C30.1351 23.1004 30.8453 23.1004 31.2833 22.6624C31.7213 22.2243 31.7213 21.5142 31.2833 21.0762L28.3831 18.1759C27.9451 17.7379 27.2349 17.7379 26.7969 18.1759C26.3589 18.6139 26.3589 19.3241 26.7969 19.7621L29.6971 22.6624Z" stroke="#8F8F8F"/>
			<path d="M21.1889 25.2574C21.1889 25.8769 21.691 26.379 22.3105 26.379C22.9299 26.379 23.4321 25.8769 23.4321 25.2574V21.1559C23.4321 20.5364 22.9299 20.0343 22.3105 20.0343C21.691 20.0343 21.1889 20.5364 21.1889 21.1559V25.2574Z" stroke="#8F8F8F"/>
			<path d="M25.3468 13.8256C25.7848 13.3876 25.7848 12.6774 25.3468 12.2394L23.7606 10.6532C23.3226 10.2152 22.6125 10.2152 22.1744 10.6532L19.2742 13.5534C18.8362 13.9914 18.8362 14.7016 19.2742 15.1396L20.8604 16.7258C21.2984 17.1638 22.0086 17.1638 22.4466 16.7258L25.3468 13.8256Z" stroke="#8F8F8F"/>
			<path d="M18.6172 20.5552C19.0552 20.1172 19.0552 19.407 18.6172 18.969L17.031 17.3828C16.593 16.9448 15.8828 16.9448 15.4448 17.3828L1.32851 31.4991C0.890496 31.9371 0.890497 32.6473 1.32851 33.0853L2.9147 34.6715C3.35272 35.1095 4.06288 35.1095 4.50089 34.6715L18.6172 20.5552Z" stroke="#8F8F8F"/>
			</svg>
			<ul className="PFC-list">
				<li className="PFC-list-item">
					Proteins: 15.6g
				</li>
				<li className="PFC-list-item">
					Carbohydrates: 20.1g
				</li>
				<li className="PFC-list-item">
					Fats:12.9g
				</li>
			</ul>
		</div>
		<div className="ingredient-detail-note">
			<h3 className="ingredient-detail-note_title">Notes</h3>
		 	<textarea className='ingredient-detail-note_area' disabled></textarea>
		</div>
		<div className="ingredient-detail-btn">
			<button className='detail-btn_select ingredient-btn'>Select photo</button>
			<button className='detail-btn_choose ingredient-btn'>Choose ingredients</button>
		</div>
		<div className="ingredient-detail-supply">
			<table className='supple-table'>
				<caption>Supple</caption>
				<thead>
					<tr>
						<th>Num</th>
						<th>Amount</th>
						<th>Remainded</th>
						<th>Cost/unit</th>
						<th>Expiration</th>
					</tr>
				</thead>
				<tbody>
			    	<tr>
						<td>№1789345:</td>
						<td>300</td>
						<td>24</td>
						<td>22.80</td>
						<td>24.11.2022</td>
					</tr>
				</tbody>
				<tbody>
				    <tr>
						<td>№1789345:</td>
						<td>300</td>
						<td>24</td>
						<td>22.80</td>
						<td>24.11.2022</td>
					</tr>
				</tbody>
				<tbody>
				    <tr>
						<td>№1789345:</td>
						<td>300</td>
						<td>24</td>
						<td>22.80</td>
						<td>24.11.2022</td>
					</tr>
				</tbody>
			</table>
			<button className='supple-btn'
				onClick={addSuple}>
				<svg className='supple-btn_icon' width="13" height="13" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.12152 0.0714264C9.74046 0.0714264 10.2422 0.487162 10.2422 0.999998V6.57143H16.9663C17.5853 6.57143 18.087 6.98716 18.087 7.5C18.087 8.01283 17.5853 8.42857 16.9663 8.42857H10.2422V14C10.2422 14.5128 9.74046 14.9286 9.12152 14.9286C8.50258 14.9286 8.00083 14.5128 8.00083 14V8.42857H1.2767C0.657756 8.42857 0.156006 8.01283 0.156006 7.5C0.156006 6.98716 0.657756 6.57143 1.2767 6.57143H8.00083V0.999998C8.00083 0.487162 8.50258 0.0714264 9.12152 0.0714264Z" fill="black"/>
				</svg>
				<span className='supple-btn_text'> Add supple</span>
			</button>
		</div>
	</div>
  )
}

export default IngredientInfoActive