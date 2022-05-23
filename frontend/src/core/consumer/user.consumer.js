import { ValidateLogin } from "../utils/validations.utils";
import Productor from "../productor/fetch/fetch.productor"
import {AuthQueryModel} from "../model/queryModels/"

const UserConsumer = {
    UserLogin:(userData) =>{
        return new Promise(async (resolve,reject)=>{
             try {
                 const result = await Productor({type:"POST", query:AuthQueryModel.AUTH_LOGIN_QUERY, data:userData})
                 resolve(result)
             } catch (error) {
                 resolve({error:true, errorMsg:error})
             }
        })
     
     },
     CreateUser:(userData)=>{
        return new Promise(async (resolve,reject)=>{
            try {
                const result = await Productor({type:"POST", query:AuthQueryModel.AUTH_REGISTER_QUERY, data:userData})
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
     }
}


export default UserConsumer