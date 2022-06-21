import { MovieQueryModel } from "../model/queryModels"
import Productor from "../productor/fetch/fetch.productor"

const MovieConsumer = {
    GetAllMovies: () =>{
        return new Promise((resolve,reject)=>{
            try {
                const result = Productor({query:MovieQueryModel.GET_ALL_MOVIES})
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    },
    CreateMovie: (movieProps) =>{
        return new Promise((resolve,reject)=>{
            try {
                const {userData, movie} = movieProps
                const result = Productor({type:"POST",query:MovieQueryModel.CREATE_MOVIE,token:userData.token,data:{movie:movie}})
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    },
    UpdateMovie: (movieProps) =>{
        return new Promise((resolve,reject)=>{
            try {
                const {userData, movie} = movieProps
                const result = Productor({type:"PUT",query:MovieQueryModel.UPDATE_MOVIE,token:userData.token,data:{movie:movie}})
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    },
    DeleteMovie: (movieProps) =>{
        return new Promise((resolve,reject)=>{
            try {
                const {userData, movie} = movieProps
                const result = Productor({type:"DELETE",query:MovieQueryModel.DELETE_MOVIE,token:userData.token,data:{movie:movie}})
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    },
    ReserveMovie: (movieProps) =>{
        return new Promise((resolve,reject)=>{
            try {
                const {userData, movie} = movieProps
                const result = Productor({type:"PUT",query:MovieQueryModel.RESERVE_MOVIE,token:userData.token,data:{movie:movie}})
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    },
    UnreserveMovie: (movieProps) =>{
        return new Promise((resolve,reject)=>{
            try {
                const {userData, movie} = movieProps
                const result = Productor({type:"PUT",query:MovieQueryModel.UNRESERVE_MOVIE,token:userData.token,data:{movie:movie}})
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    }
}

export default MovieConsumer