import { Navigate } from "react-router-dom";
import Form from '../components/FormRegister/formregister.component'
import { useEffect, useState } from 'react'

import { useUserData } from '../utils/auth.context'
import useConsumerReducer from '../router/consumer'

const Register = () => {
   const {dispatch} = useUserData()
   const [consumerResult, consume] = useConsumerReducer();
   useEffect(() => {
      if (consumerResult!==null) {
         const {email,password,token,error,errorMsg} = consumerResult.result
         if (error) {
            throw new Error(errorMsg)
         } else {
            window.location.href = "/login";
         }
         
      }
   }, [consumerResult])

   const onSubmit = async(props) => {
      await consume({consumer:"UserConsumer",consumerAction:"CreateUser",variables:{user:props}});
   }

   return(
      <>
        <Form action={onSubmit}/>
      </>
   );
}

export default Register;