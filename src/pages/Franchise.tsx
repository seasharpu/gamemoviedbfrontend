import { Dropdown } from "../components/molecules/Dropdown";
import { useState } from "react";

export default function Franchise() {


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
    <div className="flex flex-col justify-center items-center w-full">
      <p>This is the Franchise page</p>
      {franschiseData.map((franchise, index) => (
        <div key={index} className="w-full">
          <h5>{franchise.name}</h5>
          <Dropdown 
          dropped_down={dropdownData}
          styling="w-4/5"
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


//      {/* First Dropdown */}
//      <Dropdown
//        dropped_elements={
//          <div className={`transition-all ${dropdownVisibility ? "opacity-100 h-auto" : "opacity-0 h-0"}`}>
//            <div>hej</div>
//            <div>hej</div>
//            <div>hej</div>
//          </div>
//        }
//        // Pass the callback function as a prop to the child
//        />