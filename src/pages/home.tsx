import { Searchbar } from "../components/molecules/Searchbar";
import Title from "../components/atoms/Title";
import { BodyText } from "../components/atoms/BodyText";
import { Song } from "../components/molecules/Song";
import { DiscoverWeekly } from "../components/home/DiscoverWeekly";

export default function Home() {



  return (
    <div className="bg-dark-purple h-screen w-full flex flex-col items-center">
      <Searchbar placeholder="games, soundtracks..." styling="w-4/5 mt-8" type=""></Searchbar>
      <div className="w-4/5 mt-20">
        <Title text="TITLE OF WEBPAGE" text_color="white" styling="" size="h2"></Title>
        <BodyText text="Description of webpage something." text_color="white" styling="" size="medium"></BodyText>
      </div>
      <div className="w-4/5 mt-20">
        <Title text="Listen to this!" text_color="white" styling="mb-3" size="h4"></Title>
        <Song title="Victory" composer="Joris De Man" thumbnail={undefined}></Song>
      </div>
      <div className="w-4/5 mt-20">
        <Title text="Discover Weekly" text_color="white" styling="mb-3" size="h4"></Title>
        <DiscoverWeekly></DiscoverWeekly>
      </div>
    </div>
  );
}