import React from 'react';
const ProfilesTableInfo = () => {
    return (
        <div className='ingredient-info'>
          <span className='profiles-info_name'>Test</span>
          <span className='profiles-info_last-name'>Test</span>
          <span className='profiles-info_email'>test@gmail.com</span>
          <span className='profiles-info_role'>manager</span>
          <span className='profiles-info_additional'>Additionally</span>
          <div className="profiles-info_status">
            <div className='ingredient-status'>
              EDIT
            </div>
          </div>
        </div>
    )
}

export default ProfilesTableInfo