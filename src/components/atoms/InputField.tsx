import { IoSearch } from "react-icons/io5";
import { useState } from "react";

export const InputField = ({ placeholder, styling, type }:
    {
        placeholder: string,
        styling: string,
        type: string
    }) => {

    const searchFunction = () => {
        console.log("Searching some stuff")
    }

const [input_text, setInput_text] = useState("");
const searchbar_styling = "w-8 h-8 text-green"

return (
    <div className={`${styling} w-full flex justify-center`}>
        <div className="w-full border-4 border-green sm-border text-green bg-transparent rounded-3xl px-3 flex justify-between items-center">
            <input
                className="w-full bg-transparent focus:outline-none py-2 text-center"
                placeholder={placeholder}
                type="text"
                value={input_text}
                onChange={(e) => { setInput_text(e.target.value) }}
                onClick={searchFunction}
            ></input>
        </div>
    </div>
);
}

