import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies , name , ratingSearch}) => {
    
    return (
        <div>
           {movies.filter(el=>el.name.toUpperCase().includes(name.toUpperCase().trim()) && el.rate >= ratingSearch).map(el=><MovieCard el={el}/>)}
        </div>
    )
}

export default MovieList
