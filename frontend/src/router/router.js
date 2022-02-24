import React, { lazy } from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'

const Home = lazy(() => import("../pages/Home/home"))
const Login = lazy(() => import("../pages/Login/login"))

const AppRouter = () =>{
    let isAuth = false;

    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path="/login" element = {isAuth ? <Navigate to="/"/> : <Login/>}/>   
        </Routes>
    )
}

export default AppRouter