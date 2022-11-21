import React,{useState} from 'react';
import {Navigate} from 'react-router-dom'
import {login,ACCESS_TOKEN} from '../http'

const LoginPage = ({authenticated,isAuthorizetion}) => {
    const [userLoginState,setUserLoginState] = useState({email:'',password:''});
    if(authenticated) {
        return <Navigate to="/store"/>
    }
    const loginUser = e => {
        e.preventDefault();
        const loginRequest = {...userLoginState};
        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        }).catch(error => {
            alert((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
        isAuthorizetion();
        setUserLoginState({email:'',password:''});
    }
    return (
      <div className="outer-wrapper center">
        <div className="modal-authorization">
          <form className="authorization-form" onSubmit={loginUser}>
            <h2 className="authorization-form_title">Welcome to Portal</h2>
            <div className="authorization-form_input">
              <input type='email' 
                value={userLoginState.email} 
                className="email-input" 
                onChange={e => setUserLoginState({...userLoginState,email:e.target.value})}
                placeholder="email"/>
              <input type='password' 
                value={userLoginState.password}
                className="password-input"
                onChange={e => setUserLoginState({...userLoginState,password:e.target.value})}
                placeholder="password"/>
            </div>
            <button
              type='submit'
              className="authorization-form_btn"
            >login
            </button>
          </form>
        </div>
      </div>
    )
}

export default LoginPage