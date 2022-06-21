import { useEffect, useState } from "react";
import MovieForm from "../components/FormMovie/FormMovie.component";
import useConsumerReducer from "../router/consumer";

const CreateMovieForm = () => {
    const [userError, setUserError] = useState(undefined);
    const [consumerResult, consume] = useConsumerReducer();

    const OnSubmit = async (props) => {
        await consume({consumer:"MovieConsumer",consumerAction:"CreateMovie",variables:{movie:props}});
    }
    useEffect(() => {
        setUserError(undefined)
     }, [])
     useEffect(() => {
        if (consumerResult!==null) {
           console.log(consumerResult);           
        }
     }, [consumerResult])
    return <MovieForm action={OnSubmit}/>
}

export default CreateMovieForm