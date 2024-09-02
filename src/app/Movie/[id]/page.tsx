import { movieIdPageParams } from '@lib/types'
import { movieDB } from '@lib/movieDB';
import React from 'react'
import { IconStar } from '@tabler/icons-react';

export default function MovieIdPage({params}: movieIdPageParams) {
    const id = Number(params.id);
    const selectedmovie = movieDB.find((movie)=> movie.id === id);

    if(!selectedmovie){
        return<p className='text-center'>Movie is not found!!!</p>
    }
  return (
    <div className='d-flex justify-content-center gap-4 mx-auto my-3'>
        <img src = {selectedmovie?.imgSrc} width="200"/>
    
        <div>
        <p>{selectedmovie?.title}</p>
        <p>{selectedmovie?.detail}</p>
        <span className='fw-bold fs-4 text-primary d-flex gap-1'>
            <IconStar size={35}/>
            {selectedmovie?.rating}
        </span>
        </div>
    </div>
  )
}
