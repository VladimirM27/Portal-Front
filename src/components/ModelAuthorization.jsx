import React,{useState} from 'react';
const ModelAuthorization = ({isAuthorizetion,admin}) => {
  const [authorizeUser,setAuthorize] = useState({login:'',password:''});

  const checkPermission =(e) => {
    e.preventDefault();
    if(e.type === 'click' || e.key === 'Enter') {
      if(admin.login === authorizeUser.login && admin.password === authorizeUser.password) {
        isAuthorizetion();
      }
      setAuthorize({login:'',password:''});
    }
  }
  return (
    <div className="outer-wrapper center">
      <div className="modal-authorization">
        <form className="authorization-form">
          <h2 className="authorization-form_title">Welcome to Portal</h2>
          <div className="authorization-form_input">
            <input type='text' 
              value={authorizeUser.login} 
              className="email-input" 
              onChange={e => setAuthorize({...authorizeUser,login:e.target.value})}
              placeholder="email"/>
            <input type='password' 
              value={authorizeUser.password}
              className="password-input"
              onChange={e => setAuthorize({...authorizeUser,password:e.target.value})}
              placeholder="password"/>
          </div>
          <button
            onClick={checkPermission}
            onKeyDown={checkPermission}
            className="authorization-form_btn"
          >login
          </button>
        </form>
      </div>
    </div>
  )
}

export default ModelAuthorization