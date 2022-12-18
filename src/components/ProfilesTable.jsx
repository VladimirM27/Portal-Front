import React, {useState} from 'react';
import ProfilesTableInfo from './ProfilesTableInfo'
import ModalEditProfile from "./ModalEditProfile";

const ProfilesTable = ({active,setActive}) => {
	const trArr = [1,2,3,4,5,6,7,8,9,10];

	const [user, setUser] = useState({
		lastName: "aa",
		firstName: "",
		email: "",
		role: "",
		addit:"",
		status: ""
	})

  return (
	<div className='storage-table'>
		<ModalEditProfile active={active} setActive={setActive} setUser={setUser} user={user}/>
		<div className='storage-table-header'>
			<span>First Name</span>
			<span>Last Name</span>
			<span>Email</span>
			<span>Role</span>
			<span>Additionally</span>
			<span>Status</span>
		</div>
        {trArr.map((trItem,index) => 
			<ProfilesTableInfo user={{...user, lastName: (Math.random() + 1).toString(36).substring(7)}} setUser={setUser} active={active} setActive={setActive} key={index}/>
		)}
	</div>
  )
}

export default ProfilesTable;