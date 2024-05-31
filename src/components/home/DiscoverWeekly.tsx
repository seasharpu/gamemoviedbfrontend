import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { ArtistThumb } from "../molecules/ArtistThumb";
import Title from "../atoms/Title";

export const DiscoverWeekly = () => {

    const soundtracks = [
        {
            "title": "hej1",
            "composer": "Sven",
            "thumbnail": undefined
        },
        {
            "title": "hej2",
            "composer": "Stig",
            "thumbnail": "https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const [selected_song, setSelected_song] = useState(soundtracks[0])
    const [selected_song_idx, setSelected_song_idx] = useState(0)
    

    useEffect(() => {
        const indx_song = soundtracks.findIndex(song => song.title === selected_song.title);
        setSelected_song_idx(indx_song)
    },[])

    const change_selected_song = (index: number) => {
        setSelected_song(soundtracks[index])
        const indx_song = soundtracks.findIndex(song => song.title === selected_song.title);
        setSelected_song_idx(indx_song)
    }

    return (
        <div className={`w-full `}>
            <div className="absolute flex flex-row justify-center"> 
            {soundtracks.map((track, index) => (
                <div key={index} className="w-72 h-72 ">
                    <ArtistThumb title={track.title} composer={track.composer} thumbnail={track.thumbnail} width_height="full"></ArtistThumb>
                </div>
            ))}
            </div>
        </div>
    );
}

