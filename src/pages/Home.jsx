import {useEffect, useState} from 'react'
import { fetchMovies,  IMAGE_PATH } from '../services/movieServices'


const Home = () => {
  
  const [movies, setMovies] = useState([])
  const getInitialData = async () => {
    try{
      const response = await fetchMovies()
      setMovies(response)
      console.log(response);
    }catch (error) {
      alert('Algo fallo en la peticion')
    }
  }


  useEffect(() => {
    getInitialData()
  },[])

  return (
      <div> 
          {/*seccion donde se mostraran las peliculas actuales*/}
      <div className="container mt-3">
          <div className="row">
              {movies.map((movie)=>(
                  <div key={movie.id} className="col-md-4 mb-3" >
                      <img src={`${IMAGE_PATH + movie.poster_path}`} alt="" height={600} width="100%" />
                      <h4 className="text-center">{movie.title}</h4>
                  </div>
              ))}
          </div>
      </div>
  </div>
  );
}

export default Home