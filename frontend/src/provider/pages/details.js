import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import useConsumerReducer from '../router/consumer';
import "./styles.css"

const MovieDetails = (props) => {
    const { slug } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const [consumerResult, consume] = useConsumerReducer();

    useEffect(() => {
        consume({consumer:"MovieConsumer",consumerAction:"GetAllMovies"});
    }, [])

    useEffect(() => {
        if(consumerResult !== null) {
            const data = consumerResult.result.movies.filter((movie) => movie.slug === slug)
            const toSet = data.length <=0 ? [] : data[0]
            setMovieDetails(toSet)
        }
    }, [consumerResult])

    const detailsPage = () => {
        return <div className="moviecard">
        <div className="movie-poster play-trailer"></div>
        <div id="movie-content">
          <div className="movie-ratings"><span className="star">★</span><span className="score">{movieDetails.rating}</span><span className="score-out-of">/ 10 (IMDB)</span></div>
          <div className="movie-title"><span>{movieDetails.title}</span><span className="movie-year">{movieDetails.releaseDate}</span></div>
          <div className="movie-details"><span className="movie-rating">R</span><span className="movie-duration">{movieDetails.duration}</span></div>
          <div className="movie-castcrew"><span className="title">Genres</span><span className="name">{movieDetails.genres}</span></div>
          <div className="movie-synopsis">{movieDetails.synopsis}</div>
        </div>
      </div>
    }

    return movieDetails.length <= 0 ? "Movie does not exist" : detailsPage()
}

export default MovieDetails