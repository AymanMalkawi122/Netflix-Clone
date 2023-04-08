
import Movie from "../Movie/Movie";

function MovieList(props) {
    let data=props.data;
    
    return(
    data.map((obj,index)=>{
        return <Movie data={obj} key={index}/>
    })
    )
}

export default MovieList ;