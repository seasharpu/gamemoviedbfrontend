import { BodyText } from "../atoms/BodyText";
import { IoSearch } from "react-icons/io5";

export const Searchbar = ({ placeholder, styling }: 
    { 
        placeholder: string,
        styling: string
    }) => {
    
    return (
        <div className={`${styling} w-full flex justify-center`}>
            <div className="w-2/6 border-4 border-green sm-border bg-transparent rounded-3xl px-3 flex justify-between">
                <input 
                    className="" 
                    placeholder={placeholder} 
                    type="text"
                ></input>
                <IoSearch className="w-10 h-10"></IoSearch>
            </div>
        </div>
    );
}
//<p className={`${inline_styling}`}>{placeholder}</p>