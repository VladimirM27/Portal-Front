import React from 'react';
const ProfilesTableInfo = ({active, setActive, user, setUser}) => {

    return (
        <div className='ingredient-info' onClick={() => {
            console.log(user)
            setUser({...user})
            setActive(true)
            console.log(user)
        }}>
          <span className='profiles-info_name'>{user.firstName}</span>
          <span className='profiles-info_last-name'>{user.lastName}</span>
          <span className='profiles-info_email'>{user.email}</span>
          <span className='profiles-info_role'>{user.role}</span>
          <span className='profiles-info_additional'>{user.addit}</span>
          <div className="profiles-info_status">
            <div className='ingredient-status'>
              EDIT
            </div>
          </div>
        </div>
    )
}

export default ProfilesTableInfo