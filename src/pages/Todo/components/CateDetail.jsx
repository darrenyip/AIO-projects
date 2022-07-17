import { useState, useEffect } from "react";
import styled from "styled-components";
import { addTodo, removeTodo, allTodo } from "../todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledTaskText, StyledCheckBox } from "../todoStyle.style";

function CateDetail({ onAddNewTask, allTasks, onHandleFinished, selectCate }) {
  const dispatch = useDispatch();
  const todos = useSelector(allTodo);
  const [newTask, setNewTask] = useState({
    category:
      selectCate == null || selectCate == "All" ? "Uncategorized" : selectCate,
    task: "",
    completed: false,
    color: "red",
  });
  const [displayTasks, setDisplayTasks] = useState(allTasks);
  useEffect(() => {
    console.log("selectCate, allTasks changed!!!!!!!!!!!!!");
    // initial state will show all tasks
    if (selectCate == null || selectCate == "All") setDisplayTasks(allTasks);

    // if other caties are clicked, then filter the tasks
    if (selectCate) {
      const filterdTasks = allTasks.filter((el) => el.category == selectCate);
      setDisplayTasks(filterdTasks);
    }
    setNewTask({
      category:
        selectCate == null || selectCate == "All"
          ? "Uncategorized"
          : selectCate,
      task: "",
      completed: false,
      color: "red",
    });
  }, [selectCate, allTasks]);

  const handleChange = (e) => {
    const value = e.target.value;
    setNewTask({
      ...newTask,
      task: value,
      category:
        selectCate == null || selectCate == "All"
          ? "Uncategorized"
          : selectCate,
    });
    console.log(value);
  };
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    console.log(e);
    onAddNewTask(newTask);
    // redux flow
    dispatch(addTodo(newTask));
  };
  const onHoverCate = (e) => {
    console.log("mouse hover", e);
  };

  return (
    <div>
      <h1 className="text-[#000] font-bold text-[31px]">
        {selectCate ? selectCate : "All"} Tasks
      </h1>
      <br />
      <input
        className="mb-[30px] bg-[#F3F3F3] h-[47px] w-full rounded-[8px] pl-[27px]"
        type="text"
        value={newTask.task}
        placeholder="Add a new task insdie 'all' category"
        onKeyUp={handleKeyDown}
        onChange={handleChange}
      />
      {displayTasks.map((task, index) => {
        return (
          <div className="flex mb-[18px]" key={task.task + index}>
            <StyledCheckBox
              isFinished={task.completed}
              onClick={() => onHandleFinished(task)}
            ></StyledCheckBox>
            <div className="flex-1 flex">
              <StyledTaskText isFinished={task.completed}>
                {task.task || ""}
              </StyledTaskText>
              <div className="bg-red-300 rounded-lg py-[3px] px-[10px] text-white">
                {task.category}
              </div>
            </div>
          </div>
        );
      })}
      {JSON.stringify(todos)}
    </div>
  );
}

export default CateDetail;
