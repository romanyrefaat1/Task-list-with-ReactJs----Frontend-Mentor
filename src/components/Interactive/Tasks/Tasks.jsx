import React, { useContext, useEffect, useState } from "react";
import "./Tasks.css";
import { AllTasksContext } from "../../../contexts/AllTasksContext";
import Task from "./Task";
import TaskBottom from "./TaskBottom";
import { AllTasContext } from "../../../contexts/AllTas";

const Tasks = () => {
  const { allTasks, setAllTasks } = useContext(AllTasksContext);
  const { allTas, setAllTas } = useContext(AllTasContext);
  const [tasksToShow, setTasksToShow] = useState([]);
  const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);

  const [isActive, setIsActive] = useState(`all-button`); // bottom functionalities

  const [isDraain, setIsDraain] = useState(false);

  useEffect(() => {
    setTasksToShow(allTasks);
  }, [allTasks]);

  useEffect(() => {
    console.log(`tasksToShow:`, tasksToShow);
  }, [tasksToShow]);

  const removeTask = (taskIndex) => {
    setAllTasks((prev) => prev.filter((_, index) => index !== taskIndex));
  };

  const [isShowFilter, setIsShowFilter] = useState(false);
  const [tip, setTip] = useState(false);

  const handleShowFilter = () => {
    setIsShowFilter((prev) => !prev);
  };

  const handleFilterByTag = (ta) => {
    setTasksToShow(
      allTasks.filter((currTask) => currTask.tags.userTags.includes(ta))
    );
  };

  const handleDragStart = (index) => {
    setDraggedTaskIndex(index);
    setIsDraain(true);
  };

  const handleDrop = (index) => {
    if (draggedTaskIndex === null) return;
    setIsDraain(false);

    const updatedTasks = [...tasksToShow];
    const [movedTask] = updatedTasks.splice(draggedTaskIndex, 1);
    updatedTasks.splice(index, 0, movedTask);

    setTasksToShow(updatedTasks);
    setDraggedTaskIndex(null);
  };

  return (
    <div className="tasks-container">
      <div className="tasks-top">
        {isActive === `all-button` ? `All` : isActive === `active-button` ? `Active` : `Completed` }
        <button
          onMouseOver={() => setTip(true)}
          onMouseOut={() => setTip(false)}
          onClick={handleShowFilter}
          title="filter by tag"
          className="filter tooltip"
        >
          {/* {tip && <span className="filter-tooltip">Filter by tags</span>} */}

          <svg viewBox="0 0 512 512" className="tooltiptext" height="1em">
            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path>
          </svg>
        </button>
      </div>

      {isShowFilter && (
        <div className="filter-menu">
          <h5>Filter by Tag</h5>
          <ul className="filter-tab tas--container">
            {allTas.map((ta, index) => (
              <li
                onClick={() => handleFilterByTag(ta)}
                className="filter-ta"
                key={index}
              >
                {ta}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="tasks draable">
        {tasksToShow.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            onDragStart={() => handleDragStart(index)}
            onDrop={() => handleDrop(index)}
            removeTask={() => removeTask(index)}
            isDraain={isDraain}
          />
        ))}
      </ul>
      <TaskBottom
        isActive={isActive}
        setIsActive={setIsActive}
        setTasksToSow={setTasksToShow}
      />
    </div>
  );
};

export default Tasks;
