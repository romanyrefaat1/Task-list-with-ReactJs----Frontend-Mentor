import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrTaskContext } from "../../../contexts/CurrTask";

import "./AddTask.css";
import IsCompletedRadioButton from "../isCompletedRadioButton";
import { AllTasksContext } from "../../../contexts/AllTasksContext";
import { AllTasContext } from "../../../contexts/AllTas";

const AddTask = () => {
  const { setCurrTask, currTask } = useContext(CurrTaskContext); // {{text, tags}}
  const { setAllTasks, allTasks } = useContext(AllTasksContext);
  const { setAllTas } = useContext(AllTasContext);
  const [isTasSown, setIsTasSown] = useState(false);
  const inputTask = useRef();

  // const { allTasks } = useContext();

  const focusOnInput = () => {
    inputTask.current.focus();
    console.log(`focus`);
  };

  useEffect(() => console.log(`currTask:`, currTask), [currTask]);

  const andleIsCompleted = () => {
    setCurrTask((prev) => ({
      ...prev,
      tags: {
        ...prev?.tags,
        isCompleted: !prev.tags.isCompleted,
      },
    }));
  };

  const andleAddTask = (e) => {
    if (e.code !== `Enter`) return;
    setAllTas([...currTask?.tags.userTags]);
    console.log(`add task`);
    setAllTasks((prev) => [...prev, currTask]);
  };

  const andleAddTa = (e) => {
    if (e.code !== `Enter`) return;
    setCurrTask((prev) => ({
      ...prev,
      tags: {
        ...prev.tags,
        userTags: [...prev.tags.userTags, e.target.value],
      },
    }));
  };

  const removeTa = (index) => {
    // currTask?.tags.userTags.map((_, i) => i !== index})
    setCurrTask((prev) => ({
      ...prev,
      tags: {
        ...prev.tags,
        userTags: prev.tags.userTags.filter((_, i) => i !== index),
      },
    }));
  };

  const tolleSowTasInp = () => {
    setIsTasSown((prev) => !prev);
    focusOnInput();
  };

  return (
    <div className="text-input">
      <div className="add-input-text--container">
        <IsCompletedRadioButton
          isAbsolute={true}
          andleClick={andleIsCompleted}
        />
        <input
          type="text"
          ref={inputTask}
          onChange={(e) =>
            setCurrTask((prev) => ({ ...prev, text: e.target.value }))
          }
          placeholder="Create a new todo.."
          onKeyDown={(e) => andleAddTask(e)}
        />
        <div>
          <span onClick={tolleSowTasInp}>Add tag</span>
        </div>
      </div>
      {isTasSown && (
        <div>
          <input
            type="text"
            onKeyDown={(e) => andleAddTa(e)}
            placeholder="Add Tags.."
          />
          <ul className="tas--container">
            {currTask?.tags.userTags.map((ta, index) => (
              <li
                key={index}
                className="task-over"
                onClick={() => removeTa(index)}
              >
                {ta}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddTask;
