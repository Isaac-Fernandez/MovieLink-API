import axios from "axios";



    const Api_URL = 'https://api.themoviedb.org/3'
    const Api_KEY = '935ce04432009ef96b6737d764065066'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE =  'https://image.tmdb.org/t/p/original'


//Peticion usando get a la API
const fetchMovies = async(searchKey) =>{
    const type = searchKey  ? "search" : "discover"
    const {data: { results },
} = await axios.get(`${Api_URL}/${type}/movie`, {
    params:{
        api_key: Api_KEY,
        query: searchKey,
    },
});
return (results);

}


    // return (
    //     <div> 
    //         {/*seccion donde se mostraran las peliculas actuales*/}
    //     <div className="container mt-3">
    //         <div className="row">
    //             {movies.map((movie)=>(
    //                 <div key={movie.id} className="col-md-4 mb-3" >
    //                     <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={600} width="100%" />
    //                     <h4 className="text-center">{movie.title}</h4>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // </div>
    // );

export { fetchMovies, IMAGE_PATH }