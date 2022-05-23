import { useEffect, useState } from "react";
import { MovieConsumer,UserConsumer } from "../../core/consumer";
import { useUserData } from "../utils/auth.context";
const ConsumerList = {
        MovieConsumer:MovieConsumer,
        UserConsumer:UserConsumer
    }
async function consumerReducer(state, action,userData) {
    try {
        const {consumer,consumerAction,variables} = action
        const consumerVariables = consumerAction!=="UserLogin" ? {userData:userData,...variables} : variables
        const result = await ConsumerList[consumer][consumerAction](consumerVariables)
        return {...state, result:result}
    } catch (error) {
        console.error(error)
        return state
    }
}

function useConsumerReducer() {
    const [consumerResult, setResult] = useState(null);
    const {state} = useUserData()
    async function consume(action) {
      const nextState = await consumerReducer(consumerResult, action, state);
      setResult(nextState);
    }
  
    return [consumerResult, consume];
}


export default useConsumerReducer