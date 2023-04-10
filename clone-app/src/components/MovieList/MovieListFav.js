import FavMovie from "../Movie/FavMovie";

function MovieList(props) {
    let data=props.data;
    
    return(
    data.map((obj)=>{
        return <FavMovie data={obj} key={obj.id} url={props.url}/>
    })
    )
}

export default MovieList ;