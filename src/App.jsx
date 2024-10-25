import React, { useContext, useEffect, useState } from "react";
import { TemeContext } from "./contexts/temeContext";

import "./App.css";
import Eader from "./components/Eader/Eader";
import Interactive from "./components/Interactive/Interactive";
import Tasks from "./components/Interactive/Tasks/Tasks";
import { AllTasksContext } from "./contexts/AllTasksContext";

const App = () => {
  const { isDark } = useContext(TemeContext);
  const { allTasks, setAllTasks } = useContext(AllTasksContext);

  localStorage.clear();

  useEffect(() => {
    const storedTasks = localStorage.getItem("all-tasks");
    if (storedTasks) {
      setAllTasks(JSON.parse(storedTasks));
      console.log(`local storae set all tasks `);
    }
  }, [setAllTasks]);

  useEffect(() => {
    if (allTasks.length > 0) {
      localStorage.setItem(`all-tasks`, JSON.stringify(allTasks));
    }
    console.log(`all tasks are updated in local storae`);
  }, [allTasks]);

  return (
    <div className={`app ${isDark ? `dark-mode` : `lite-mode`}`}>
      <div className="back-imae"></div>
      <div className="main-paddin">
        <Eader />
        <Interactive />
        
      </div>
    </div>
  );
};

export default App;
