import React, { createContext, useState } from "react";

const AllTasContext = createContext();

const AllTasProvider = ({ children }) => {
    const [allTas, setAllTas] = useState([])
  return <AllTasContext.Provider value={{allTas, setAllTas}}>{children}</AllTasContext.Provider>;
};

export { AllTasContext };
export default AllTasProvider;
