import api from "../utils/api";

export default async function getMovies() {
    const response = await api.getFetch("http://localhost:8000/api/movies", "Movies response is incorrect.")
    const { movies } = response
    return movies
}