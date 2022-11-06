import React,{useState} from "react";
import 'normalize.css';
import './styles/index.scss';
import ModelAuthorization from "./component/ModelAuthorization";
import StoragePage from "./component/StoragePage";

function App() {
  const admin = {login:'admin', password:'admin'};
  const [authorizat,setAuthorize] = useState(false);
  const isAuthorizetion = (e) => {
    setAuthorize(!authorizat);
  }
  return (
    <div className="App">
      {authorizat ? 
        <StoragePage isAuthorizetion={isAuthorizetion}/>  : 
        <ModelAuthorization isAuthorizetion={isAuthorizetion} admin={admin}/>}
    </div>
  );
}

export default App;
