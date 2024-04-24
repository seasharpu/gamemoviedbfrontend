import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import Title from "../atoms/Title";

export const ArtistThumb = ({ title, composer, thumbnail, width_height }: 
    { 
        title?: string ,
        composer?: string,
        thumbnail: string,
        width_height: string
    }) => {

        const fetchFunction = () => {

        }

        const sizing = `w-${width_height} h-${width_height}`
    
    return (
        <div className={` ${sizing} bg-main-purple rounded-md flex justify-center items-center relative`}>
            {thumbnail === undefined ?
                <BsMusicNoteBeamed className="w-3/5 h-3/5 text-green"></BsMusicNoteBeamed>
                :
                <img className={` ${sizing} overflow-y-clip overflow-x-clip bg-cover rounded-md`} alt={`thumbnail from ${title}`} src={thumbnail}></img>
            }
            <div className="absolute">
                <Title text={title} text_color="white" size="h3" styling=""></Title>
                <Title text={composer} text_color="white" size="h3" styling=""></Title>
            </div>
        </div>
    );
}

// how it is used
//<Searchbar placeholder="game, soundtrack..." styling="" type="gameAPI"></Searchbar>