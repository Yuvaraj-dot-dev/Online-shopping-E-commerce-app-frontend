/* eslint-disable no-undef */
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Card from "./Components/Main";
import Cart from "./Components/Cart";
import Carddetail from "./Components/Carddetails";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Main from "./Components/Main";
// import context from "./Components/Home"
// Import other components as needed

const  Routing= () => {
    return (
        <Routes>
            <Route element={<Main />} path='/' />
            <Route element={<Cart />} path='/Cart' />
            <Route element={<Carddetail />} path='/Carddetails/:name' />
            <Route element={<SignUp />} path='/Signup' />
            <Route element={<Login/>} path="/Login"/>
        </Routes>
    )
}

export default Routing;