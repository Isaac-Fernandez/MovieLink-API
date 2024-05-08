import { useEffect, useState } from "react";
import { fetchMovies, IMAGE_PATH } from "../services/movieServices";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page,setPage] = useState();


  const getInitialData = async () => {
    try {
      const response = await fetchMovies(busqueda, page);
      setMovies(response);
      console.log(response);
    } catch (error) {
      alert("Algo fallo en la peticion");
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div className="navbar-light bg-light">
      {/*seccion donde se mostraran las peliculas actuales*/}
      <SearchBar text={busqueda} setText={setBusqueda} search={getInitialData}/>
      <Pagination page={page} setPage={setPage} />
      <div className="container mt-3">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <img
                src={`${IMAGE_PATH + movie.poster_path}`}
                alt=""
                height={600}
                width="100%"
              />
              <h4 className="text-center">{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
