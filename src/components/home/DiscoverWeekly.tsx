import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { ArtistThumb } from "../molecules/ArtistThumb";
import Title from "../atoms/Title";

export const DiscoverWeekly = ({ soundtracks }: 
    { 
        soundtracks: any[]
    }) => {

        const fetchFunction = () => {

        }
    
    return (
        <div className={`w-full flex flex-row justify-center`}>
            {soundtracks.map((track, index) => (
                <div key={index}>
                    <ArtistThumb title={track.title} composer={track.composer} thumbnail={track.thumbnail} width_height="24"></ArtistThumb>
                </div>
            ))}
        </div>
    );
}

