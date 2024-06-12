import { Soundtrack } from "../components/molecules/Soundtrack";
import Title from "../components/atoms/Title";
import { BodyText } from "../components/atoms/BodyText";

export default function Game() {


  //to be replaced with one game and its soundtrack.
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
    {
        "title": "hej3",
        "composer": "Stuart",
        "thumbnail": "https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

  return (
    <div className="bg-dark-purple h-screen w-full flex flex-col items-center">
      <BodyText text="game stuff placeholder" text_color="white" styling="py-10" size="medium" />
      <Title text="Soundtrack" text_color="white" size="h5" styling=""></Title>
      <Soundtrack soundtracklist={soundtracks} dropdown={true} styling="w-5/6"></Soundtrack>
    </div>
  );
}