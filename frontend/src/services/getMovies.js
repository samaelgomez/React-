export default function getMovies() {
    return fetch("http://localhost:8000/api/movies", {
        method: 'GET'
    }).then(res => {
        if (!res.ok) throw new Error('Movies response is incorrect.')
        return res.json()
    }).then(res => {
        const { movies } = res
        return movies
    })
}