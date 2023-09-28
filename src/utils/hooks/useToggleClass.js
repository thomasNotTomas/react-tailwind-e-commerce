import { useState } from "react";

export default function useToggleClass(initialValue) {

    const [isClassActive, setIsClassActive] = useState(initialValue);

    const toggleClassState = () => {
      setIsClassActive((prevState) => !prevState);
    }


  return {
    isClassActive,
    toggleClassState,
  };
}
