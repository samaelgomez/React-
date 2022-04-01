import axios from "axios"

const api = {
    getFetch: async (url, errorMessage) => {
      const res = await fetch(url, {
        method: 'GET'
      })
      if (!res.ok)
        throw new Error(errorMessage)
      const JSONres = await res.json()
      return JSONres
    },

    postFetch: async (url, errorMessage, data) => {
      return axios.create({
        baseURL: "http://localhost:8000/api/users/login",
        headers: {
            "Content-type": "application/json",
        }
      });


      // return await fetch(url, {
      //   method:'POST',
      //   headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })


      // const res = await fetch(url, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ data })
      // })
      // if (!res.ok)
      //   throw new Error(errorMessage)
      // const JSONres = await res.json()
      // return JSONres
    }
}

export default api