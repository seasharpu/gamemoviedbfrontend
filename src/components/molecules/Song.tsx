import { BsMusicNoteBeamed } from "react-icons/bs";
import { LoopingTextField } from "../atoms/LoopingTextField";
import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";

export const Song = ({ title, composer, thumbnail }: 
    { 
        title: string,
        composer: string,
        thumbnail: string | undefined
    }) => {

    const [playing, setPlaying] = useState(true);
    const icon_styling = "w-7 h-7 text-green hover:w-8 hover:h-8 active:w-7 active:h-7 transition-all";
    
    const interactTrack = () => {
        if(playing === true) {
            //user pauses soundtrack
            setPlaying(false);
        }
        else {
            //user starts soundtrack
            //all else should be paused
            setPlaying(true)
        }
    }

    return (
        <div className="w-full h-20 bg-blue-purple text-white rounded-md flex flex-row items-center justify-between px-2">
            <div className="w-14 h-14 bg-main-purple rounded-md flex justify-center items-center">
                {thumbnail === undefined ? 
                    <BsMusicNoteBeamed className="w-8 h-8 text-green"></BsMusicNoteBeamed>
                : 
                    <img className="overflow-y-clip overflow-x-clip bg-cover h-full w-full rounded-md" alt={`thumbnail from ${title}`} src={thumbnail}></img>
                }
            </div>
            <div className="flex flex-col items-center w-4/6">
                <LoopingTextField input={title} size="normal" text_color="white" styling="" ></LoopingTextField>
                <LoopingTextField input={composer} size="normal" text_color="white" styling="" ></LoopingTextField>
            </div>
            <div>
                <div className="w-10 h-10 bg-main-purple rounded-3xl flex justify-center items-center">
                    {playing ? <IoPlay onClick={interactTrack} className={icon_styling}></IoPlay> : <FaPause onClick={interactTrack} className={icon_styling}></FaPause>}
                </div>
            </div>
        </div>
    )
}

//how to use it
//<Soundtrack title="Victory" composer="Joris de Man" thumbnail={"https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></Soundtrack>
