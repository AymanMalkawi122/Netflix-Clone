
import Movie from "../Movie/Movie";

function MovieList(props) {
    let data=props.data;
    
    return(
    data.map((obj)=>{
        return <Movie data={obj} key={obj.id} url={props.url}/>
    })
    )
}

export default MovieList ;