import React from "react";
import { movieDB } from "@lib/movieDB";
import  MovieRow  from "@components/MovieRow";

export default function MoviePage(){
    return (
        <div>
            <p className="m-4 fw-bold fs-4 text-center">TOP 10 MOVIE</p>
            <div className="mx-auto vstack gap-2 " style={{ width: "70%"}}>
                {movieDB.map((movie,i)=>(
                    <MovieRow
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        rating={movie.rating}
                        number={i+1}
                    />
                ))}
            </div>
        </div>
    )
}