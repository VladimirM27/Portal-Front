import React, {useEffect, useState} from 'react';
import ProfilesTableInfo from './ProfilesTableInfo'
import {orders, users} from "../http";
import ModalEditProfile from "./ModalEditProfile";

const ProfilesTable = ({active,setActive}) => {

	const [user, setUser] = useState({
		lastName: "aa",
		firstName: "",
		email: "",
		role: "",
		addit:"",
		status: ""
	})

	const [usersList, setUsersList] = useState([])

	console.log(usersList)
	useEffect( () => {
		const getUsers = async () => {
			const userList = await users();
			for (let i =0; i < userList.length; i++) {
				userList[i] = {...userList[i], firstName: userList[i].name, email: userList[i].email, role: userList[i].authority, addit: userList[i].note }
			}
			setUsersList(userList)
		}
		getUsers()
	},[])

  return (
	<div className='storage-table'>
		<ModalEditProfile active={active} setActive={setActive} setUser={setUser} user={user}/>
		<div className='storage-table-header'>
			<span>Name</span>
			<span>Email</span>
			<span>Role</span>
			<span>Additionally</span>
		</div>
        {usersList.map((user,index) =>
			<ProfilesTableInfo user={user} setUser={setUser} active={active} setActive={setActive} key={index}/>
		)}
	</div>
  )
}

export default ProfilesTable;