import Form from '../components/FormLogin/formlogin.component'
import { useEffect, useState } from 'react'

import { useUserData } from '../utils/auth.context'
import useConsumerReducer from '../router/consumer'

const Login = () => {
   const {dispatch} = useUserData()
   const [userError, setUserError] = useState(undefined);
   const [consumerResult, consume] = useConsumerReducer();
   useEffect(() => {
      setUserError(undefined)
   }, [])
   useEffect(() => {
      if (consumerResult!==null) {
         const {email,password,token,error,errorMsg} = consumerResult.result
         if (error) {
            throw new Error(errorMsg)
         }
         dispatch({type:"set",userData:{email:email,password:password,token:token}})
      }
   }, [consumerResult])

   const onSubmit = async(props) => {
      await consume({consumer:"UserConsumer",consumerAction:"UserLogin",variables:{user:props}});
   }

   return(
      <>
        <Form action={onSubmit} error={userError}/>
      </>
   );
}

export default Login;