import React from 'react';
const ProfilesTableInfo = ({active, setActive, user, setUser}) => {

    return (
        <div className='ingredient-info' onClick={() => {
            console.log(user)
            setUser({...user, firstName: user.name==null ? "" : user.name, addit: user.addit==null ? "" : user.addit, email: user.email==null ? "" : user.email})
            setActive(true)
            console.log(user)
        }}>
            <span className='profiles-info_name'>{user.firstName}</span>
            <span className='profiles-info_email'>{user.email}</span>
            <span className='profiles-info_role'>{user.role}</span>
            <span className='profiles-info_additional'>{user.addit}</span>
        </div>
    )
}

export default ProfilesTableInfo