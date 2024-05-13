import { isVisible } from "@testing-library/user-event/dist/utils";
import { Dropdown } from "../components/molecules/Dropdown";
import { useState } from "react";

export default function Franchise() {

    // State to hold dropdown visibility
    const [dropdownVisibility, setDropdownVisibility] = useState([{ isVisible: false }]);

    // Callback function to receive dropdown visibility state for a specific dropdown
    const handleVisibilityChange = (index, isVisible) => {
      // Update the visibility state for the dropdown at the specified index
      setDropdownVisibility(prevVisibility => {
          const updatedVisibility = [...prevVisibility];
          updatedVisibility[index] = isVisible;
          return updatedVisibility;
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p>This is the Franchise page</p>
      {/* First Dropdown */}
      <Dropdown
        dropped_elements={
          <div className={`transition-all ${dropdownVisibility ? "opacity-100 h-auto" : "opacity-0 h-0"}`}>
            <div>hej</div>
            <div>hej</div>
            <div>hej</div>
          </div>
        }
        // Pass the callback function as a prop to the child
        onVisibilityChange={handleVisibilityChange} />
      <Dropdown
        dropped_elements={
          <div className={`transition-all ${dropdownVisibility ? "opacity-100 h-auto" : "opacity-0 h-0"}`}>
            <div>hej</div>
            <div>hej</div>
            <div>hej</div>
          </div>
        }
        // Pass the callback function as a prop to the child
        onVisibilityChange={handleVisibilityChange} />
    </div>
  );
}