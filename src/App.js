import './App.css';
import {useEffect, useState} from "react";
import SearchIcon from "./search.svg"
import MovieCard from './components/MovieCard';
import DisplayUsers from './components/DisplayUsers';
import Login from "./components/Login";

const API_URL = "http://www.omdbapi.com?apikey=81ea74d6"

function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    searchFilms('Batman')
  },[]);
  
  const searchFilms = async (title) =>{
    const req = await fetch(`${API_URL}&s=${title}`);
    const res = await req.json();

    // console.log(res.Search);
    setMovies(res.Search);

  }
  return (
    <div className="App">
      <Login setter={setUser} />
      { user ? 
      <div>
      <h1>{user} logged in</h1> 
      <DisplayUsers />
      <h1>My Movie App</h1>
      <div className='search'>
        <input
          placeholder="Search for a film"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      <img
        src={SearchIcon}
        alt='search logo'
        onClick={() => searchFilms(searchTerm)}
      />
        
      </div>
      {movies?.length > 0 ?
        (
        <div className='container' >
          {movies.map ((movie) => (
            <MovieCard movie = {movie} />
))}
        </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
      
      </div>
      : <h1>user not logged in</h1>}

    </div>
  );
}

export default App;
