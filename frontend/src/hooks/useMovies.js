import { useEffect, useState } from 'react'
import getMovies from '../services/getMovies'

export default function useMovies() {
    const [ movies, setMovies ] = useState([])

    useEffect(() => {
        getMovies()
            .then(movies => {
                setMovies(movies)
            })
    }, [])

    return movies
}