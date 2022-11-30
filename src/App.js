import './styles/index.scss'
import React, {useEffect, useState} from 'react'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import {getCurrentUser} from './http'
import {ACCESS_TOKEN} from './http'
import LoginPage from "./pages/LoginPage";
import StorePage from './pages/StorePage'
import OrdersPage from './pages/OrdersPage'
function App() {
  const [userState,setUserState] = useState({
    authenticated: false,
    currentUser: null,
    });
  useEffect(()=> {
    if(!localStorage.getItem('accessToken') && window.location.pathname !== '/login') {
      window.location.pathname = '/login'
    }
  },[])
  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
    .then(response => {
      setUserState({
        authenticated: false,
        currentUser: null,
        loading: true});
    }).catch(error => {
      setUserState({...userState,loading:false})
    })
  }
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setUserState({userState,authenticated: false,
      currentUser: null});
    alert("You're safely logged out!");
  }
  const isAuthorizetion =() => {
    setUserState({...userState,authenticated:!userState.authenticated});
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/login' element={<LoginPage authenticated={userState.authenticated} isAuthorizetion={isAuthorizetion}/>}></Route>

        <Route path='/store' element={<StorePage authenticated={userState.authenticated} isAuthorizetion={isAuthorizetion}/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
