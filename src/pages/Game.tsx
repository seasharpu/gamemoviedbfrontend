import { Soundtrack } from "../components/molecules/Soundtrack";

export default function Game() {


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

    
    <div>
      <Soundtrack soundtracklist={soundtracks} dropdown={true} styling=""></Soundtrack>
      <Soundtrack soundtracklist={soundtracks} dropdown={false} styling=""></Soundtrack>
      <p>This is the Game Page</p>
    </div>
  );
}