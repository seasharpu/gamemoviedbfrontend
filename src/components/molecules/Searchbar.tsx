import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { motion } from 'framer-motion'

export const Searchbar = ({ placeholder, styling, type }: 
    { 
        placeholder: string,
        styling: string,
        type: string
    }) => {

        const fetchFunction = () => {
        //types: gameAPI, movieAPI, and AI tool.
        //the types decide which function the searchbar button will call.
        switch (type) {
            case "gameAPI":
                console.log("gameAPI");
                //function to fetch gameAPI from backend.
                break;
            case "movieAPI":
                console.log("movieAPI");
                //function to fetch movieAPI from backend.
                break;
            case "AI tool":
                console.log("AI Tool");
                //function to fetch AI tool from backend.
                break;
            }
        }

    const [input_text, setInput_text] = useState("");
    const searchbar_styling= "w-8 h-8 text-green"
    
    return (
        <div className={`${styling} w-full flex justify-center`}>
            <div className="w-4/6 border-4 border-green sm-border text-green bg-transparent rounded-3xl px-3 flex justify-between items-center">
                <input 
                    className="w-full bg-transparent focus:outline-none py-2" 
                    placeholder={placeholder} 
                    type="text"
                    value={input_text}
                    onChange={(e) => {setInput_text(e.target.value)}}
                ></input>
                <IoSearch className={`${searchbar_styling} ${input_text.length !== 0 ? "opacity-1 hover:w-10 hover:h-10 active:w-8 active:h-8" : "opacity-30"} transition-all`}></IoSearch>
            </div>
        </div>
    );
}

// how it is used
//<Searchbar placeholder="game, soundtrack..." styling="" type="gameAPI"></Searchbar>