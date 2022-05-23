import React from "react";
import { useUserData } from "../utils/auth.context";

const RolProvider = (props) =>{
    const {state} = useUserData()
    const {rolToBeEqual,children} = props
    const {admin} = state
    const rol = admin === undefined ? "unlogged" : admin
    return <>
       {rol === rolToBeEqual ? children :""}
    </>
}

export default RolProvider