import React, { useState } from "react";
import TestimonialsContext from "./testimonialsContext";

const TestimonialsState = props => {
  const [cardsData, setCardsData] = useState([])

  return (
    <TestimonialsContext.Provider
      value={{
        cardsData,
        setCardsData
      }}
    >
      {props.children}
    </TestimonialsContext.Provider>
  );
};

export default TestimonialsState;
