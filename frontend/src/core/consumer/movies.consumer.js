import { MovieQueryModel } from "../model/queryModels"
import Productor from "../productor/fetch/fetch.productor"

const MovieConsumer = {
    GetAllMovies: () =>{
        return new Promise((resolve,reject)=>{
            try {
                const result = Productor({query:MovieQueryModel.GET_ALL_MOVIES})
                console.log({from:"GetAllMovies",result:result});
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    },
    CreateMovie: (movieProps) =>{
        return new Promise((resolve,reject)=>{
            try {
                console.log(movieProps);
                const {userData, movie} = movieProps
                const result = Productor({type:"POST",query:MovieQueryModel.CREATE_MOVIE,token:userData.token,data:{movie:movie}})
                console.log({from:"CreateMovie",result:result});
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    },
    UpdateMovie: (movieProps) =>{
        return new Promise((resolve,reject)=>{
            try {
                console.log(movieProps);
                const {userData, movie} = movieProps
                const result = Productor({type:"PUT",query:MovieQueryModel.UPDATE_MOVIE,token:userData.token,data:{movie:movie}})
                console.log({from:"UpdateMovie",result:result});
                resolve(result)
            } catch (error) {
                resolve({error:true, errorMsg:error})
            }
       })
    }
}

export default MovieConsumer