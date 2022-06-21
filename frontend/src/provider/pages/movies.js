import { useEffect } from "react";
import MoviesTable from "../components/MoviesTable/moviesTable.component";

import useConsumerReducer from '../router/consumer'
import { useUserData } from "../utils/auth.context";



const Movies = ({userName}) => {
  const [consumerResult,consume]= useConsumerReducer()
  const {state} = useUserData()
  useEffect(() => {
    const variables = {userName:userName === undefined ? state.userName: userName}
    consume({consumer:"MovieConsumer",consumerAction:"GetAllMovies"});
  }, []);

  return (
    <>
      {
        consumerResult !== null ? <MoviesTable moviesData={consumerResult.result} /> : "Loading..."
      }
    </>
  );
};

export default Movies;