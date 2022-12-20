import React,{useState} from 'react';
import Menu from '../components/Menu'
import ProfilesTable from '../components/ProfilesTable';
import AddModalVIew from '../components/AddModalVIew'
import AddSupleModalView from '../components/AddSupleModalView'
import IngredientTable from '../components/IngredientTable'
import AddProfilesModelView from '../components/AddProfilesModelView';

const ProfilesPage = ({isAuthorizetion}) => {
    const [modalActive,setModalActive] = useState(false);
	const [modalAddActive,setModalAddActive] = useState(false);

	const tf =(e) => {
	  e.preventDefault();
	}
  return (
    <div className='outer-wrapper main'>
		<Menu isAuthorizetion={isAuthorizetion} tf={tf} indexActive={2}/>
        <AddProfilesModelView active={modalAddActive} setActive={setModalAddActive}/>
        <div className='storage'>
			<h2 className="storage-title">Profiles</h2>
            <div className="storage-mod">
				<button
					className='storage-btn add_btn'
					onClick={() => setModalAddActive(true)}
				>
					<svg className='storage-mod_icon' width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.12152 0.0714264C9.74046 0.0714264 10.2422 0.487162 10.2422 0.999998V6.57143H16.9663C17.5853 6.57143 18.087 6.98716 18.087 7.5C18.087 8.01283 17.5853 8.42857 16.9663 8.42857H10.2422V14C10.2422 14.5128 9.74046 14.9286 9.12152 14.9286C8.50258 14.9286 8.00083 14.5128 8.00083 14V8.42857H1.2767C0.657756 8.42857 0.156006 8.01283 0.156006 7.5C0.156006 6.98716 0.657756 6.57143 1.2767 6.57143H8.00083V0.999998C8.00083 0.487162 8.50258 0.0714264 9.12152 0.0714264Z" fill="black"/>
					</svg>
					<span className='storage-btn_title'>Add</span>
				</button>
				<button
					className='storage-btn filter_btn'>
					<svg className='storage-mod_icon' width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.9961 20.3438C12.9961 19.8087 13.4705 19.375 14.0557 19.375H20.4131C20.9983 19.375 21.4727 19.8087 21.4727 20.3438C21.4727 20.8788 20.9983 21.3125 20.4131 21.3125H14.0557C13.4705 21.3125 12.9961 20.8788 12.9961 20.3438Z" fill="black"/>
					<path d="M8.75781 14.5312C8.75781 13.9962 9.2322 13.5625 9.81738 13.5625H24.6514C25.2366 13.5625 25.7109 13.9962 25.7109 14.5312C25.7109 15.0663 25.2366 15.5 24.6514 15.5H9.81738C9.2322 15.5 8.75781 15.0663 8.75781 14.5312Z" fill="black"/>
					<path d="M4.51953 8.71875C4.51953 8.18372 4.99392 7.75 5.5791 7.75H28.8896C29.4748 7.75 29.9492 8.18372 29.9492 8.71875C29.9492 9.25378 29.4748 9.6875 28.8896 9.6875H5.5791C4.99392 9.6875 4.51953 9.25378 4.51953 8.71875Z" fill="black"/>
					</svg>
					<span className='storage-btn_title'>Filter</span>
				</button>
				<button
					className='storage-btn delete_btn'>
					<svg className='storage-mod_icon' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.505588 1.23397C0.941099 0.810897 1.6472 0.810897 2.08271 1.23397L7.98533 6.96793L13.8879 1.23397C14.3234 0.810897 15.0296 0.810897 15.4651 1.23397C15.9006 1.65703 15.9006 2.34296 15.4651 2.76603L9.56245 8.5L15.4651 14.234C15.9006 14.657 15.9006 15.343 15.4651 15.766C15.0296 16.1891 14.3234 16.1891 13.8879 15.766L7.98533 10.0321L2.08271 15.766C1.6472 16.1891 0.941099 16.1891 0.505588 15.766C0.0700773 15.343 0.0700773 14.657 0.505588 14.234L6.4082 8.5L0.505588 2.76603C0.0700773 2.34296 0.0700773 1.65703 0.505588 1.23397Z" fill="black"/>
					</svg>
					<span className='storage-btn_title'>Delete</span>
				</button>
			</div>
			<ProfilesTable setActive={setModalActive} active={modalActive}/>
		</div>
    </div>
  )
}

export default ProfilesPage