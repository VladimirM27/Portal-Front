import React from 'react';
import ProfilesTableInfo from './ProfilesTableInfo'
const ProfilesTable = () => {
	const trArr = [1,2,3,4,5,6,7,8,9,10];

  return (
	<div className='storage-table'>
		<div className='storage-table-header'>
			<span>First Name</span>
			<span>Last Name</span>
			<span>Email</span>
			<span>Role</span>
			<span>Additionally</span>
			<span>Status</span>
		</div>
        {trArr.map((trItem,index) => 
			<ProfilesTableInfo key={index}/>
		)}
	</div>
  )
}

export default ProfilesTable;