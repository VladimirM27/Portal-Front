import React,{useState} from "react";
import 'normalize.css';
import './styles/index.scss';
import ModelAuthorization from "./component/ModelAuthorization";
import StoragePage from "./pages/StoragePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";

function App() {
  const admin = {login:'admin', password:'admin'};
  const [authorizat,setAuthorize] = useState(false);
  const isAuthorizetion = (e) => {
    setAuthorize(!authorizat);
  }
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(<div className="App">
            {authorizat ?
                <StoragePage isAuthorizetion={isAuthorizetion}/>  :
                <ModelAuthorization isAuthorizetion={isAuthorizetion} admin={admin}/>}
          </div>)}/>
          <Route path="/orders" element={<OrdersPage/>}/>
          <Route path="/storage" element={<StoragePage/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
