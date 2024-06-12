import { Dropdown } from "../components/molecules/Dropdown";
import { useState } from "react";

export default function Franchise() {

  //dropDownData will need to be an array with boolean connected with the number of
  //dropdowns on the page to make the animation work properly
  //between the component and the page it's on
  const [dropdownData, setDropdownData] = useState(false)

  //an example of a structure <Dropdown/> works with
  const franschiseData = [
    {
      "id": 1,
      "name": "fran_1",
      "games": ["spel_1", "spel_2", "spel_3"]
    },
    {
      "id": 2,
      "name": "fran_2",
      "games": ["spel_1", "spel_2", "spel_3"]
    },
    {
      "id": 3,
      "name": "fran_3",
      "games": ["spel_1", "spel_2", "spel_3"]
    },
    {
      "id": 3,
      "name": "fran_4",
      "games": ["spel_1", "spel_2", "spel_3"]
    },
  ]

  return (
    <div className="bg-dark-purple h-screen w-full flex flex-col items-center">
      <p>This is the Franchise page</p>
      {franschiseData.map((franchise, index) => (
        <div key={index} className="w-full">
          <h5>{franchise.name}</h5>
          <Dropdown 
          dropped_down={dropdownData}
          styling="w-3/4"
          dropped_elements={
            franchise.games.map((game, index) => (
              <div key={index}>{game}</div>
            ))
          }></Dropdown>
        </div>
      ))}
    </div>
  );
}