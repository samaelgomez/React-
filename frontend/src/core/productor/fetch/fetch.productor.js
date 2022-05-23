import Queries from "./queries/queries"

async function apiAgent(url = '', data = {},type="GET", token = undefined) {
  // Opciones por defecto estan marcadas con un *
  const Body = type === "GET" ? {} : {body: JSON.stringify(data)}
  const Headers = token ? {headers:{'Authorization': 'Token ' + token, 'Content-Type': 'application/json'}}:{headers:{'Content-Type': 'application/json'}}
  const response = await fetch(url, {
    method: type, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit

    ...Headers, 
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    ...Body
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const Productor = async (props) =>{
    const {query,data,type,token} = props
    const url = Queries[query]
    const result = await apiAgent(url,data,type,token)
    if(result.error) throw result.errorMsg
    return result
}

export default Productor

/* const agent ={
    query: (variables,query) =>{
        return client.query({
          query: query,
          fetchPolicy: 'network-only',
          variables: variables,
        })
    },
    mutation: (variables,query) =>{
      return client.mutate({
        mutation: query,
        variables: variables,
      })
    },
  } */
