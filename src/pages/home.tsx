import { DiscoverWeekly } from "../components/home/DiscoverWeekly";

export default function Home() {

  let soundtracks = [
    {
      title: "title",
      composer: "composer",
      thumbnail: undefined
    },
    {
      title: "Victory",
      composer: "Joris De Man",
      thumbnail: "https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]

  return (
    <div>
      <p>This is the Home Page</p>
      <DiscoverWeekly soundtracks={soundtracks}></DiscoverWeekly>
    </div>
  );
}