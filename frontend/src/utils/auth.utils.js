import api from "./api"

const authUtils = {
    setToken: (userInfo) => {
        localStorage.setItem("token", userInfo)
    },

    getToken: () => {
        localStorage.getItem("token")
    },

    login: async (userInfo) => {
        const response = await api.postFetch("http://localhost:8000/api/users/login", "Incorrect input data", userInfo)
        console.log(response)
    }
}

export default authUtils