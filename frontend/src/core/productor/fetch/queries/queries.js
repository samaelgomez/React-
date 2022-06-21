const urlBase = "http://localhost:8000/api/"
const Queries = {
    AUTH_LOGIN_QUERY:`${urlBase}users/login`,
    AUTH_REGISTER_QUERY:`${urlBase}users`,
    CREATE_MOVIE:`${urlBase}movies/create`,
    UPDATE_MOVIE:`${urlBase}movies/update`,
    DELETE_MOVIE:`${urlBase}movies/delete`,
    RESERVE_MOVIE:`${urlBase}movies/reserve`,
    UNRESERVE_MOVIE:`${urlBase}movies/unreserve`,
    GET_ALL_MOVIES:`${urlBase}movies`
}

export default Queries