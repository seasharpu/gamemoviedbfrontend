import Title from "../atoms/Title";
import { Searchbar } from "../molecules/Searchbar";
import { RxCross1 } from "react-icons/rx";
import { Soundtrack } from "../games/Soundtrack";

export const AIPopupTool = ({ isAIToolOpen, handleClose }: 
    { 
        isAIToolOpen: boolean,
        handleClose: any
    }) => {

        console.log(isAIToolOpen);
        

    if(!isAIToolOpen) return null;
    
    return (
        <div className="fixed inset-0 z-10 h-screen w-screen flex justify-center items-center backdrop-blur-sm bg-black/25">
            <div className="w-4/5 h-3/5 bg-dark-purple rounded-md flex flex-col justify-around items-center">
                <Title text="Type keywords to get some suggestions." size="h4" text_color="white" styling=""></Title>
                <Searchbar placeholder="genre, feeling, etc..." styling="" type="AI tool"></Searchbar>
                
                <div className="overflow-y-scroll max-h-64 flex flex-col justify-center items-center">
                    <Soundtrack title="Victory" composer="Joris de Man" thumbnail={"https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></Soundtrack>
                    <Soundtrack title="Victory" composer="Joris de Man" thumbnail={"https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></Soundtrack>
                    <Soundtrack title="Victory" composer="Joris de Man" thumbnail={"https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></Soundtrack>
                    <Soundtrack title="Victory" composer="Joris de Man" thumbnail={"https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></Soundtrack>
                </div>
                <RxCross1 className="h-10 w-10 text-green hover:opacity-50 transition-all" onClick={handleClose}>X</RxCross1>
            </div>
        </div>
    );
}