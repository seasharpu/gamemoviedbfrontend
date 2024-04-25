import React from 'react';
import { BodyText } from '../components/atoms/BodyText';
import Button from '../components/atoms/Button';
import { Searchbar } from '../components/molecules/Searchbar';

export default function User() {
  let loggedIn: boolean = false;

  return (
    <div className="bg-dark-purple h-screen w-full flex flex-col items-center">
      <Searchbar placeholder="games, soundtracks..." styling="w-4/5 mt-8" type=""></Searchbar>
      <div className="w-4/5 mt-20 flex flex-col items-center">
        <BodyText text="Get recommendations and add favourite soundtrack and games with an account!" text_color="white" styling="" size="medium" />
        <Button textInput="Sign in" textSize="text-sm" textColor="text-green" boxWidth="w-20" boxHeight="h-10" boxColor="bg-main-purple" />
        <BodyText text="Or" text_color="white" styling="" size="medium" />
        <Button textInput="Register" textSize="text-sm" textColor="text-green" boxWidth="w-20" boxHeight="h-10" boxColor="bg-main-purple" />
      </div>
    </div>
  );
}


