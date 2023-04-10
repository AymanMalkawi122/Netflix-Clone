
import { useState, useEffect } from 'react';
import MovieList from "../MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';

async function GetData(setData, url, route) {
    setData("loading");
    const response = await fetch(`${url}${route}`);
    const jsonData = await response.json();
    setData(jsonData);
}

function FavList(props) {

    let [data, setData] = useState([]);

    useEffect(() => {
        GetData(setData, props.url,"/getMovies")
    }, []);
    return (
        <main>
            {(data === "loading") ? (<h1>Loading data</h1>) :
                (<MovieList data={data} url={props.url}/>)}
        </main>
    )

}

export default FavList;