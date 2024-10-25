import { createContext, useEffect, useState } from "react";

const AllTasksContext = createContext();

const AllTasksProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(`all-tasks`)) || [];
  });

  //   useEffect(() => {
  //     const storedTasks = localStorage.getItem("all-tasks");
  //     if (storedTasks) {
  //         setAllTasks(JSON.parse(storedTasks));
  //         console.log(`allTasks is set from local storae`)
  //     }
  // }, []);

  return (
    <AllTasksContext.Provider value={{ allTasks, setAllTasks }}>
      {children}
    </AllTasksContext.Provider>
  );
};

export { AllTasksContext, AllTasksProvider };
export default AllTasksProvider;
