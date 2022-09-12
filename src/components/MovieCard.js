import React from "react";

const MovieCard = ({movie: {imdbID, Year, Poster, Title, Type }}) => {
    return(
        <div className="moviecard" key ={imdbID}>
            <div>
                {Year}
            </div>
            <div>
                <img
                    src={Poster !== "N/A" ? Poster : "https://dummyimage.com/300x350/fff/aaa"} 
                    alt={Title}
                />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;