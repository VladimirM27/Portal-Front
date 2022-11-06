import React from 'react';
import IngredientInfo from './IngredientInfo';
const IngredientTable = ({setSupleModalActive}) => {
	const trArr = [1,2,3,4,5,6,7,8,9,10];

  return (
	<div className='storage-table'>
		<div className='storage-table-header'>
			<span>Name</span>
			<span>Type</span>
			<span>Vendor</span>
			<span>Capacity</span>
			<span>Amount</span>
			<span>Cost</span>
			<span>Expiration date</span>
			<span>Status</span>
		</div>
		{trArr.map((trItem,index) => 
			<IngredientInfo setSupleModalActive={setSupleModalActive} key={index}/>
		)}
	</div>
  )
}

export default IngredientTable;