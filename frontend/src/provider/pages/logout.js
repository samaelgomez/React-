import { useUserData } from '../utils/auth.context'
import { useEffect } from 'react'


const Logout = () => {
   const {dispatch} = useUserData()
   useEffect(()=>{
      dispatch({type:"delete"})
   },[])

   return(
      <>
       Logout
      </>
   );
}

export default Logout;