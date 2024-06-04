import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import Title from "../atoms/Title";

export const ArtistThumb = ({ title, composer, thumbnail, width_height, styling }: 
    { 
        title?: string ,
        composer?: string,
        thumbnail: string | undefined,
        width_height: string,
        styling: string
    }) => {

        const sizing = `w-${width_height} h-${width_height}`
    
    return (
        <div className={`${sizing} ${styling} bg-main-purple rounded-md flex justify-center items-center relative shadow-xl`}>
            {thumbnail === undefined ?
                <BsMusicNoteBeamed className="w-3/5 h-3/5 text-green"></BsMusicNoteBeamed>
                :
                <img className={`${sizing} overflow-y-clip overflow-x-clip bg-cover rounded-md `} alt={`thumbnail from ${title}`} src={thumbnail}></img>
            }
            <div className="absolute  ">
                <Title text={title} text_color="white" size="h3" styling=""></Title>
                <Title text={composer} text_color="white" size="h3" styling=""></Title>
            </div>
        </div>
    );
}

// how it is used
//<ArtistThumb title={track.title} composer={track.composer} thumbnail={track.thumbnail} width_height="full" styling=""></ArtistThumb>