import "./TaskBottom.css";
import { AllTasksContext } from "../../../contexts/AllTasksContext";
import { useContext, useEffect, useState } from "react";

const TaskBottom = ({ setTasksToSow , isActive, setIsActive}) => {
  const { allTasks, setAllTasks } = useContext(AllTasksContext);

  useEffect(() => console.log(`alltasks:`, allTasks), [allTasks]);

  function addActiveClassName(buttonType) {
    setIsActive(buttonType);
  }

  const andleSowAllTasks = () => {
    setTasksToSow(allTasks);
    console.log(`sow all`);
    addActiveClassName(`all-button`);
  };

  const andleActiveTasks = () => {
    setTasksToSow(allTasks.filter((item) => !item.tags.isCompleted && item));
    console.log(`active tasks`);
    addActiveClassName(`active-button`);
  };

  const andleCompletedTasks = () => {
    setTasksToSow(allTasks.filter((item) => item.tags.isCompleted && item));
    console.log(`active tasks`);
    addActiveClassName(`completed-button`);
  };

 

  const clearCompleted = () => {
    setAllTasks((prev) => prev.filter((item) => !item.tags.isCompleted));
  };

  const [numOfTasksNotCompleted, setNumOfTasksNotCompleted] = useState(0);

  useEffect(() => {
    setNumOfTasksNotCompleted(allTasks.length);
  }, [allTasks]);

  return (
    <div className="tasks--bottom">
      <span>{numOfTasksNotCompleted} task not completed</span>
      <div>
        <button
          className={isActive === `all-button` ? `active` : ``}
          onClick={(e) => andleSowAllTasks(e)}
        >
          All
        </button>
        <button
          className={isActive === `active-button` ? `active` : ``}
          onClick={(e) => andleActiveTasks(e)}
        >
          Active
        </button>
        <button
          className={isActive === `completed-button` ? `active` : ``}
          onClick={(e) => andleCompletedTasks(e)}
        >
          Completed
        </button>
      </div>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};

export default TaskBottom;
