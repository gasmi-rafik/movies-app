import React ,{useState} from 'react'
import MovieList from './components/MovieList'
import Navbarr from './components/Navbar/Navbarr'
import {moviesData} from './components/MoviesData'
import AddMovie from './components/AddMovie/AddMovie'
import "./App.css"
const App = () => {
  const [movies , setMovies]= useState(moviesData)
  const [name , setName] = useState("")
  const [ratingSearch , setRatingSearch] = useState(0)
  const addfilm =(newmovie)=>{
    return setMovies([...movies , newmovie])
  }
  return (
    <div className="App">
      <Navbarr name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/>
     
 <div className="postionADD" style={{alignItems:"center"}}>  
 <span>
      
     <MovieList  movies={movies} name={name} ratingSearch={ratingSearch} />
     </span>
       <span >
     <AddMovie addfilm={addfilm} />
     </span>
     </div>   
    </div>
  )
}

export default App
