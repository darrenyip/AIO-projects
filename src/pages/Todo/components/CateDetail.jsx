import { useState, useEffect } from "react";
import {
  addTodo,
  toggleTodo,
  todoByFilter,
  getCurrentCate,
} from "../todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledTaskText, StyledCheckBox } from "../todoStyle.style";

function CateDetail({ selectCate }) {
  const dispatch = useDispatch();
  const todos = useSelector(todoByFilter);
  const currentCategory = useSelector(getCurrentCate);
  const [newTask, setNewTask] = useState({
    text: "",
    category: currentCategory == "All" ? "Uncategorized" : currentCategory,
    completed: false,
  });
  useEffect(() => {
    setNewTask({
      category: currentCategory == "All" ? "Uncategorized" : currentCategory,
      text: "",
      completed: false,
    });
  }, [currentCategory]);

  const handleChange = (e) => {
    const value = e.target.value;
    setNewTask((prev) => ({ ...prev, text: value }));
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") dispatch(addTodo(newTask));
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
        value={newTask.text}
        placeholder={`Add a new task inside ${currentCategory} category`}
        onKeyUp={handleKeyDown}
        onChange={handleChange}
      />

      {todos?.map((task, index) => {
        return (
          <div
            className="flex mb-[18px]"
            key={task.id + index}
            onClick={() => dispatch(toggleTodo({ id: task.id }))}
          >
            <StyledCheckBox isFinished={task.completed}></StyledCheckBox>
            <div className="flex-1 flex">
              <StyledTaskText isFinished={task.completed}>
                {task.text || ""}
              </StyledTaskText>
              <div className="bg-red-300 rounded-lg py-[3px] px-[10px] text-white">
                {task.category}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CateDetail;
