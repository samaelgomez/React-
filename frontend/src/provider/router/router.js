import { Route, Routes, Navigate } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register"
import MoviesTable from "../pages/movies";
import PanelAdmin from "../pages/paneladmin";


import { useUserData } from "../utils/auth.context";
import Logout from "../pages/logout";

const checkLogged = (state) => {
  if(!state.email){
    return <Navigate replace to={`/login`}/>
  }
}

const checkAdmin = (state) => {
  if(state.admin === false) {
    return <Navigate replace to={`/`}/>
  }
}

const Router = () => {
  const {state} = useUserData()
  return (
    <>
      <Routes>       
        <Route exact path='/' element={<MoviesTable /> }  />
        <Route exact path='/paneladmin' element={checkLogged(state) ?? checkAdmin(state) ?? <PanelAdmin /> }  />
        <Route exact path='/logout' element={state.email ? <Logout /> : <Navigate replace to={`/login`}/>}  />
        <Route exact path='/login' element={state.email ? <Navigate replace to={`/`}/> :<Login />}  />
        <Route exact path='/register' element={state.email ? <Navigate replace to={`/`}/> :<Register />}  />
      </Routes>
    </>
  );
};

export default Router;